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
    var search, filter, link, li, a, i;
    search = document.getElementById("mySearch");
    filter = search.value.toUpperCase();
    link = document.getElementById("tab");
    li = link.getElementsByTagName("button");

    // Выполните цикл по всем элементам списка и скройте те, которые не соответствуют запросу поиска
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("button")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function openLink(evt, linkName) {
    // Объявить все переменные
    var i, tabcontent, tablinks;

    // Получить все элементы с помощью class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Получить все элементы с помощью class="tablinks" и удалить класс "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Показать текущую вкладку и добавить класс "active" по ссылке, открывшей вкладку
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " active";

    // Получите элемент с id="defaultOpen" и нажмите на него
    document.getElementById("defaultOpen").click();
}
