let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let fourth = document.querySelector('.fourth');
let fifth = document.querySelector('.fifth');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');

let row1 = document.querySelectorAll('.row1');
let row2 = document.querySelectorAll('.row2');
let row3 = document.querySelectorAll('.row3');
let colom1 = document.querySelectorAll('.colom1');
let colom2 = document.querySelectorAll('.colom2');
let colom3 = document.querySelectorAll('.colom3');


let dark = document.querySelector('.dark');
let light = document.querySelector('.light');
let bts = document.querySelector('.bts');
let custom = document.querySelector('.custom');
let theme = document.querySelector('.theme');




dark.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
    // theme.style.backgroundColor = 'white';
    theme.style.color = 'black';
})


light.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    theme.style.color = 'black';
    // document.body.colorBox.h2.style.color='black';
})


bts.addEventListener('click', () => {
    document.body.style.backgroundColor = 'pink';
})


custom.addEventListener('click', () => {
    let v = prompt("Enter background color");
    document.body.style.background = v;
})




var player1 = false;
var count = 0;

// alert("Player O will start first");
let p1 = prompt("Player1 enter your name!! You will play as O");//o
let p2 = prompt("Player2 enter your name!! You will play as X");//x

// p1=player1;
// p2=!player1;

console.log("name of player 2 is", p2);
console.log("name of player 1 is", p1);


first.addEventListener('click', () => {
    if (!player1 && first.innerText == '') {
        first.innerText = 'O';
        player1 = !player1;
        count += 1;
    }
    if (player1 && first.innerText == '') {
        first.innerText = 'X';
        player1 = !player1;
        count += 1;
    }
    setTimeout(() => {
        win();
        checkDraw();
    }, 30);
});


second.addEventListener('click', () => {
    if (!player1 && second.innerText == '') {
        second.innerText = 'O';
        player1 = !player1;
        count += 1;
    }
    if (player1 && second.innerText == '') {
        second.innerText = 'X';
        player1 = !player1;
        count += 1;
    }
    setTimeout(() => {
        win();
        checkDraw();
    }, 30);
});


third.addEventListener('click', () => {
    if (!player1 && third.innerText == '') {
        third.innerText = 'O';
        player1 = !player1;
        count += 1;
    }
    if (player1 && third.innerText == '') {
        third.innerText = 'X';
        player1 = !player1;
        count += 1;
    }
    setTimeout(() => {
        win();
        checkDraw();
    }, 30);
});


fourth.addEventListener('click', () => {
    if (!player1 && fourth.innerText == '') {
        fourth.innerText = 'O';
        player1 = !player1;
        count += 1;
    }
    if (player1 && fourth.innerText == '') {
        fourth.innerText = 'X';
        player1 = !player1;
        count += 1;
    }
    setTimeout(() => {
        win();
        checkDraw();
    }, 30);
});


fifth.addEventListener('click', () => {
    if (!player1 && fifth.innerText == '') {
        fifth.innerText = 'O';
        player1 = !player1;
        count += 1;
    }
    if (player1 && fifth.innerText == '') {
        fifth.innerText = 'X';
        player1 = !player1;
        count += 1;
    }
    // count += 1;
    setTimeout(() => {
        win();
        checkDraw();
    }, 30);
});


six.addEventListener('click', () => {
    if (!player1 && six.innerText == '') {
        six.innerText = 'O';
        player1 = !player1;
        count += 1;
    }
    if (player1 && six.innerText == '') {
        six.innerText = 'X';
        player1 = !player1;
        count += 1;
    }

    setTimeout(() => {
        win();
        checkDraw();
    }, 30);

});


seven.addEventListener('click', () => {
    if (!player1 && seven.innerText == '') {
        seven.innerText = 'O';
        player1 = !player1;
        count += 1;
    }
    if (player1 && seven.innerText == '') {
        seven.innerText = 'X';
        player1 = !player1;
        count += 1;
    }
    setTimeout(() => {
        win();
        checkDraw();
    }, 30);
});


eight.addEventListener('click', () => {
    if (!player1 && eight.innerText == '') {
        eight.innerText = 'O';
        player1 = !player1;
        count += 1;
    }
    if (player1 && eight.innerText == '') {
        eight.innerText = 'X';
        player1 = !player1;
        count += 1;
    }
    setTimeout(() => {
        win();
        checkDraw();
    }, 30);
});


nine.addEventListener('click', () => {
    if (!player1 && nine.innerText == '') {
        nine.innerText = 'O';
        player1 = !player1;
        count += 1;
    }
    if (player1 && nine.innerText == '') {
        nine.innerText = 'X';
        player1 = !player1;
        count += 1;
    }
    // count += 1;
    setTimeout(() => {
        win();
        checkDraw();
    }, 30);
});

// Clear function

function clear() {
    count = 0;
    first.innerText = '';
    second.innerText = '';
    third.innerText = '';
    fourth.innerText = '';
    fifth.innerText = '';
    six.innerText = '';
    seven.innerText = '';
    eight.innerText = '';
    nine.innerText = '';

    let p1 = prompt("Player1 enter your name!! You will play as  O");//o
    let p2 = prompt("Player2 enter your name!! You will play as X");//x

}


// WINNNIG CONDITIONS
function win() {

    // ROW WINNING CONDITION.....
    if (first.innerText === 'X' && second.innerText === 'X' && third.innerText === 'X') {
        console.log(` ${p2} wins`);
        clear();
        alert(` ${p2} wins`);
        return true;
    }
    if (first.innerText === 'O' && second.innerText === 'O' && third.innerText === 'O') {
        console.log(` ${p1} wins`);
        alert(` ${p1} wins`);
        clear();
        return true;
    }
    if (fourth.innerText === 'X' && fifth.innerText === 'X' && six.innerText === 'X') {
        console.log(` ${p2} wins`);
        alert(` ${p2} wins`);
        clear();
        return true;
    }
    if (fourth.innerText === 'O' && fifth.innerText === 'O' && six.innerText === 'O') {
        console.log(` ${p1} wins`);
        alert(` ${p1} wins`);
        clear();
        return true;
    }
    if (seven.innerText === 'X' && eight.innerText === 'X' && nine.innerText === 'X') {
        console.log(` ${p2} wins`);
        alert(` ${p2} wins`);
        clear();
        return true;
    }
    if (seven.innerText === 'O' && eight.innerText === 'O' && nine.innerText === 'O') {
        console.log(` ${p1} wins`);
        alert(` ${p1} wins`);
        clear();
        return true;
    }

    // COLOUMN WINNING CONDITION

    if (first.innerText === 'X' && fourth.innerText === 'X' && seven.innerText === 'X') {
        console.log(` ${p2} wins`);
        alert(` ${p2} wins`);
        clear();
        return true;
    }
    if (first.innerText === 'O' && fourth.innerText === 'O' && seven.innerText === 'O') {
        console.log(` ${p1} wins`);
        alert(` ${p1} wins`);
        clear();
        return true;
    }
    if (second.innerText === 'X' && fifth.innerText === 'X' && eight.innerText === 'X') {
        console.log(` ${p2} wins`);
        alert(` ${p2} wins`);
        clear();
        return true;
    }
    if (second.innerText === 'O' && fifth.innerText === 'O' && eight.innerText === 'O') {
        console.log(` ${p1} wins`);
        alert(` ${p1} wins`);
        clear();
        return true;
    }
    if (third.innerText === 'X' && six.innerText === 'X' && nine.innerText === 'X') {
        console.log(` ${p2} wins`);
        alert(` ${p2} wins`);
        clear();
        return true;
    }
    if (third.innerText === 'O' && six.innerText === 'O' && nine.innerText === 'O') {
        console.log(` ${p1} wins`);
        alert(` ${p1} wins`);
        clear();
        return true;
    }

    // DIAGNOL WINNING CONDITION....

    if (first.innerText === 'X' && fifth.innerText === 'X' && nine.innerText === 'X') {
        console.log(` ${p2} wins`);
        alert(` ${p2} wins`);
        clear();
        return true;
    }
    if (first.innerText === 'O' && fifth.innerText === 'O' && nine.innerText === 'O') {
        console.log(` ${p1} wins`);
        alert(` ${p1} wins`);
        clear();
        return true;
    }
    if (third.innerText === 'X' && fifth.innerText === 'X' && seven.innerText === 'X') {
        console.log(` ${p2} wins`);
        alert(` ${p2} wins`);
        clear();
        return true;
    }
    if (third.innerText === 'O' && fifth.innerText === 'O' && seven.innerText === 'O') {
        console.log(` ${p1} wins`);
        alert(` ${p1} wins`);
        clear();
        return true;
    }

}

// DRAW CONDITIONS...

function checkDraw() {
    if (count >= 9 && !win()) {
        alert(`${p1} and ${p2} Its a draw`);
        clear();
    };
}


// NOT WORKING WINNING CONDITIONS. SOME BUGS..


// row1.forEach((row) => {
//     // console.log(row.innerText);
//     if (row.innerText === 'X' && row.innerText !== '') {
//         console.log("Player X wins");
//     }
//     if (row.innerText === 'O' && row.innerText !== '') {
//         console.log("Player O wins");
//     }
// });

// row2.forEach((row) => {
//     if (row.innerText === 'X' && row.innerText !== '') {
//         console.log("Player X wins");
//     }
//     if (row.innerText === 'O' && row.innerText !== '') {
//         console.log("Player O wins");
//     }
// });

// row3.forEach((row) => {
    //     if (row.innerText === 'X' && row.innerText !== '') {
//         console.log("Player X wins");
//     }
//     if (row.innerText === 'O' && row.innerText !== '') {
    //         console.log("Player O wins");
    //     }
    // });


