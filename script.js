let time = 4;
let remainingTime = 3;
function slide() {
    $('.block').slideDown(3000).delay(1000).slideUp(3000);
   
};

// function changeTime(){
//     $('.num').text(remainingTime);
// }


function ahd(){
    for (let i = 3; i < time; i++) {
        console.log(i)
        $('.num').text(i)
        slide();
    }
}

$('.block').on('click', function () {
    ahd()
});


