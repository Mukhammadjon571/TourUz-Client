import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:4000");

function App() {
  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  const getAllMessages = () => {
    socket.emit("all_messages", { brandId: 1 });
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  useEffect(() => {
    socket.on("receive_all_messages", (messages) => {
      console.log(messages);
      setMessageReceived(messages);
    });

    socket.on("receive_message", (data) => {
      setMessageReceived(data.text);
    });
  }, [socket]);
  return (
    <div className="App">
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      <ul>
        {messageReceived.map((i) => (
          <li>
            {i.recieverBrandId ? "user" : "admin"} : {i.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
