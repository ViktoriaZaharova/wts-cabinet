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

// активная ссылка меню
$('.sidebar-menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

$('.btn-menu').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('click');
    $('html, body').toggleClass('no-scroll');
    $('.sidebar-left').fadeToggle();
});

$('.js-example-basic-single').select2();

$(".js-tab-trigger").on('click', function () {
    var id = $(this).attr('data-tab'),
        content = $('.js-tab-content[data-tab="'+ id +'"]');

    $('.js-tab-trigger.active').removeClass('active'); // 1
    $(this).addClass('active'); // 2

    $('.js-tab-content.active').removeClass('active'); // 3
    content.addClass('active'); // 4
});

// global chart settings
Chart.defaults.plugins.legend.display = false;

const getRandomNum = (max) => Math.floor(Math.random() * Math.floor(max));

const randomiseArray = (itemCount) => {
    let array = [];
    for (let i = 0; i < itemCount; i++) {
        let item = getRandomNum(100);
        array.push(item);
    }
    return array;
};

const data = () => ({
    labels: ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
    datasets: [
        {
            // label: "Dataset #1",
            backgroundColor: "rgba(22, 61, 142,0.5)",
            // backgroundColor: "rgba(255, 121, 89, 0.2)",
            borderColor: "#163D8E",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [...randomiseArray(12)]
        }
    ]
});

var options = {
    maintainAspectRatio: false,
    scales: {
        yAxes: [
            {
                stacked: true,
                gridLines: {
                    display: true,
                    color: "rgba(255,99,132,0.2)"
                    // color: '#ff7959'
                }
            }
        ],
        xAxes: [
            {
                gridLines: {
                    display: false
                }
            }
        ]
    }
};

let chart = new Chart("chart", {
    type: "line",
    data: data(),
    options: options
});

const resetSelected = () => {
    categories.forEach((category) => {
        category.classList.remove("selected");
    });
};
