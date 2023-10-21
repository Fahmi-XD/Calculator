const results = document.getElementById("dis");
const pushBtnOp = document.querySelectorAll("#btn-op");

for (let i = 0; i < pushBtnOp.length; i++) {
    pushBtnOp[i].addEventListener("click", () => {
        let handler = () => {
            if (results.innerText.length > "12") {
                results.innerHTML = "";
            } else {
                if (pushBtnOp[i].innerHTML === "=") {
                    results.innerHTML = eval(results.innerHTML);
                } else {
                    let num = results.innerHTML + pushBtnOp[i].innerHTML;
                    const str = (num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                    results.innerHTML = num;
                }
            }
        }
        handler();
    })
}

function reset() {
    results.innerHTML = "";
}