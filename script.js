 const showPassword = document.querySelector("#showpassword");
    const password = document.querySelector("#password");

    showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash", !this.classList.contains("fa-eye"));
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
})