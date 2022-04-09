// ��� ������� ������ ��� ����
document.addEventListener('DOMContentLoaded', function () {

    // ����� ������������ ������� �� ��������, ��� ����� ���������
    window.onscroll = function () { myFunction() };

    // ����� ����������...
    var navlogo = document.getElementById("navlogo");

    // ���� ��������� �������...
    var sticky = navlogo.offsetTop;

    // ���� ������� ��������
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navlogo.classList.add("sticky")
        } else {
            navlogo.classList.remove("sticky");
        }
    }

})

function myFunction() {
    // ��������� ����������
    var search, filter, link, li, a, i;
    search = document.getElementById("mySearch");
    filter = search.value.toUpperCase();
    link = document.getElementById("tab");
    li = link.getElementsByTagName("button");

    // ��������� ���� �� ���� ��������� ������ � ������� ��, ������� �� ������������� ������� ������
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
    // �������� ��� ����������
    var i, tabcontent, tablinks;

    // �������� ��� �������� � ������� class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // �������� ��� �������� � ������� class="tablinks" � ������� ����� "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // �������� ������� ������� � �������� ����� "active" �� ������, ��������� �������
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " active";

    // �������� ������� � id="defaultOpen" � ������� �� ����
    document.getElementById("defaultOpen").click();
}
