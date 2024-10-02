document.querySelector('.js-input-email').addEventListener('keydown', ()=> {
    keyEnter(event);
  });

  function keyEnter (event) {
    if (event.key === 'Enter') {
      displayEmail();
    }
  } 


  const submitEmail = document.querySelector('.submit-button');

  submitEmail.addEventListener('click', ()=> {
        displayEmail();
      });

  const errorIcon = document.querySelector('.js-error-icon');

  const errorDisplay = document.querySelector('.js-result');

  function displayEmail () {

    let errorMessage = document.querySelector('.js-result');

    const inputElement = document.querySelector('.js-input-email').value;

    
    if (inputElement.endsWith("@gmail.com")) {
      errorMessage.innerHTML = 'Proceed';
      errorDisplay.style.color = 'green';
      errorIcon.style.display = 'none';
      errorDisplay.style.display = 'block';

    } else {
      errorMessage.innerHTML = 'Pleasee provide a valid email!';
      errorDisplay.style.color = 'rgb(194, 118, 121)';
      errorIcon.style.display = 'block';
      errorDisplay.style.display = 'block';
    }
  }