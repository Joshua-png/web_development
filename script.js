document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

// //  // Your web app's Firebase configuration
// //   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// //   var firebaseConfig = {
// //     apiKey: "AIzaSyDgsX5qKhzB2jHTjHhYDLXT7kpeauNHi1Y",
// //     authDomain: "web-development-poject.firebaseapp.com",
// //     databaseURL: "https://web-development-poject-default-rtdb.firebaseio.com",
// //     projectId: "web-development-poject",
// //     storageBucket: "web-development-poject.appspot.com",
// //     messagingSenderId: "436437213765",
// //     appId: "1:436437213765:web:2566dac10817030b89b92c",
// //     measurementId: "G-DYVYVN6Y2K"
// //   };
// //   // Initialize Firebase
// //   firebase.initializeApp(firebaseConfig);

// // // const dbRef = firebase.database().ref();
// // // const usersRef = dbRef.child('users');

// const form = document.getElementById('form');
// //const username = document.getElementById('username');
// //const email = document.getElementById('email');
// //const password = document.getElementById('password');
// //const password2 = document.getElementById('password2');


// const fullName = document.getElementById('full_name');
// const username = document.getElementById('user_name');
// const email = document.getElementById('email');
// const phoneNumber = document.getElementById('phone_number');
// const password = document.getElementById('password'); 
// const signUpBtn = document.getElementById('sign_up'); 


// // form.addEventListener('submit', e => {
// // 	e.preventDefault();
	
// // 	checkInputs();
// // });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const fullnameValue = fullName.value.trim();
// 	const usernameValue = username.value.trim();
// 	const emailValue = email.value.trim();
// 	const passwordValue = password.value.trim();
// 	const phoneNumberValue = phoneNumber.value.trim();
// 	//const password2Value = password2.value.trim();
// 	if(fullnameValue === '') {
// 		setErrorFor(fullName, 'Full name cannot be blank');
// 	} else {
// 		setSuccessFor(fullName);
// 	}


// 	if(usernameValue === '') {
// 		setErrorFor(username, 'Username cannot be blank');
// 	} else {
// 		setSuccessFor(username);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
	
// 	if(phoneNumberValue === '') {
// 		setErrorFor(password, 'Phone Number cannot be blank');
// 	} else {
// 		setSuccessFor(phoneNumber);
// 	}

// 	if(passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be blank');
// 	} else {
// 		setSuccessFor(password);
// 	}
	
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }







