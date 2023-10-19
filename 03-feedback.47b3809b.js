var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self;t||o||Function("return this")(),Object.prototype.toString;// Option 1
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
const n={form:document.querySelector(".js-feedback-form"),textarea:document.querySelector(".js-feedback-form textarea")};n.form.addEventListener("submit",// останавливаем поведение по умолчанию
// убираем сообщение из хранилища
// Очищаем форму
function(e){e.preventDefault(),console.log("send FORM"),e.currentTarget.reset()}),n.textarea.addEventListener("input",// Получаем значение поля
// сохраняем его в Хранилище
// add Throttle 
function(e){let t=e.currentTarget.value;// console.log(value);
localStorage.setItem("feedback-msg",t)}),// получаем значение из хранилища 
// ЕСЛИ там что-то біло, обновляем DOM
function e(){localStorage.getItem("feedback-msg"),e&&(n.textarea.value="0",console.log(n.textarea.value))}//# sourceMappingURL=03-feedback.47b3809b.js.map
();
//# sourceMappingURL=03-feedback.47b3809b.js.map
