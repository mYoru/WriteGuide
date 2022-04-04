// Эта функция спасла мой сайт
document.addEventListener('DOMContentLoaded', function () {

    // Когда пользователь заходит на страницу, эта штука врубается
    window.onscroll = function () { myFunction() };

    // Берем навигаацию...
    var navlogo = document.getElementById("navlogo");

    // Даем навигации функцию...
    var sticky = navlogo.offsetTop;

    // Сама функция липкости
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navlogo.classList.add("sticky")
        } else {
            navlogo.classList.remove("sticky");
        }
    }
})