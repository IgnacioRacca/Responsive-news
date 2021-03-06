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
	name: false,
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

const focusMethod = function(e) {
	switch (e.target.name) {
		case "name":
			validationFocus(regular.name, e.target, e.target.name);
		case "mail":
			validationFocus(regular.mail, e.target, e.target.name);
		break;
		case "password":
			validationFocus(regular.password, e.target, e.target.name);
		break;
		case "age":
			validationFocus(regular.age, e.target, e.target.name);
		break;
		case "phone":
			validationFocus(regular.phone, e.target, e.target.name);
		break;
		case "street":
			validationFocus(regular.street, e.target, e.target.name);
		break;
		case "city":
			validationFocus(regular.city, e.target, e.target.name);
		break;
		case "cp":
			validationFocus(regular.cp, e.target, e.target.name);
		break;
		case "dni":
			validationFocus(regular.dni, e.target, e.target.name);
		break;
	}
}

const validationFocus = function(expression, input, field) {
	if(expression){
		document.getElementById(`group-${field}`).classList.remove('form-group-incorrect');
		document.querySelector(`#group-${field} .form-input-error`).classList.remove('form-input-error-active');
	}	
	if(field === 'age'){
		document.querySelector(`#group-${field} .form-input-error2`).classList.remove('form-input-error-active');
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

const hello = function(e){
	if(e.target.name === 'name'){
		document.getElementById('output').innerHTML='<h2>Hello, '+e.target.value+'</h2>';
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




inputs.forEach(function(input) {
	input.addEventListener('blur', validationForm);
	input.addEventListener('focus', focusMethod);
	input.addEventListener('keyup', hello);
});

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if(fields.name && fields.mail && fields.password && fields.age && fields.phone && fields.street && fields.city && fields.cp && fields.dni){
		//document.getElementById('form-message-success').classList.add('form-message-success-active');
		alert('Data uploaded to the form \n\n'+'Full Name: ' + e.target.name.value +'\n'+'Email: ' + e.target.mail.value +'\n'+'Age: ' + e.target.age.value +'\n'+'Phone: ' + e.target.phone.value +'\n'+'Street Address: ' + e.target.street.value +'\n'+'City: ' + e.target.city.value +'\n'+'Postal Code: ' + e.target.cp.value +'\n'+'DNI: ' + e.target.dni.value +'\n'); 
		form.reset();
		
	} else {
		//document.getElementById('form-message').classList.add('form-message-active');
		var string='';
		for (const property in fields) {
			if(fields[property] === false){
				string += property; 
				string +=':  invalid information. \n';
				document.getElementById(`group-${property}`).classList.add('form-group-incorrect');
				document.querySelector(`#group-${property} .form-input-error`).classList.add('form-input-error-active');
			}
		  }
		alert('The following fields have wring information, please correct them \n\n'+string);
	}

});