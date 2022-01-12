let time = 1;
let remainingTime = 2;
const slide = () => {
    $('.block').slideUp(30000).delay(1000).slideDown(30000);
    --time;
};

$('.block').on('click', function () {
    minusRemainingTime();
    secondMinusRemainingTime();
    while(time >= 0){
        slide();
    }
});

function minusTime() {
    if(remainingTime > 0){
        --remainingTime;
        $('.num').text(remainingTime)
    } 
}

const minusRemainingTime = () => setTimeout(minusTime, 61000);
const secondMinusRemainingTime = () => setTimeout(minusTime, 122000);

