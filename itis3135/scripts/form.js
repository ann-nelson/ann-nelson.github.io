document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addClass").style.display = "inline";
    document.getElementById("deleteClass").style.display = "none";
});

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
    const container = document.getElementById("class");

    const wrapper = document.createElement("div");
    wrapper.className = "course-entry";

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Course Title:";
    titleLabel.htmlFor = `course-title-${Date.now()}`;

    const titleInput = document.createElement("textarea");
    titleInput.name = "course-title[]";
    titleInput.required = true;

    const descLabel = document.createElement("label");
    descLabel.textContent = "Course Description:";
    descLabel.htmlFor = `course-descript-${Date.now()}`;

    const descInput = document.createElement("textarea");
    descInput.name = "course-descript[]";

    wrapper.appendChild(titleLabel);
    wrapper.appendChild(titleInput);
    wrapper.appendChild(descLabel);
    wrapper.appendChild(descInput);

    container.appendChild(wrapper);

    document.getElementById("deleteClass").style.display = "inline";
}

function deleteClass() {
    const container = document.getElementById("class");
    const entries = container.querySelectorAll('.course-entry');
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
    main.innerHTML = '<h2>Your Personalized Intro</h2>';

    const displaySection = document.createElement('section');
    const ul = document.createElement('ul');

    const courseTitles = formData.getAll('course-title[]');
    const courseDescripts = formData.getAll('course-descript[]');

    // Loop through all entries except course[] and image
    formData.forEach((value, key) => {
        if (key === 'course-title[]' || key === 'course-descript[]') return;

        const li = document.createElement('li');

        // Show image
        if (key === 'image' && value instanceof File) {
            const imgURL = URL.createObjectURL(value);
            li.innerHTML = `<strong>Image:</strong><br><img src="${imgURL}" alt="Uploaded Image" style="max-width: 300px;">`;
        } else {
            li.innerHTML = `<strong>${formatLabel(key)}:</strong> ${value}`;
        }

        ul.appendChild(li);
    });

    // Handle course list display
    if (courseTitles.length > 0) {
        const courseList = document.createElement('li');
        courseList.innerHTML = `<strong>Courses:</strong><ul></ul>`;
        const nestedList = courseList.querySelector('ul');

        for (let i = 0; i < courseTitles.length; i++) {
            const title = courseTitles[i] || '';
            const desc = courseDescripts[i] || '';
            const item = document.createElement('li');
            item.innerHTML = `<strong>${title}</strong><br>${desc}`;
            nestedList.appendChild(item);
        }

        ul.appendChild(courseList);
    }

    displaySection.appendChild(ul);
    main.appendChild(displaySection);

    const resetLink = document.createElement('a');
    resetLink.href = '#';
    resetLink.textContent = 'Click here to start over';
    resetLink.style.display = 'inline-block';
    resetLink.style.marginTop = '20px';
    resetLink.onclick = function () {
        window.location.reload();
    };
    main.appendChild(resetLink);
}

function formatLabel(key) {
    return key.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}



