import throttle from "lodash.throttle";
import '../css/03-feedback.css';

// Option 1

const form = document.querySelector('.js-feedback-form');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(onFormInput, 1000));
form.addEventListener('submit', onSubmit);

const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: '',
  };
// масив для збереження даних
let formContent = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

isSaved();

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function isSaved() {
    const savedForm = formContent;
    if (savedForm === null) {

       return;
    }
    formData = savedForm;
    email.value = savedForm.email || '';
    message.value = savedForm.message || '';

}

function onSubmit(evt) {

evt.preventDefault();
localStorage.removeItem(LOCALSTORAGE_KEY);   
formData.email = '';
formData.message = '';
evt.currentTarget.reset();

// щоб видалити все
// localStorage.clear();
// email.value = '';
// message.value = '';
    console.log(formData);

}


// Option 2

// const refs = {
//     form: document.querySelector('.js-feedback-form'),
//     textarea: document.querySelector('.js-feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);

// onSavedMassege();

// // останавливаем поведение по умолчанию
// // убираем сообщение из хранилища
// // Очищаем форму
// function onFormSubmit(evt) {
//     evt.preventDefault();

//     evt.currentTarget.reset();
//     localStorage.removeItem('feedback-msg');
//     console.log('send FORM')

// }


// // Получаем значение поля
// // сохраняем его в Хранилище
// // add Throttle 

// function onTextareaInput(evt) {
//     const message = evt.currentTarget.value;

//     // console.log(value);
// localStorage.setItem('feedback-msg', message)
// }

// // // получаем значение из хранилища 
// // // ЕСЛИ там что-то біло, обновляем DOM

// function onSavedMassege() {
// const saveMessage =localStorage.getItem('feedback-msg');

// if(onSavedMassege) {
    
//     refs.textarea.value = '';
//     console.log(refs.textarea.value);
// }
// }


