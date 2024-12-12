async function loadWorkExperience() {
    try {
        const response = await fetch('assets/data/work-experience.json');
        const data = await response.json();
        
        const experienceContainer = document.querySelector('.resume-timeline');
        experienceContainer.innerHTML = ''; // Clear existing content
        
        data.experiences.forEach(exp => {
            const article = document.createElement('article');
            article.className = 'resume-timeline-item position-relative pb-5';
            
            article.innerHTML = `
                <div class="resume-timeline-item-header mb-2">
                    <div class="d-flex flex-column flex-md-row">
                        <h3 class="resume-position-title font-weight-bold mb-1">${exp.position}</h3>
                        <div class="resume-company-name ms-auto">${exp.company}</div>
                    </div>
                    <div class="resume-position-time">${exp.period}</div>
                </div>
                <div class="resume-timeline-item-desc">
                    <p>${exp.description}</p>
                    ${exp.achievements ? `
                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                        <ul>
                            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    ` : ''}
                    <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                    <ul class="list-inline">
                        ${exp.technologies.map(tech => `
                            <li class="list-inline-item"><span class="badge bg-secondary badge-pill">${tech}</span></li>
                        `).join('')}
                    </ul>
                </div>
            `;
            
            experienceContainer.appendChild(article);
        });
    } catch (error) {
        console.error('Error loading work experience:', error);
    }
} 

        document.addEventListener("DOMContentLoaded", loadWorkExperience);
