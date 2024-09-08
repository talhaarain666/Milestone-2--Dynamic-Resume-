document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
  event.preventDefault();

  const nameInput = document.getElementById('name') as HTMLInputElement | null;
  const emailInput = document.getElementById('email') as HTMLInputElement | null;

  const name = nameInput ? nameInput.value : '';
  const email = emailInput ? emailInput.value : '';

  const educationFields = document.querySelectorAll('#educationFields .education-field');
  const education = Array.from(educationFields).map(field => {
    const institutionInput = field.querySelector('input[name="education"]') as HTMLInputElement | null;
    const degreeInput = field.querySelector('input[name="degree"]') as HTMLInputElement | null;
    const yearInput = field.querySelector('input[name="year"]') as HTMLInputElement | null;

    const institution = institutionInput ? institutionInput.value : '';
    const degree = degreeInput ? degreeInput.value : '';
    const year = yearInput ? yearInput.value : '';

    return `<p><strong>${institution}</strong> - ${degree}, ${year}</p>`;
  }).join('');

  const workExperienceFields = document.querySelectorAll('#workExperienceFields .work-experience-field');
  const workExperience = Array.from(workExperienceFields).map(field => {
    const companyInput = field.querySelector('input[name="company"]') as HTMLInputElement | null;
    const positionInput = field.querySelector('input[name="position"]') as HTMLInputElement | null;
    const yearInput = field.querySelector('input[name="year"]') as HTMLInputElement | null;

    const company = companyInput ? companyInput.value : '';
    const position = positionInput ? positionInput.value : '';
    const year = yearInput ? yearInput.value : '';

    return `<p><strong>${company}</strong> - ${position}, ${year}</p>`;
  }).join('');

  const skillFields = document.querySelectorAll('#skillsFields .skill-field');
  const skills = Array.from(skillFields).map(field => {
    const skillInput = field.querySelector('input[name="skills"]') as HTMLInputElement | null;
    const skill = skillInput ? skillInput.value : '';
    return `<li>${skill}</li>`;
  }).join('');

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

  document.getElementById('resumePreview')!.innerHTML = resumeHTML;
});

document.getElementById('addEducation')?.addEventListener('click', function () {
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

document.getElementById('addWorkExperience')?.addEventListener('click', function () {
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

document.getElementById('addSkill')?.addEventListener('click', function () {
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
