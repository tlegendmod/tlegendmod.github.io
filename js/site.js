
function CreateNewIdea () {
    let basebtnbg = document.createElement("div");
    basebtnbg.id = "xxxx";
    basebtnbg.className = "idea";
    document.body.appendChild(basebtnbg);
}

function MoveOnClick () {

}

//--CreateExistingIdea

//create div and give it an idea and classname for style later
let div = document.createElement("div");
div.id = 'idea';
//add the div to the website
if(document.body != null) {
    document.body.appendChild(div);
}
else {
    console.log("DIV NOT APPENDED TO BODY");
};

//create button that will have an onclick later
let basebtn = document.createElement("button");
basebtn.id = "Idea1";
basebtn.innerHTML = "Test Me";

//add the button to the existing div
document.getElementById(basebtnbg.id).appendChild(basebtn);




