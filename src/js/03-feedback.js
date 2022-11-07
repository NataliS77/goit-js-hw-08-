 import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const email = document.querySelector('input');
const message = document.querySelector('textarea');
 console.log(form)
 console.log(email)
 console.log(message)

 const key = "feedback-form-state";
 const object =(null)||{};
  
 form.addEventListener('input',throttle(onFormInput, 500));
 form.addEventListener('submit', onFormSubmit);
 
 onPageUpdate();

 function onFormSubmit(event){
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(key)

 }
 function onFormInput(event){
    object.email= email.value;
    object.message = message.value;
    localStorage.setItem(key,JSON.stringify(object))
 }
 function onPageUpdate(){
    const savedValue = JSON.parse(localStorage.getItem(key))
    console.log(savedValue)
    if (savedValue){
        email.value = savedValue.email || ("");
        message.value = savedValue.message|| ("");
    }

 }