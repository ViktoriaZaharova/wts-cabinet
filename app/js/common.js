// time
function clock() {
    let d = new Date();
    let hrs = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    if (hrs <= 9) hrs="0" + hrs;
    if (min <=9 ) min="0" + min;
    if (sec <= 9) sec="0" + sec;

    $(".time").html(hrs + ":" + min + ":" + sec);
}
setInterval("clock()",1000);

if ($(".sidebar-box-contracts, .sidebar-box-course").length){
    $('.sidebar-box-contracts, .sidebar-box-course').clone().appendTo('.sidebar-box-col');
}

$('.btn-menu').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('click');
    $('html, body').toggleClass('no-scroll');
    $('.sidebar-left').fadeToggle();
});
