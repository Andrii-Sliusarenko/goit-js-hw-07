const formEl = document.querySelector('.login-form');

const onFormSub = event => {
  event.preventDefault();
  const formData = {
    email: formEl.elements.email.value.trim(),
    password: formEl.elements.password.value.trim(),
  };
  console.log(formData);
  formEl.reset();
  if (formData.email === '' || formData.password === '') {
    alert('All form fields must be filled in');
  }
};

formEl.addEventListener('submit', onFormSub);
