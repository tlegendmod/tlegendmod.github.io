


function CreateNewIdea () {
    var idea = document.createElement("div");
    idea.id = "idea" + Date();
    idea.className = "idea";
    document.body.appendChild(basebtnbg);
    var btn = document.createElement("button");
    btn.id = "btnid";
    document.getElementById(idea.id).appendChild(btn);

    /* 
    if(document.body != null) {
    document.body.appendChild(div);
    }
    
    else {
    console.log("DIV NOT APPENDED TO BODY");
    };
    */
}

function MoveOnClick () {

}

CreateNewIdea();
