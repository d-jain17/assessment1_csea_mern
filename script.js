function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone_no').value;
    const linkedin = document.getElementById('lprofile').value;
    const github = document.getElementById('gprofile').value;
    const experience = document.getElementById('wExp').value;
    const education = document.getElementById('ed').value;
    const photoInput = document.getElementById('pic');
    
    document.getElementById('displayName').innerText = `Name: ${name}`;
    document.getElementById('displayEmail').innerText = `Email: ${email}`;
    document.getElementById('displayPhone').innerText = `Phone: ${phone}`;
    document.getElementById('displayLinkedin').innerText = `LinkedIn: ${linkedin}`;
    document.getElementById('displayGithub').innerText = `Github: ${github}`;
    document.getElementById('displayExperience').innerText = `Experience: ${experience}`;
    document.getElementById('displayEducation').innerText = `Education: ${education}`;

    const previewPhoto = document.getElementById('displayPic');
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewPhoto.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        previewPhoto.style.display = 'none';
    }
    
    document.getElementById('user_form').style.display = 'none';
    document.getElementById('resume').style.display = 'block';
}
function downloadResume() {
    const resumeElement = document.getElementById('resume');
    
   
    const options = {
        margin: 0.5,               
        filename: 'Resume.pdf',   
        image: { type: 'jpeg', quality: 0.98 },  
        html2canvas: { scale: 2 }, 
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } 
    };
    
   
    html2pdf().from(resumeElement).set(options).save();
}
