function settingHandler(e) {
  e.preventDefault();
  
  const data = {
    email: e.target.email.value,
    full_name: e.target.fullname.value,
    phone_number: e.target.pass.value,
    password: e.target.confirmpass.value,
    username: e.target.username.value,
  };

  fetch(`https://3f1f-195-158-20-242.in.ngrok.io/users/`, {
    method: 'PUT', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log(data);
      window.location.href =
        `web/confirm.html`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}