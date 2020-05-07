


function CreateNewIdea () {
    var idea = document.createElement("div");
    idea.id = "idea";
    idea.className = "idea";
    document.body.appendChild(idea);
    var btn = document.createElement("button");
    btn.id = "buttonid";
    btn.className = "ideabutton"
    btn.innerHTML = "Click";
    btn.onclick = MoveOnClick();
    document.getElementById(idea.id).appendChild(btn);
}

function MoveOnClick () {
    // when click and hold is active
    let ideas = document.getElementsByClassName("idea").getElementById(idea.id);
    ideas.onmousedown = function(event) {
        //fires when mouse down on button
        console.log("clicking and holding on div");
    }


    // move the div element freely to the edges of the viewport
    // release clickhold to set new position of div element
}

CreateNewIdea();
