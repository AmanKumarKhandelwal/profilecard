// Function to display the profile
function displayProfile() {
    const profile = JSON.parse(localStorage.getItem('studentProfile'));

    if (profile) {
        document.getElementById('name').textContent = profile.name;
        document.getElementById('age').textContent = profile.age;
        document.getElementById('university').textContent = profile.university;

        const educationHistory = document.getElementById('education-history');
        educationHistory.innerHTML = '';
        profile.educationHistory.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            educationHistory.appendChild(li);
        });

        const courses = document.getElementById('courses');
        courses.innerHTML = '';
        profile.courses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = course;
            courses.appendChild(li);
        });
    }
}

// Function to save the profile
function saveProfile(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const university = document.getElementById('university').value;
    const educationHistory = document.getElementById('education-history').value.split(',');
    const courses = document.getElementById('courses').value.split(',');

    const profile = {
        name,
        age,
        university,
        educationHistory,
        courses
    };

    localStorage.setItem('studentProfile', JSON.stringify(profile));

    window.location.href = 'index.html';
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('profile')) {
        displayProfile();
    }
    
    if (document.getElementById('edit-form')) {
        const profile = JSON.parse(localStorage.getItem('studentProfile'));
        if (profile) {
            document.getElementById('name').value = profile.name;
            document.getElementById('age').value = profile.age;
            document.getElementById('university').value = profile.university;
            document.getElementById('education-history').value = profile.educationHistory.join(',');
            document.getElementById('courses').value = profile.courses.join(',');
        }

        document.getElementById('edit-form').addEventListener('submit', saveProfile);
    }
});
