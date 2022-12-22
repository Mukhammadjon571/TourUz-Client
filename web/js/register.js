function registerHandler(e) {
  e.preventDefault();

  const data = {
    email: e.target.email.value,
    full_name: e.target.fullname.value,
    phone_number: e.target.pass.value,
    password: e.target.confirmpass.value,
    username: e.target.username.value,
  };

  fetch(`https://044b-195-158-20-242.in.ngrok.io/auth/register`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((data) => {
      console.log(data);
      window.location.href =
        `https://mollyshop.s3.ap-southeast-1.amazonaws.com/web/confirm.html`;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// `https://ws.com/user/${2}`;

// fetch().then(i=>i.ok ? i.json()).then(i=>{
// const wrapper = document.querySelector('#some');
// wrapper.innerHTML +=`<div class="wrap-input100 validate-input">
// 						<input class="input100" type="phonenumber" name="pass" placeholder="Phone number">
// 						<span class="focus-input100"></span>
// 						<span class="symbol-input100">
// 						<p>${i.message}</p>
// 							<i class="fa fa-phone" aria-hidden="true"></i>
// 						</span>
// 						<a href="/tour-detail?id=${i.id}"></a>
// 					</div>`
// })
// //Details page
// const id= params.get('id') // 14
// fetch(`https://jknjdkb.io/tours/details/${id}`, {method: "GET"}).then(i=>i.json())
