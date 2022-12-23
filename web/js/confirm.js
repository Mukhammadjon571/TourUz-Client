function confirmHandler(e) {
  e.preventDefault();

  console.log(localStorage.getItem('email'));

  const data = {
    password: e.target.confirmpass.value,
    email: localStorage.getItem('email'),
  };

  fetch(`https://3f1f-195-158-20-242.in.ngrok.io/auth/verify`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      window.location.href = ``;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
