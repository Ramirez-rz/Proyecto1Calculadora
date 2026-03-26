let fullOp = "";

function handleClick(number) {
    console.log(number);
    if (number === 'CE') {
        fullOp = '';
        showNumber1(fullOp);
        showNumber2(fullOp);
        return;
    } else if (number === '<') {
        fullOp = fullOp.slice(0, -1);
        showNumber1(fullOp);
        if (fullOp === '') {
            showNumber2('');
        }
        return;
    }
    fullOp = fullOp + number;
    showNumber1(fullOp);
}

function handleClick2(number) {
    if (number === 'Clear All') {
        document.getElementById("screen3").innerHTML = '';
    }
}

function calculate() {
    let res = 0;
    const [a, op, b] = fullOp.split(/(\+|-|x|\EXP|\/)/);
    switch (op) {
        case "+":
            res = Number(a) + Number(b);
            break;
        case "-":
            res = Number(a) - Number(b);
            break;
        case "x":
            res = Number(a) * Number(b);
            break;
        case "/":
            res = Number(a) / Number(b);
            break;
        case "EXP":
            res = Number(a)**Number(b);
        default:
            return;
    }

    showNumber2(res);
    document.getElementById("screen3").innerHTML += a + op + b + "=" + res + "<br>";

    fullOp = String(res);
}

function showNumber1(x) {
    //y=n;
    document.getElementById("screen1").innerHTML = x;
}

function showNumber2(y) {

    document.getElementById("screen2").innerHTML = y;

}

