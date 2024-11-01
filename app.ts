const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement; 
const skillsSection = document.getElementById('skills-section') as HTMLElement; 

toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
