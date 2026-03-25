let history = [];

// Answer function
function getAnswer() {
    let question = document.getElementById("question").value.toLowerCase();
    let answer = "";

    if (question.includes("python")) {
        answer = "Python is a programming language used in AI and ML.";
    } else if (question.includes("ai")) {
        answer = "AI means Artificial Intelligence.";
    } else if (question.includes("ml")) {
        answer = "Machine Learning is a subset of AI.";
    } else {
        answer = "I am still learning!";
    }

    // Save history
    history.push(question);

    document.getElementById("answer").innerText = answer;
    document.getElementById("history").innerText = history.join(", ");
}

// Notes generator
function generateNotes() {
    let topic = document.getElementById("topic").value;

    let notes = "Notes on " + topic + ":\n- Key points\n- Important concepts\n- Summary";

    document.getElementById("notes").innerText = notes;
}

// Dark mode
function toggleMode() {
    document.body.classList.toggle("dark");
}