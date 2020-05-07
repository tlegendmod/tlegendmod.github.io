


function CreateNewIdea () {
    var idea = document.createElement("div");
    idea.id = "idea";
    idea.className = "idea style";
    document.body.appendChild(idea);
    var btn = document.createElement("button");
    btn.id = "buttonid";
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
