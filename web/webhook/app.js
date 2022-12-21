const express = require("express");
const app = express();
const http = require("http").Server(app);
const { webhookCallback, Bot } = require("grammy");
const cors = require("cors");
const { Server } = require("socket.io");

require("dotenv").config();

app.use(express.json());
app.use(cors());

const io = new Server(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const messages = [
  {
    recieverBrandId: 123,
    reveiverChatId: null,
    text: "Assalomu alaykum Admin",
  },
  {
    recieverBrandId: null,
    reveiverChatId: 321,
    text: "Va alaykum assalom User",
  },
];

io.on("connection", (socket) => {
  socket.on("all_messages", (data) => {
    io.emit("receive_all_messages", messages);
  });

  socket.on("send_message", (data) => {
    io.emit("receive_message", data);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

(async () => {
  /* fetch bots from the API */
  const botsInfo = [
    { token: "5760287778:AAFvJZAP0Vg9xI8QcQuT_SZNVigzkyBBVKs" },
    { token: "5548535952:AAHeySSsEZmlWnwl4VICSOyPYmTU70bh--g" },
  ];

  const bots = await Promise.all(runner(botsInfo));

  botsInfo.forEach(async (botInfo, idx) => {
    app.use(`/bot/${botInfo.token}`, webhookCallback(bots[idx], "express"));
  });
})();

function runner(bots) {
  return bots.map(async (botInfo) => {
    const bot = new Bot(botInfo.token);

    bot.on("message", (ctx) => {
      const user = ctx.update.message.chat.first_name;
      const userId = ctx.update.message.chat.id;
      const text = ctx.update.message.text;
      const bot = ctx.me.first_name;

      // console.log({ user, text, bot });
      io.emit("receive_message", { chatId: userId, text: text });
    });

    await bot.api.setWebhook(
      `${process.env.WEBHOOK_URL}/${botInfo.token}`,
      botInfo.token
    );

    return bot;
  });
}

http.listen(process.env.APP_PORT, async () => {
  console.log(`Server is running on port`, process.env.APP_PORT);
});
