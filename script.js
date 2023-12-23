
let turn = "X";
let isgameover = false;
let box1;
let box2;
let box3;

$(document).on("click", ".textbox", function () {
    if (isgameover) {
        return false;
    }
    let text = $(this).children().text();
    if (text) {
        return false;
    }
    $(this).children().text(turn);
    turn = turn == "O" ? "X" : "O";
    $("#define-turn").text(turn);
    checkWin();
});

$(document).on("click", "#reset", function () {
    $('.win-message').text('')
    $(".text").text("");
    $('.text').removeClass('active');
    turn = "X";
    isgameover = false;
    $("#define-turn").text(turn);
});

function checkWin() {
    let checkValue = document.getElementsByClassName('text');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    win.forEach((e) => {
        if (checkValue[e[0]].innerHTML == checkValue[e[1]].innerHTML &&
            checkValue[e[1]].innerHTML == checkValue[e[2]].innerHTML &&
            checkValue[e[0]].innerHTML != '') {
            isgameover = true;
            checkValue[e[0]].classList.add('active');
            checkValue[e[1]].classList.add('active');
            checkValue[e[2]].classList.add('active');
        }
    });
    if (isgameover) {
        $('.win-message').text(`Player ${turn == 'X' ? 'O' : 'X'} wins`)
    }
}
