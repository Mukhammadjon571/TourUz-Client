function forgotPassword(e) {
  e.preventDefault();

  const data = {
    email: e.target.email.value,
  };

  fetch(`forgotPassword`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log('Success');
      window.location.href = `https://mollyshop.s3.ap-southeast-1.amazonaws.com/web/index.html`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
