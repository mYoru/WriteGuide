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