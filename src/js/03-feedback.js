import throttle from "lodash.throttle";
import '../css/03-feedback.css';

// Option 1

// const form = document.querySelector('.js-feedback-form');
// const email = document.querySelector('input[type="email"]');
// const message = document.querySelector('textarea[name="message"]');

// form.addEventListener('input', throttle(onFormInput, 500));
// form.addEventListener('submit', onRestart);

// const LOCALSTORAGE_KEY = 'feedback-form-state';

// let formData = {
//     email: '',
//     message: '',
//   };
// // масив для збереження даних
// let formContent = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

// isSaved();

// function onFormInput(e) {
//     formData[e.target.name] = e.target.value;
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
// }

// function isSaved() {
//     const savedForm = formContent;
//     if (savedForm) {
//         // savedForm.currentTarget.reset();
//        return;
//     }
//     formData = savedForm;
//     email.value = savedForm.email || '';
//     message.value = savedForm.message || '';

// }

// function onRestart(evt) {

// evt.preventDefault();
// evt.currentTarget.reset();
// localStorage.removeItem(LOCALSTORAGE_KEY);      
// // щоб видалити все
// // localStorage.clear();

//     console.log(formData);

// }


// Option 2

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

onSavedMassege();
// останавливаем поведение по умолчанию
// убираем сообщение из хранилища
// Очищаем форму
function onFormSubmit(evt) {
    evt.preventDefault();

    console.log('send FORM')

    evt.currentTarget.reset();

}


// Получаем значение поля
// сохраняем его в Хранилище
// add Throttle 

function onTextareaInput(evt) {
    const message = evt.currentTarget.value;

    // console.log(value);
localStorage.setItem('feedback-msg', message)
}

// получаем значение из хранилища 
// ЕСЛИ там что-то біло, обновляем DOM

function onSavedMassege() {
const saveMessage =localStorage.getItem('feedback-msg');

if(onSavedMassege) {
    
    refs.textarea.value = '0';
    console.log(refs.textarea.value);
}
}


