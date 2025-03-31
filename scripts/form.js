function addClass(){
    let container = document.getElementById("class");
    let input = document.createElement("input");
    input.type = "text";
    input.name = "courses[]";
    input.required = true;
    container.appendChild(input);
    conatiner.appendChild(document.createElement("br"));

    let deleteButton = document.getElementById("deleteClass");
    deleteButton.style.display = "inline";
}

function deleteClass(){
    let container = document.getElementById("class");

    if(container.children.length > 0) {
        container.removeChild(container.lastChild);
        container.removeChild(container.lastChild);
    }
    if (container.children.length === 0) {
        document.getElementById("deleteClass").style.display = "none";
    }
}