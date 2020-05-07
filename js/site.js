
function CreateNewIdea () {
    let basebtnbg = document.createElement("div");
    basebtnbg.id = "xxxx";
    basebtnbg.className = "idea";
    document.body.appendChild(basebtnbg);
}

function MoveOnClick () {

}

// CreateExistingIdea
let basebtnbg = document.createElement("div");
basebtnbg.id = "idea";
basebtnbg.className = "idea";
document.body.appendChild(basebtnbg);
let basebtn = document.createElement("button");
basebtn.id = "Idea1";
basebtn.innerHTML = "Test Me";
document.getElementById("idea").appendChild(basebtn);


