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
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");

        // ��������� ���� �� ���� ��������� ������ � ������� ��, ������� �� ������������� ������� ������
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }