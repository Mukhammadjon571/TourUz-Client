function confirmHandler(e) {
  e.preventDefault();

  console.log(localStorage.getItem('email'));

  const data = {
    password: e.target.confirmpass.value,
    email: localStorage.getItem('email'),
  };

  fetch(`https://1615-195-158-20-242.in.ngrok.io/auth/verify`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      window.location.href = `https://mollyshop.s3.ap-southeast-1.amazonaws.com/web/mainpage.html`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
