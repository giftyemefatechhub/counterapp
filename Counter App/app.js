let num = document.getElementById("people-num");
let addBtn = document.getElementById("btn-add");
let counterBox = document.getElementById("counter-box");
let sum = parseInt(num.innerText);



addBtn.addEventListener('click', function () {
    sum = sum + 1;
    num.innerText = sum;
    if (sum === 50) {
        addBtn.disabled = true;
        addBtn.style.backgroundColor = "grey";
        counterBox.style.backgroundColor = "red";

    }
    if (sum === 45 || sum === 46 || sum === 47 || sum === 48 || sum === 49) {
        let audio = new Audio("record.wav")
        audio.play();

    }

})


