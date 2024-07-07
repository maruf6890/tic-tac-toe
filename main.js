let turnO = true;
let boxes = document.querySelectorAll(".game-btn");
let winnersBlock = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let isEnd=false;
boxes.forEach((box) => {
    box.addEventListener("click", (evt) => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

function checkWinner() {
    for (let value of winnersBlock) {
        if (
            boxes[value[0]].innerText !== "" &&
            boxes[value[1]].innerText !== "" &&
            boxes[value[2]].innerText !== ""
        ) {
            if (
                boxes[value[0]].innerText === boxes[value[1]].innerText &&
                boxes[value[0]].innerText === boxes[value[2]].innerText
            ) {

                document.querySelector("#winbox").innerText = `Winner: ${boxes[value[0]].innerText}`;
                boxes.forEach((item) => {
                    item.style.backgroundColor="#EAC435";
                    item.disabled = true;
                    isEnd=true;
                });
            }
        }
    }
}
if(document.querySelector("#winbox").innerText==="" && isEnd) 
{
        document.querySelector("#winbox").innerText="The Match is a Draw";
}
document.querySelector("#resetBtn").addEventListener("click",(evt)=>{
    boxes.forEach((item) => {
        item.style.backgroundColor="#ddd";
        item.disabled = false;
        item.innerText="";
        

    });
    isEnd=false;
    document.querySelector("#winbox").innerText="";
})
