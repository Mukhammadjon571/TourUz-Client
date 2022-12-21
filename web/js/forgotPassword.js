function forgotPassword(e) {
  e.preventDefault();

  const data = {
    email: e.target.email.value,
  };

  fetch('https://b0fb-82-215-90-18.eu.ngrok.io/auth/login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      window.location.href =
        'file://home/mukhammadjon/OS/Tour-Uz/web/login.html';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
