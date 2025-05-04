document.addEventListener('DOMContentLoaded', function() {
    // Salary and skill data
    const positionData = {
        software_engineer: {
            title: "Software Engineer",
            salary: {
                "0-2": 80000,
                "3-5": 110000,
                "6-10": 140000,
                "10+": 180000
            },
            skills: ["JavaScript", "Python", "React", "Node.js", "SQL", "Git"]
        },
        product_manager: {
            title: "Product Manager",
            salary: {
                "0-2": 90000,
                "3-5": 120000,
                "6-10": 150000,
                "10+": 190000
            },
            skills: ["Product Strategy", "Market Research", "Agile", "User Stories", "Roadmapping", "Stakeholder Management"]
        },
        data_scientist: {
            title: "Data Scientist",
            salary: {
                "0-2": 95000,
                "3-5": 125000,
                "6-10": 155000,
                "10+": 200000
            },
            skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics", "Big Data"]
        },
        ux_designer: {
            title: "UX Designer",
            salary: {
                "0-2": 75000,
                "3-5": 100000,
                "6-10": 130000,
                "10+": 160000
            },
            skills: ["User Research", "Wireframing", "Prototyping", "UI Design", "Figma", "Usability Testing"]
        },
        devops: {
            title: "DevOps Engineer",
            salary: {
                "0-2": 85000,
                "3-5": 115000,
                "6-10": 145000,
                "10+": 185000
            },
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code", "Monitoring"]
        }
    };

    // Comparison button click handler
    document.getElementById('compare-btn').addEventListener('click', function() {
        const position1 = document.getElementById('position1').value;
        const position2 = document.getElementById('position2').value;
        const experience = document.getElementById('experience').value;
        
        if (!position1 || !position2) {
            alert('Please select both positions to compare');
            return;
        }
        
        if (position1 === position2) {
            alert('Please select two different positions to compare');
            return;
        }
        
        comparePositions(position1, position2, experience);
    });

    // Function to compare positions
    function comparePositions(pos1, pos2, exp) {
        const pos1Data = positionData[pos1];
        const pos2Data = positionData[pos2];
        
        const pos1Salary = pos1Data.salary[exp];
        const pos2Salary = pos2Data.salary[exp];
        
        const resultsContainer = document.getElementById('comparison-results');
        resultsContainer.innerHTML = '';
        
        // Add comparison title
        const title = document.createElement('h4');
        title.textContent = `Comparison: ${pos1Data.title} vs ${pos2Data.title} (${exp} experience)`;
        resultsContainer.appendChild(title);
        
        // Create salary comparison
        const salaryRow = document.createElement('div');
        salaryRow.className = 'result-row';
        salaryRow.innerHTML = `
            <div class="result-label">Average Salary</div>
            <div class="result-value">$${pos1Salary.toLocaleString()}</div>
            <div class="result-value">$${pos2Salary.toLocaleString()}</div>
        `;
        resultsContainer.appendChild(salaryRow);
        
        // Add salary bar visualization
        const maxSalary = Math.max(pos1Salary, pos2Salary) * 1.2;
        const salaryBar = document.createElement('div');
        salaryBar.className = 'salary-bar';
        salaryBar.innerHTML = `
            <div class="salary-fill" style="width: ${(pos1Salary / maxSalary) * 100}%"></div>
            <div class="salary-fill" style="width: ${(pos2Salary / maxSalary) * 100}%"></div>
        `;
        resultsContainer.appendChild(salaryBar);
        
        const salaryLabels = document.createElement('div');
        salaryLabels.className = 'salary-labels';
        salaryLabels.innerHTML = `
            <span>${pos1Data.title}</span>
            <span>${pos2Data.title}</span>
        `;
        resultsContainer.appendChild(salaryLabels);
        
        // Add required skills for position 1
        const skills1Row = document.createElement('div');
        skills1Row.className = 'result-row';
        skills1Row.innerHTML = `
            <div class="result-label">${pos1Data.title} Skills</div>
            <div class="skill-list">
                ${pos1Data.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        resultsContainer.appendChild(skills1Row);
        
        // Add required skills for position 2
        const skills2Row = document.createElement('div');
        skills2Row.className = 'result-row';
        skills2Row.innerHTML = `
            <div class="result-label">${pos2Data.title} Skills</div>
            <div class="skill-list">
                ${pos2Data.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        resultsContainer.appendChild(skills2Row);
        
        // Add common skills
        const commonSkills = pos1Data.skills.filter(skill => pos2Data.skills.includes(skill));
        if (commonSkills.length > 0) {
            const commonSkillsRow = document.createElement('div');
            commonSkillsRow.className = 'result-row';
            commonSkillsRow.innerHTML = `
                <div class="result-label">Common Skills</div>
                <div class="skill-list">
                    ${commonSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            `;
            resultsContainer.appendChild(commonSkillsRow);
        }
    }
});