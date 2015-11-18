import oHoverable from 'o-hoverable';
import FastClick from 'fastclick';
import oGrid from 'o-grid';

document.addEventListener('DOMContentLoaded', () => {
  // make hover effects work on touch devices
  oHoverable.init();

  // remove the 300ms tap delay on mobile browsers
  FastClick.attach(document.body);

  document.getElementById("guffipedia-form").addEventListener("submit", function(event) {

  	let error = false;

  	let wordInput = this.elements["entry.544003616"];
  	let wordInputContainer = wordInput.parentNode;
  	let wordErrorText = document.getElementsByClassName("o-forms-errortext entry.544003616")[0];

  	let agreeCheckbox = this.elements["agree"];
  	let agreeErrorText = document.getElementsByClassName("o-forms-errortext agree")[0];

  	if(wordInput.value === "") {
	  	event.preventDefault();
  		error = true;
  		wordError();
  		wordInput.focus();
  		wordInput.addEventListener("keyup", function() {
  			if(this.value !== "") {
  				wordValid();
  			} else {
  				wordError();
  			}
  		});
  	}
  	if(!agreeCheckbox.checked) {
	  	event.preventDefault();
  		error = true;
  		agreeError();
  		agreeCheckbox.addEventListener("change", function() {
  			if(this.checked) {
  				agreeValid();
  			} else {
  				agreeError();
  			}
  		});
  	}
  	if(!error) {
  		wordValid();
  		agreeValid();
  	}

  	function wordError() {
  		wordInputContainer.className += " o-forms--error";
  		wordErrorText.style.display = "block";
  	}

  	function wordValid() {
  		wordInputContainer.className = "o-forms-group";
  		wordErrorText.style.display = "none";
  	}

  	function agreeError() {
  		agreeErrorText.style.display = "block";
  	}

  	function agreeValid() {
  		agreeErrorText.style.display = "none";
  	}
  });
});
