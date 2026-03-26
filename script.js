let fullOp = "";
let x,y;

function handleClick(number) {
    console.log(number);
    if(number==='CE'){
        fullOp='';
        showNumber1(fullOp);
        showNumber2(fullOp);
        return;
    }else if(number==('<')){
        number='';
    }


    fullOp = fullOp + number;
    showNumber1(fullOp);
}

function calculate() {
    let res = 0;
    const [a, op, b] = fullOp.split(/(\+|-|x|\√|\^|\/)/);
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
        case "√":
            res = Math.sqrt(Number(a));
        case "^":
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

