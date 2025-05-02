document.addEventListener("DOMContentLoaded",()=> {
    document.getElementsId("addClass").style.display = "inline";
    document.getElementsId("deleteClass").style.display = "none";
})

function validateForm(event) {
    const requiredInputs = document.querySelectorAll('input[required], textarea[required]');
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
    const wrapper = document.createElement("div");
    wrapper.classname = "course-entry";

    const titleLabel = document.createElement("label");
    titleLabel.textContext = "Course Title:";
    titleLabel.htmlFor = 'course-title-${Date.now()}';
    
    const titleInput = document.createElement("textarea");
    titleInput.name = "course-title[]:";
    titleInput.required = true;

    const descLabel = document.createElement("label");
    descLabel.textContext = "Course Description:";
    descLabel.htmlFor = 'course-descript-${Date.now()}';

    const descInput = document.createElement("textarea");
    descInput.name = "course-descript[]:";
    descInput.required = true;

    wrapper.appendChild(titleLabel);
    wrapper.appendChild(titleInput);
    wrapper.appendChild(descLabel);
    wrapper.appendChild(descInput);

    container.appendChild(wrapper);

    document.getElementById("deleteClass").style.display = "inline";
}
function deleteClass() {
    let container = document.getElementById("class");
    const entries = container.querySelectorAll('.courseentry');


    if (entries.length > 0) {
        container.removeChild(entries[entries.length - 1]);   
    }
    if (container.querySelectorAll('.course-entry').length === 0) {
        document.getElementById("deleteClass").style.display = "none";
    }
}


function submitForm(event) {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const main = document.querySelector('main');
    let resultContent = '<h2>Your Personalized Intro</h2>';

    const displaySection = document.createElement('section');
    displaySection.innerHTML = '<ul></ul>';

    const ul = displaySection.querySelector('ul');
    
    const courseTitles = formData.getAll('course-title[]');
    const courseDescripts = formData.getAll('course-decript[]');



    formData.forEach((value, key) => {

        if (key==='course-title[]'|| key === 'course-descript[]') return;

        const li = document.createElement('li');

        if (key === 'image' && value instanceof File){
            const imgURL = URL.createObjectURL(value);
            li.innerHTML = '<strong>Image:</strong><br><img src="${imgURL}" alt="uploaded image" style="max-width:300">';
        }else{
            li.innerHTML = '<strong>${formatLabel(key)}:</strong> ${value}';
        }
        ul.appendChild(li);
    });

   if (courseTitles.length >0){
    const courseList = document.createElement('li');
    courseList.innerHTML = '<strong>Courses:</strong><ul></ul>';

    for (let i=0; i<courseTitles.length; i++){
        const title = courseTitles[i]||'';
        const desc = courseDescripts[i] || '';
        const item = document.createElement('li');
        item.innerHTML = '<strong>${title}:</strong> ${desc}';
        nestedList.appendChild(item);
    }
    ul.appendChild(courseList);
   }
   
   main.appendChild(displaySection);

    const resetLink = document.createElement('a');
    resetLink.href = '#';
    resetLink.textContent = 'Click here to start over';
    resetLink.onclick = function() {
        resetForm();
        document.querySelector('main').innerHTML = '';
    };
    document.querySelector('main').appendChild(resetLink);
}


