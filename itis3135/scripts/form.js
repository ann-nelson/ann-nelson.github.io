function validateForm(event) {
    const requiredInputs = document.querySelectorAll('input[required]');
    let allFilled = true;
    
    requiredInputs.forEach((input) => {
        if (!input.value.trim()) {
            allFilled = false;
            input.style.borderColor = 'red'; 
        } else {
            input.style.borderColor = ''; 
        }
    });

    if (!allFilled) {
        event.preventDefault(); 
        alert('Please fill all required fields!');
    }
}

function resetForm() {
    const form = document.querySelector('form');
    form.reset();
    document.getElementById('class').innerHTML = ''; 
    document.getElementById('deleteClass').style.display = 'none';
}

function addClass() {
    let container = document.getElementById("class");
    let input = document.createElement("input");
    input.type = "text";
    input.name = "courses[]";
    input.required = true;
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
    document.getElementById("deleteClass").style.display = "inline";
}
function deleteClass() {
    let container = document.getElementById("class");

    if (container.children.length > 0) {
        container.removeChild(container.lastChild);  
        container.removeChild(container.lastChild);  
    }
    if (container.children.length === 0) {
        document.getElementById("deleteClass").style.display = "none";
    }
}


function submitForm(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    let resultContent = '<h3>Form Submission Result:</h3><ul>';

    formData.forEach((value, key) => {
        resultContent += `<li><strong>${key}:</strong> ${value}</li>`;
    });

    resultContent += '</ul>';

    document.querySelector('main').innerHTML = resultContent;

    let resetLink = document.createElement('a');
    resetLink.href = '#';
    resetLink.textContent = 'Click here to start over';
    resetLink.onclick = function() {
        resetForm();
        document.querySelector('main').innerHTML = '';
    };
    document.querySelector('main').appendChild(resetLink);
}


