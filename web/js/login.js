function loginHandler(e) {
  e.preventDefault();

  localStorage.setItem("email", e.target.email.value);
  console.log(localStorage.getItem("email"));

  const data = {
    email: e.target.email.value,
    password: e.target.pass.value,
  };

  fetch(`https://4e49-195-158-20-242.in.ngrok.io/auth/login`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log("Success")

      // 
    

      window.location.href =  `https://mollyshop.s3.ap-southeast-1.amazonaws.com/web/confirm.html`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
