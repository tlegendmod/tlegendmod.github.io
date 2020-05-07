
CreateNewIdea();


function CreateNewIdea () {
    //Create Div to start
    var idea = document.createElement("div");
    idea.id = "idea";
    idea.className = "idea";
    //Add Div to body
    document.body.appendChild(idea);
    //Make Div draggable
    dragElement(idea);

    //Create Button
    var btn = document.createElement("button");
    btn.id = "buttonid";
    btn.className = "ideabutton"
    btn.innerHTML = "Click";
    btn.setAttribute("onclick","CreateIdeaSpace()");
    //Add this button onto the div created before
    document.getElementById(idea.id).appendChild(btn);

}

function CreateIdeaSpace() {
    if (SpaceArea.id) {
        SpaceArea.id = document.body.getElementById(SpaceArea.id);
        SpaceArea.style.className.setAttribute("visibility","hidden");
    }
    else {
        var SpaceArea = document.createElement("div");
        SpaceArea.id = "spacearea";
        SpaceArea.className = "ideaspacearea";
        document.body.insertAdjacentHTML('afterbegin', '<div id=" + SpaceArea.id + """ + " " + "class="" + SpaceArea.className + """ + "></div>"');
    }
}

// Make the DIV element draggable:
// Example below
// dragElement(document.getElementById("mydiv"));


// --HELPER FUNCTIONS--

//--Draggable Element Functions
function dragElement(elmnt) {
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
} else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
}

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
}

function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
}

function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
}
}