
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
   
    const userInfoJson = JSON.stringify(userInfo);
    // console.log(userInfoJson);
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






form.addEventListener("submit", function (evt) {
    evt.preventDefault()
    
    if (!email.value || !message.value) {
     
        alert("Заповніть поля")
       
    } else {
        
        console.log("submtited data:", localStorage.getItem("feedback-form-state"));
        localStorage.removeItem("feedback-form-state");
        email.value = "";
        message.value = "";

    }
    

})



// не сабмітимо не до кінця заповнену форму, а показаємо альорт, а лише після сабміту повністю заповненої форми виводимо в консоль об'єкт, чистимо локал сторедж та поля самої форми




