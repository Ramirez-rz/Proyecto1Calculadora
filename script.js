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
    }

    fullOp = String(res);
    showNumber2(fullOp);
}

function showNumber1(x) {
    //y=n;
    document.getElementById("screen1").innerHTML = x;
    document.getElementById("screen3").innerHTML += x;
}
function showNumber2(y) {
    // x=n;
    document.getElementById("screen2").innerHTML = y;
    document.getElementById("screen3").innerHTML += y;
    
}

// function showResults() {
//     document.getElementById("screen3").
//     // n=y+x;

//     innerHTML = n;
// }