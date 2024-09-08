"use strict";
var _a, _b, _c, _d;
// Handle form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const name = nameInput ? nameInput.value : '';
    const email = emailInput ? emailInput.value : '';
    // Capture education fields
    const educationFields = document.querySelectorAll('#educationFields .education-field');
    const education = Array.from(educationFields).map(field => {
        const institutionInput = field.querySelector('input[name="education"]');
        const degreeInput = field.querySelector('input[name="degree"]');
        const yearInput = field.querySelector('input[name="year"]');
        const institution = institutionInput ? institutionInput.value : '';
        const degree = degreeInput ? degreeInput.value : '';
        const year = yearInput ? yearInput.value : '';
        return `<p><strong>${institution}</strong> - ${degree}, ${year}</p>`;
    }).join('');
    // Capture work experience fields
    const workExperienceFields = document.querySelectorAll('#workExperienceFields .work-experience-field');
    const workExperience = Array.from(workExperienceFields).map(field => {
        const companyInput = field.querySelector('input[name="company"]');
        const positionInput = field.querySelector('input[name="position"]');
        const yearInput = field.querySelector('input[name="year"]');
        const company = companyInput ? companyInput.value : '';
        const position = positionInput ? positionInput.value : '';
        const year = yearInput ? yearInput.value : '';
        return `<p><strong>${company}</strong> - ${position}, ${year}</p>`;
    }).join('');
    // Capture skills fields
    const skillFields = document.querySelectorAll('#skillsFields .skill-field');
    const skills = Array.from(skillFields).map(field => {
        const skillInput = field.querySelector('input[name="skills"]');
        const skill = skillInput ? skillInput.value : '';
        return `<li>${skill}</li>`;
    }).join('');
    // Generate resume HTML
    const resumeHTML = `
       <div class="resume">
            <h1>${name}</h1>
            <p>Email: ${email}</p>
            <h2>Education</h2>
            ${education}
            <h2>Work Experience</h2>
            ${workExperience}
            <h2>Skills</h2>
            <ul>${skills}</ul>
        </div>
  `;
    // Update resume preview
    document.getElementById('resumePreview').innerHTML = resumeHTML;
});
// Add more education fields
(_b = document.getElementById('addEducation')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    const educationFields = document.getElementById('educationFields');
    if (educationFields) {
        const newField = document.createElement('div');
        newField.classList.add('education-field');
        newField.innerHTML = `
          <input type="text" name="education" placeholder="Institution" required />
          <input type="text" name="degree" placeholder="Degree" required />
          <input type="text" name="year" placeholder="Year" required />
      `;
        educationFields.appendChild(newField);
    }
});
// Add more work experience fields
(_c = document.getElementById('addWorkExperience')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    const workExperienceFields = document.getElementById('workExperienceFields');
    if (workExperienceFields) {
        const newField = document.createElement('div');
        newField.classList.add('work-experience-field');
        newField.innerHTML = `
          <input type="text" name="company" placeholder="Company Name" required />
          <input type="text" name="position" placeholder="Position" required />
          <input type="text" name="year" placeholder="Year" required />
      `;
        workExperienceFields.appendChild(newField);
    }
});
// Add more skills fields
(_d = document.getElementById('addSkill')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
    const skillsFields = document.getElementById('skillsFields');
    if (skillsFields) {
        const newField = document.createElement('div');
        newField.classList.add('skill-field');
        newField.innerHTML = `
          <input type="text" name="skills" placeholder="Skill" required />
      `;
        skillsFields.appendChild(newField);
    }
});
