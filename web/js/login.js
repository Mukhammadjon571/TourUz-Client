function loginHandler(e) {
  e.preventDefault();

  console.log(e.target.email.value, e.target.pass.value);

  const data = {
    email: e.target.email.value,
    password: e.target.pass.value,
  };

  fetch('https://b0fb-82-215-90-18.eu.ngrok.io/auth/login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log("Success")
      window.location.href =
        'https://mollyshop.s3.ap-southeast-1.amazonaws.com/html/confirm.html';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
