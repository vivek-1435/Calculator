const display = document.getElementById('display');

// Append numbers and operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// Clear the entire screen
function clearDisplay() {
    display.value = "";
}

// Delete the last character entered
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
    try {
        // We use eval() to process the math string
        // but first we ensure it isn't empty
        if (display.value !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "Error";
    }
}

// Toggle between Dark and Light mode
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById("theme-btn");
    
    body.classList.toggle("light-theme");
    
    if (body.classList.contains("light-theme")) {
        btn.innerText = "Switch to Dark Mode";
    } else {
        btn.innerText = "Switch to Light Mode";
    }
}