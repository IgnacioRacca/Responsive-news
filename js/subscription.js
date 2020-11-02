const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const regular = {
	name: /^([a-zA-Z]){3,16}\s([a-zA-Z]){3,16}$/,
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password: /^(?=\w*\d)(?=\w*[a-z])\S{8,16}$/,
	age: /^(\d{2})$/,
	phone: /^(\d{7,10})$/,
	street: /^([a-zA-Z]{3,30})\s(\d{2,4})$/, 
	city: /^([a-zA-Z]{3,30})$/,
	cp: /^^([a-zA-Z]{1,4})(\d{2,20})$/,
	dni: /^(\d{7,8})$/,
}

const fields = {
	names: false,
	mail: false,
	password: false,
	age: false,
	phone: false,
	street: false, 
	city: false,
	cp: false,
	dni: false,
}

const validationForm = function(e) {
	switch (e.target.name) {
		case "name":
			validationField(regular.name, e.target, e.target.name);
		break;
		case "mail":
			validationField(regular.mail, e.target, e.target.name);
		break;
		case "password":
			validationField(regular.password, e.target, e.target.name);
			validationPassword2();
		break;
		case "password2":
			validationPassword2();
		break;
		case "age":
			validationAge();
		break;
		case "phone":
			validationField(regular.phone, e.target, e.target.name);
		break;
		case "street":
			validationField(regular.street, e.target, e.target.name);
		break;
		case "city":
			validationField(regular.city, e.target, e.target.name);
		break;
		case "cp":
			validationField(regular.cp, e.target, e.target.name);
		break;
		case "dni":
			validationField(regular.dni, e.target, e.target.name);
		break;
	}
}



const validationField = function(expression, input, field) {
	if(expression.test(input.value)){
		document.getElementById(`group-${field}`).classList.remove('form-group-incorrect');
		document.querySelector(`#group-${field} .form-input-error`).classList.remove('form-input-error-active');
		fields[field] = true;
	} else {
		document.getElementById(`group-${field}`).classList.add('form-group-incorrect');
		document.querySelector(`#group-${field} .form-input-error`).classList.add('form-input-error-active');
		fields[field] = false;
	}
}

const validationPassword2 = function() {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`group-password2`).classList.add('form-group-incorrect');
		document.querySelector(`#group-password2 .form-input-error`).classList.add('form-input-error-active');
		fields['password'] = false;
	} else {
		document.getElementById(`group-password2`).classList.remove('form-group-incorrect');
		document.querySelector(`#group-password2 .form-input-error`).classList.remove('form-input-error-active');
		fields['password'] = true;
	}
}

const validationAge = function(){
	const inputAge = document.getElementById('age');
	if ((inputAge.value % 1 == 0) && (inputAge.value>=18)) {
		document.getElementById(`group-age`).classList.remove('form-group-incorrect');
		document.querySelector(`#group-age .form-input-error`).classList.remove('form-input-error-active');
		document.querySelector(`#group-age .form-input-error2`).classList.remove('form-input-error-active');
		fields['age'] = true;
	}else if(inputAge.value % 1 !== 0){ 
		document.getElementById(`group-age`).classList.add('form-group-incorrect');
		document.querySelector(`#group-age .form-input-error2`).classList.add('form-input-error-active');
		document.querySelector(`#group-age .form-input-error`).classList.remove('form-input-error-active');
		fields['age'] = false;
	}else{
		document.getElementById(`group-age`).classList.add('form-group-incorrect');
		document.querySelector(`#group-age .form-input-error`).classList.add('form-input-error-active');
		document.querySelector(`#group-age .form-input-error2`).classList.remove('form-input-error-active');
		fields['age'] = false;
	}
}


focusMethod= function focus() {
	document.getElementById(`group-age`).classList.remove('form-group-incorrect');
	document.querySelector(`#group-age .form-input-error`).classList.remove('form-input-error-active');
	document.querySelector(`#group-age .form-input-error2`).classList.remove('form-input-error-active');
}
	
inputs.forEach(function(input) {
	input.addEventListener('blur', validationForm);
});

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if(fields.name && fields.mail && fields.password && fields.age && fields.phone && fields.street && fields.city && fields.cp && fields.dni){
		form.reset();
		document.getElementById('form-message-success').classList.add('form-message-success-active');
	} else {
		document.getElementById('form-message').classList.add('form-message-active');
		alert('full name: incorrect');
	}
});