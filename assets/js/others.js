async function loadOtherSections() {
    try {
        const response = await fetch('assets/data/others.json');
        const data = await response.json();
        
        loadSkills(data.skills);
        loadEducation(data.education);
        loadAwards(data.awards);
        loadLanguages(data.languages);
        loadInterests(data.interests);
    } catch (error) {
        console.error('Error loading other sections:', error);
    }
}

function loadSkills(skills) {
    // Frontend Skills
    const frontendList = document.querySelector('.skills-section .resume-skill-item:nth-child(1) ul');
    frontendList.innerHTML = skills.frontend.items.map(skill => `
        <li class="mb-2">
            <div class="resume-skill-name">${skill.name}</div>
            <div class="progress resume-progress">
                <div class="progress-bar theme-progress-bar-dark" role="progressbar" 
                     style="width: ${skill.percentage}%" 
                     aria-valuenow="${skill.percentage}" 
                     aria-valuemin="0" 
                     aria-valuemax="100"></div>
            </div>
        </li>
    `).join('');

    // Backend Skills
    const backendList = document.querySelector('.skills-section .resume-skill-item:nth-child(2) ul');
    backendList.innerHTML = skills.backend.items.map(skill => `
        <li class="mb-2">
            <div class="resume-skill-name">${skill.name}</div>
            <div class="progress resume-progress">
                <div class="progress-bar theme-progress-bar-dark" role="progressbar" 
                     style="width: ${skill.percentage}%" 
                     aria-valuenow="${skill.percentage}" 
                     aria-valuemin="0" 
                     aria-valuemax="100"></div>
            </div>
        </li>
    `).join('');

    // Other Skills
    const otherList = document.querySelector('.skills-section .resume-skill-item:nth-child(3) ul');
    otherList.innerHTML = skills.other.items.map(skill => `
        <li class="list-inline-item"><span class="badge badge-light">${skill}</span></li>
    `).join('');
}

function loadEducation(education) {
    const educationList = document.querySelector('.education-section .resume-section-content ul');
    educationList.innerHTML = education.map(edu => `
        <li class="mb-2">
            <div class="resume-degree font-weight-bold">${edu.degree}</div>
            <div class="resume-degree-org">${edu.school}</div>
            <div class="resume-degree-time">${edu.period}</div>
        </li>
    `).join('');
}

function loadAwards(awards) {
    const awardsList = document.querySelector('.reference-section .resume-awards-list');
    awardsList.innerHTML = awards.map(award => `
        <li class="mb-2 ps-4 position-relative">
            <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
            <div class="resume-award-name">${award.name}</div>
            <div class="resume-award-desc">${award.description}</div>
        </li>
    `).join('');
}

function loadLanguages(languages) {
    const languageList = document.querySelector('.language-section .resume-lang-list');
    languageList.innerHTML = languages.map(lang => `
        <li class="mb-2">
            <span class="resume-lang-name font-weight-bold">${lang.name}</span> 
            <small class="text-muted font-weight-normal">(${lang.level})</small>
        </li>
    `).join('');
}

function loadInterests(interests) {
    const interestsList = document.querySelector('.interests-section .resume-section-content ul');
    interestsList.innerHTML = interests.map(interest => `
        <li class="mb-1">${interest}</li>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadOtherSections); 