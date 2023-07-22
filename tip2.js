const bill = document.getElementById("bill-n");
const tip = document.getElementsByClassName("tip");
const customTip = document.getElementById("selected-tip");
const people = document.getElementById("people-n");
const tipAmount = document.getElementById("tip-t");
const total = document.getElementById("change-t");
//calculate total  when chosing one of the suggested tip
function calculateBill() {
    for (let i = 0; i < tip.length; i++) {
        let tipNum = tip[i].textContent;
        tip[i].addEventListener("click", (changeBg) => {
            // assing some css to it when clicked 
            tip[i].classList.toggle("tip-active");
            // update tipAmount  and total value when pressing a key 
            window.addEventListener("keypress", () => {
                if (people.value == 0) {
                    console.error("number of people shouldn't be 0");
                } else {
                    let calculeTip = (bill.value * tipNum) / 100;
                    let firstTip = (calculeTip / people.value).toFixed(2);
                    let totalBill = ((+bill.value + calculeTip) / people.value).toFixed(2);
                    tipAmount.textContent = firstTip;
                    total.textContent = totalBill;
                }
            });
        });
    }
}
//calculate total when the user custom  a tip
function calculateBill2() {
    window.addEventListener("keypress", () => {
        if (people.value == 0) {
            console.error("number  of people shouldn't be 0");
        } else {
            let secondTip = (bill.value * customTip.value) / 100;
            let secondAmountTip = (secondTip / people.value).toFixed(2);
            let secondTotalBill = ((+bill.value + secondTip) / people.value).toFixed(2);
            tipAmount.textContent = secondAmountTip;
            total.textContent = secondTotalBill;
        }
    })
}
window.addEventListener("click", (calculateBill(), calculateBill2()));
// reset all values .
const reset = () => {
    for (let i = 0; i < tip.length; i++) {
        tip[i].classList.remove("tip-active");
    }
    tipAmount.textContent = "0.00";
    total.textContent = "0.00";
    bill.value = "";
    customTip.value = "";
    people.value = "";
};
