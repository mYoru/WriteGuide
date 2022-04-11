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

    function myFunction() {
        // Объявлять переменные
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");

        // Выполните цикл по всем элементам списка и скройте те, которые не соответствуют запросу поиска
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }