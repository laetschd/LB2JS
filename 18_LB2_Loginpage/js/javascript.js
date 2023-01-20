const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');


// Hier ist das JSON

const loginData = {
	"email": "test1@gmail.com",
	"password": "Test2023@*"
  };
  
// Hier werden die Einträge nach dem Submit geprüft

var button = document.getElementById("submit-button");

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

// Hier werden die Input Einträge geprüft

function checkInputs() {
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'Email muss ausgefüllt werden');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'gültige Email eingeben!');
	} else {
		setSuccessFor(email)
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Passwort muss ausgefüllt werden');
    }  else {
		setSuccessFor(password);
	}

	}
 
// Diese Funktion wird verwendet um eine Fehlermeldung für ein bestimmtes Eingabeelement zu setzen.

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

// Hier werden die Daten vom JSON-Format eingebracht

function setSuccessFor(input) {
	const formControl = input.parentElement;
	const emailValue = email.value.trim();
	const passValue = password.value.trim();

	if (emailValue == loginData.email && passValue == loginData.password) {
	  formControl.className = 'form-control success';
	  window.location = 'loginerfolgreich.html';
	} else {
	  formControl.className = 'form-control error';
	  const small = formControl.querySelector('small');
	  small.innerText = 'Login fehlgeschlagen';
	}
  }

// Hier wird das RegEx für die Email deklariert

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//  Hier der Passwordstrengthtester

let parameters = {
	count : false,
	letters : false,
	numbers : false,
	special : false
}

let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

//  Hier wurden die Funktionen definiert. Mit der Filtermethode wurde die Anzahl der Eigenschaften im Objekt "parameters" gezählt, die den Wert "true" haben, und diese Anzahl wird der Variablen "barLength" zugewiesen.

function strengthChecker() {
	let password = document.getElementById("password").value;

	parameters.letters = (/[A-Za-z]+/.test(password))?
	true:false;
	parameters.numbers = (/[0-9]+/.test(password))?
	true:false;
	parameters.special = (/[!\"$%&/()=?@~'\\.\';:+=^*_-]+/.test(password))?
	true:false;
	parameters.count = (password.length > 9)?
	true:false;

	let barLength = Object.values(parameters).filter
	(value=>value);

	console.log(Object.values(parameters), barLength);

// In dieser Array wird das neu erstellte Element dem Element mit dem Namen "strengthBar" hinzugefügt. 

	strengthBar.innerHTML = "";
	for(let i in barLength){
		let span = document.createElement("span");
		span.classList.add("strength");
		strengthBar.appendChild(span);
	}

//	Hier wird eine Schleife gestartet, die durch jedes dieser Elemente geht. Innerhalb der Schleife wird eine Switch-Anweisung verwendet, die dazugehörigen Messages & Farben wurden ebenfalls bestimmt.

	let spanRef = document.getElementsByClassName
	("strength");
	for(let i = 0; i < spanRef.length; i++){
		switch(spanRef.length - 1){
			case 0 :
				spanRef[i].style.background = "#ff3e36";
				msg.textContent = "Dein Passwort ist sehr schwach";
				break; 
			case 1:
				spanRef[i].style.background = "#ff691f";
				msg.textContent = "Dein Passwort ist schwach"
				break;
			case 2:
				spanRef[i].style.background = "#ffda36";
				msg.textContent = "Dein Passwort ist gut"
				break;
			case 3:
				spanRef[i].style.background = "#0be881";
				msg.textContent = "Dein Passwort ist stark"
				break;
		}
	}

} 
