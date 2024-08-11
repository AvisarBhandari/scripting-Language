function roll() {
    const num = Math.floor(Math.random() * 6) + 1; 
        document.getElementById('num').value = num;
    const faces = document.querySelectorAll('#dice .child');
    faces.forEach((face, index) => {
        if (index < num) {
            face.style.visibility = 'visible'; 
        } else {
            face.style.visibility = 'hidden'; 
        }
    });
}



