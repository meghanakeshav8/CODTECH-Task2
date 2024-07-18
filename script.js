document.getElementById('addWorkoutBtn').addEventListener('click', function() {
    const name = document.getElementById('workoutName').value;
    const duration = document.getElementById('workoutDuration').value;

    if (!name || !duration) {
        alert("Please enter both workout name and duration.");
        return;
    }

    const workoutsContainer = document.getElementById('workoutsContainer');
    const workoutElement = document.createElement('div');
    workoutElement.className = 'entry';
    workoutElement.innerText = `Workout: ${name}, Duration: ${duration} minutes`;

    workoutsContainer.appendChild(workoutElement);
    document.getElementById('workoutName').value = '';
    document.getElementById('workoutDuration').value = '';
});

document.getElementById('addRunBtn').addEventListener('click', function() {
    const date = document.getElementById('runDate').value;
    const distance = document.getElementById('runDistance').value;

    if (!date || !distance) {
        alert("Please enter both date and distance.");
        return;
    }

    const runsContainer = document.getElementById('runsContainer');
    const runElement = document.createElement('div');
    runElement.className = 'entry';
    runElement.innerText = `Run on ${date}: ${distance} km`;

    runsContainer.appendChild(runElement);
    document.getElementById('runDate').value = '';
    document.getElementById('runDistance').value = '';
});

document.getElementById('addCalorieBtn').addEventListener('click', function() {
    const foodItem = document.getElementById('foodItem').value;
    const calories = document.getElementById('calories').value;

    if (!foodItem || !calories) {
        alert("Please enter both food item and calories.");
        return;
    }

    const caloriesContainer = document.getElementById('caloriesContainer');
    const calorieElement = document.createElement('div');
    calorieElement.className = 'entry';
    calorieElement.innerText = `${foodItem}: ${calories} calories`;

    caloriesContainer.appendChild(calorieElement);
    document.getElementById('foodItem').value = '';
    document.getElementById('calories').value = '';
});
