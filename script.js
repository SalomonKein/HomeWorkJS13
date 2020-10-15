let gray = document.querySelectorAll('.gray');
let pink = document.querySelectorAll('.pink');
let black = document.querySelectorAll('.black');
let orange = document.querySelectorAll('.orange');
window.onload = function() {
    if (localStorage.getItem('bgColor') !== "null") {
        let bgColor = localStorage.getItem('bgColor');
        let bgBox = localStorage.getItem('bgBox');
        let bgGrayBtn = localStorage.getItem('bgGrayBtn');
        let bgPinkBtn = localStorage.getItem('bgPinkBtn');
        let colPinkBtn = localStorage.getItem('colPinkBtn');
        let bgBlackBtn = localStorage.getItem('bgBlackBtn');
        let bgOrangeBtn = localStorage.getItem('bgOrangeBtn');
        document.getElementsByTagName('body')[0].style.background = bgColor;
        document.querySelector('.box').style.background = bgBox;
        gray.forEach(elem => elem.style.background = bgGrayBtn);
        pink.forEach(elem => elem.style.background = bgPinkBtn);
        pink.forEach(elem => elem.style.color = colPinkBtn);
        black.forEach(elem => elem.style.background = bgBlackBtn);
        orange.forEach(elem => elem.style.background = bgOrangeBtn);
    }

    document.querySelector('.changeTheme').onclick = function() {
        document.getElementsByTagName('body')[0].style.background = 'blue';
        document.querySelector('.box').style.background = 'gray';
        gray.forEach(elem => elem.style.background = 'red');
        pink.forEach(elem => elem.style.background = 'black');
        pink.forEach(elem => elem.style.color = 'white');
        black.forEach(elem => elem.style.background = 'green');
        orange.forEach(elem => elem.style.background = '#1a725c');
        localStorage.setItem('bgColor', 'blue');
        localStorage.setItem('bgBox', 'gray');
        localStorage.setItem('bgGrayBtn', 'red');
        localStorage.setItem('bgPinkBtn', 'black');
        localStorage.setItem('colPinkBtn', 'white');
        localStorage.setItem('bgBlackBtn', 'green');
        localStorage.setItem('bgOrangeBtn', '#1a725c');
    }
    document.querySelector('.returnTheme').onclick = function() {
        document.getElementsByTagName('body')[0].style.background = 'tan';
        document.querySelector('.box').style.background = '#3d4543';
        gray.forEach(elem => elem.style.background = '#6f6f6f');
        pink.forEach(elem => elem.style.background = '#ff4561');
        pink.forEach(elem => elem.style.color = 'black');
        black.forEach(elem => elem.style.background = '#303030');
        orange.forEach(elem => elem.style.background = '#FF9933');
        localStorage.setItem('bgColor', 'tan');
        localStorage.setItem('bgBox', '#3d4543');
        localStorage.setItem('bgGrayBtn', '#6f6f6f');
        localStorage.setItem('bgPinkBtn', '#ff4561');
        localStorage.setItem('colPinkBtn', 'black');
        localStorage.setItem('bgBlackBtn', '#303030');
        localStorage.setItem('bgOrangeBtn', '#FF9933');
    }
}












let box = document.querySelector(".box");
let action = "";
let input = box.querySelector("input");
box.onclick = function(event) {
    buttonClick(event);
};
let arrDisp = [];
let arrArg = [];
let mrc = "";

function buttonClick(event) {
    let target = event.target;
    if (target.value == undefined) {
        return;
    }
    if (target.value == "*" || target.value == "/" || target.value == "-" || target.value == "+") {
        arrArg.push(input.value);
        let result = arrArg.join('');
        console.log(arrDisp);
        console.log(arrArg);
        input.setAttribute('value', eval(result));
        arrDisp = [];
        arrArg = [];
        arrArg.push(eval(result));
        arrArg.push(target.value);
        let selected = box.querySelectorAll('.active');
        for (let elem of selected) {
            elem.classList.remove('active');
        }
        return;
    };
    if (target.value == "0" || target.value == "1" || target.value == "2" || target.value == "3" || target.value == "4" || target.value == "5" || target.value == "6" || target.value == "7" || target.value == "8" || target.value == "9" || target.value == ".") {
        arrDisp.push(target.value);
        target.classList.add('active');
        input.setAttribute('value', arrDisp.join(''));
    }
    if (target.value == "=") {

        arrArg.push(arrDisp.join(''));
        let result = arrArg.join('');
        if (eval(result) == undefined) {
            return;
        }
        input.setAttribute('value', eval(result));
        console.log(arrArg);
        console.log('result=' + eval(result));
        arrDisp = [];
        arrArg = [];
    };
    if (target.value == "C") {
        let result = "0";
        input.setAttribute('value', result);
        arrDisp = [];
        arrArg = [];
    };
    if (target.value == "m+") {
        if (document.querySelector(".memory")) {
            return;
        }
        mrc = input.value;
        let memory = document.createElement("p");
        memory.className = 'memory';
        memory.style.position = "absolute";
        input.style.position = "absolute";
        memory.style.zIndex = "100";
        input.style.zIndex = "1";
        memory.style.paddingLeft = "5px";
        memory.innerHTML = "m";
        document.querySelector(".display").prepend(memory);
    };
    if (target.value == "m-") {
        if (mrc == "") { return };
        mrc = "";
        document.querySelector(".memory").remove();
    }

    if (target.value == "mrc") {
        arrDisp = [];
        let result = mrc;
        if (result == "") { return };
        input.setAttribute('value', result);
        // arrDisp.push(result);
    }
}
document.onkeypress = function(event) {
    // console.log(event);
    if (event.charCode == "42" || event.charCode == "92" || event.charCode == "45" || event.charCode == "43") {

        arrArg.push(input.value);
        let result = arrArg.join('');
        console.log(arrDisp);
        console.log(arrArg);
        input.setAttribute('value', eval(result));
        arrDisp = [];
        arrArg = [];
        arrArg.push(eval(result));
        if (event.charCode == "92") {
            arrArg.push('/');
        } else {
            arrArg.push(event.key);
        }


        let selected = box.querySelectorAll('.active');
        for (let elem of selected) {
            elem.classList.remove('active');
        }
        return;
    };
    if (event.charCode == "48" || event.charCode == "49" || event.charCode == "50" || event.charCode == "51" || event.charCode == "52" || event.charCode == "53" || event.charCode == "54" || event.charCode == "55" || event.charCode == "56" || event.charCode == "57" || event.charCode == "46") {
        arrDisp.push(event.key);
        input.setAttribute('value', arrDisp.join(''));
        console.log(arrDisp);
        console.log(arrArg);
    };
    if (event.keyCode == "13") {
        arrArg.push(arrDisp.join(''));
        let result = arrArg.join('');
        if (eval(result) == undefined) {
            return;
        };
        input.setAttribute('value', eval(result));
        console.log(arrArg);
        console.log('result=' + eval(result));
        arrDisp = [];
        arrArg = [];

    };
    if (event.charCode == "99") {
        let result = "0";
        input.setAttribute('value', result);
        arrDisp = [];
        arrArg = [];
    };
    if (event.charCode == "119") {
        if (document.querySelector(".memory")) {
            return;
        }
        mrc = input.value;
        let memory = document.createElement("p");
        memory.className = 'memory';
        memory.style.position = "absolute";
        input.style.position = "absolute";
        memory.style.zIndex = "100";
        input.style.zIndex = "1";
        memory.style.paddingLeft = "5px";
        memory.innerHTML = "m";
        document.querySelector(".display").prepend(memory);
    };
    if (event.charCode == "101") {
        if (mrc == "") { return };
        mrc = "";
        document.querySelector(".memory").remove();
    }

    if (event.charCode == "113") {
        arrDisp = [];
        let result = mrc;
        if (result == "") { return };
        input.setAttribute('value', result);
        // arrDisp.push(result);
    };
}