


function CreateNewIdea () {
    var idea = document.createElement("div");
    idea.id = "idea";
    idea.className = "idea";
    document.body.appendChild(idea);
    var btn = document.createElement("button");
    btn.id = "buttonid";
    btn.className = "ideabutton"
    btn.innerHTML = "Click";
    btn.onclick = MoveOnClick(btn.id);
    document.getElementById(idea.id).appendChild(btn);
}

function MoveOnClick (btnid) {
    // when click and hold is active
    btnid.onmousedown = console.log("clicked");
    // move the div element freely to the edges of the viewport
    // release clickhold to set new position of div element
}

CreateNewIdea();
