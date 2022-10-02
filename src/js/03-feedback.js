
const form = document.querySelector(".feedback-form")
console.log(form);
const email = document.querySelector("input")
// console.log(email);
const message = document.querySelector("textarea")
// console.log(message);

function onChange(e) {
    const userInfo = {
    email:email.value,
    message:message.value
    }
    console.log(userInfo);
    const userInfoJson = JSON.stringify(userInfo);
    console.log(userInfoJson);
    localStorage.setItem("feedback-form-state", userInfoJson);

}

form.addEventListener("input", onChange)


const getUserInfoJSON = localStorage.getItem("feedback-form-state");
// console.log(getUserInfo);

if (getUserInfoJSON !== null) {
const getUserInfo = JSON.parse(getUserInfoJSON);
    email.value = getUserInfo.email;
    message.textContent = getUserInfo.message
} 
// console.log(getUserInfo);





// не сабмітимо не до кінця заповнену форму, а показаємо альорт, а лише після сабміту повністю заповненої форми виводимо в консоль об'єкт, чистимо локал сторедж та поля самої форми




