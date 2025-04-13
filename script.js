let trainees = [];

function addTrainee() {
    let name = document.getElementById('name').value;
    let note1 = parseFloat(document.getElementById('note1').value);
    let note2 = parseFloat(document.getElementById('note2').value);
    
    if (!name || isNaN(note1) || isNaN(note2)) {
        alert("Veuillez remplir tous les champs correctement.");
        return;
    }
    
    let average = ((note1 + note2) / 2).toFixed(2);
    trainees.push({ name, average: parseFloat(average) });
    
    trainees.sort((a, b) => b.average - a.average);
    displayTrainees();

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('note1').value = '';
    document.getElementById('note2').value = '';    
    
}

function displayTrainees() {
    let list = document.getElementById('trainee-list');
    list.innerHTML = '';
    
    trainees.forEach((trainee, index) => {
        let bgColor = trainee.average >= 10 ? 'green' : 'gold';
        list.innerHTML += `
            <div class="trainee-card ${bgColor}">
                <div class="d-flex align-items-center">
                    <div class="rank">${index + 1}</div>
                    <span class="ms-2">${trainee.name}</span>
                </div>
                <span>${trainee.average}</span>
            </div>
        `;
    });
}