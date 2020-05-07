


function CreateNewIdea () {
    var idea = document.createElement("div");
    idea.id = "idea";
    idea.className = "idea";
    document.body.appendChild(idea);
    var btn = document.createElement("button");
    btn.id = "buttonid";
    document.getElementById(idea.id).appendChild(btn);


}

function MoveOnClick () {

}

CreateNewIdea();
