let time = 2;
let remainingTime = 3;
function slide() {
    $('.block').slideDown(3000).delay(100).slideUp(3000);
    $('.num').text(remainingTime)
    remainingTime--;
};


$('.block').on('click', function () {
    for (let i = 0; i <= time; i++) {
        console.log(i)
        slide();
    }
});


