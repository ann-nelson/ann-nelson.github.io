let classCount = 0;

  function addClass() {
    const classContainer = document.getElementById("class");

    const classGroup = document.createElement("div");
    classGroup.className = "class-group";
    classGroup.id = `class-group-${classCount}`;

    const titleLabel = document.createElement("label");
    titleLabel.textContent = `Course Title`;
    titleLabel.setAttribute("for", `courseTitle-${classCount}`);

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.name = `courseTitle-${classCount}`;
    titleInput.id = `courseTitle-${classCount}`;
    titleInput.placeholder = "Enter Course Title";
    titleInput.required = true;

    const descLabel = document.createElement("label");
    descLabel.textContent = `Course Description`;
    descLabel.setAttribute("for", `courseDesc-${classCount}`);

    const descInput = document.createElement("textarea");
    descInput.name = `courseDesc-${classCount}`;
    descInput.id = `courseDesc-${classCount}`;
    descInput.placeholder = "Enter Course Description";
    descInput.required = true;

    classGroup.appendChild(document.createElement("br"));
    classGroup.appendChild(titleLabel);
    classGroup.appendChild(document.createElement("br"));
    classGroup.appendChild(titleInput);
    classGroup.appendChild(document.createElement("br"));
    classGroup.appendChild(document.createElement("br"));
    classGroup.appendChild(descLabel);
    classGroup.appendChild(document.createElement("br"));
    classGroup.appendChild(descInput);
    classGroup.appendChild(document.createElement("br"));
    classGroup.appendChild(document.createElement("br"));

    classContainer.appendChild(classGroup);

    classCount++;
    document.getElementById("deleteClass").style.display = "inline-block";
  }

  function deleteClass() {
    if (classCount > 0) {
      classCount--;
      const classGroup = document.getElementById(`class-group-${classCount}`);
      if (classGroup) classGroup.remove();
    }

    if (classCount === 0) {
      document.getElementById("deleteClass").style.display = "none";
    }
  }

  function resetForm() {
    document.querySelector("form").reset();
    document.getElementById("class").innerHTML = "";
    document.getElementById("loadImage").innerHTML = "";
    classCount = 0;
    document.getElementById("deleteClass").style.display = "none";
  }

  function loadImage() {
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    if (imageFile) {
      const imageURL = URL.createObjectURL(imageFile);
      const imageHTML = `<img src="${imageURL}" alt="Uploaded Image" style="max-width: 300px; max-height: 300px;" />`;
      document.getElementById('loadImage').innerHTML = imageHTML;
    } else {
      document.getElementById('loadImage').innerHTML = "No image selected.";
    }
  }

  function submitForm(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const entries = {};
    for (const [key, value] of formData.entries()) {
      entries[key] = value;
    }
    let output = `<div id="submission-output">`;
    output += `<strong>${entries.name} || ${entries.mascot}</strong>`;

    const imageFile = document.getElementById('image').files[0];
    if (imageFile) {
      const imageURL = URL.createObjectURL(imageFile);
      output += `<div><img src="${imageURL}" alt="Uploaded Image" style="max-width:300px; max-height:300px;" /></div>`;
    }
    output += `<em>${entries.caption}</em>`;

    output += `<li><strong>Personal Background:</strong> ${entries.personal}</li>`;
    output += `<li><strong>Professional Background:</strong> ${entries.pro}</li>`;
    output += `<li><strong>Academic Background:</strong> ${entries.academic}</li>`;
    output += `<li><strong>Web Development Background:</strong> ${entries.web}</li>`;
    output += `<li><strong>Primary Computer Platform:</strong> ${entries.computer}</li>`;

    output += `<li><strong>Courses Currently Taking:</strong><ul>`;
    for (let i = 0; i < classCount; i++) {
      const title = entries[`courseTitle-${i}`];
      const desc = entries[`courseDesc-${i}`];
      if (title || desc) {
        output += `<li><strong>${title}</strong>: ${desc}</li>`;
      }
    }
    output += `</ul></li>`;

    output += `<li><strong>Funny Thing:</strong> ${entries.funny}</li>`;
    output += `<li><strong>Anything Else:</strong> ${entries.else}</li>`;
    output += `I understand that what is on this page is not password protected and I will not put anything here that I don’t want publicly available. - <em>${entries.name}</em>`;
    output += `</ul>`;

    form.outerHTML = output;
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addClass").addEventListener("click", addClass);
    document.getElementById("deleteClass").addEventListener("click", deleteClass);
    document.getElementById("resetForm").addEventListener("click", resetForm);
    document.getElementById("image").addEventListener("change", loadImage);
    document.querySelector("form").addEventListener("submit", submitForm);
  });