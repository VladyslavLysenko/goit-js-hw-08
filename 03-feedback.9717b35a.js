!function(){var e=document.querySelector(".feedback-form");console.log(e);var t=document.querySelector("input"),a=document.querySelector("textarea");e.addEventListener("input",(function(e){var o={email:t.value,message:a.value},l=JSON.stringify(o);localStorage.setItem("feedback-form-state",l)}));var o=localStorage.getItem("feedback-form-state");if(null!==o){var l=JSON.parse(o);t.value=l.email,a.textContent=l.message}e.addEventListener("submit",(function(e){e.preventDefault(),t.value&&a.value?(console.log("submtited data:",localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),t.value="",a.value=""):alert("Заповніть поля")}))}();
//# sourceMappingURL=03-feedback.9717b35a.js.map
