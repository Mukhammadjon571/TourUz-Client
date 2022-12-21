function confirmHandler(e) {
  e.preventDefault();

  console.log(e.target.email.value, e.target.pass.value);

  const data = {
    email: e.target.email.value,
  };

  fetch('https://b0fb-82-215-90-18.eu.ngrok.io/auth/verify', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log('Success');
      window.location.href =
        'file:///home/mukhammadjon/OS/Tour-Uz/web/main.html';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
