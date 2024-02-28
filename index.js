let timeLeft = 300; // 5 minutes
const timerDisplay = document.getElementById("timer");
updateTimerDisplay();

 function updateTimerDisplay() {
   const minutes = Math.floor(timeLeft / 60);
   const seconds = timeLeft % 60;
   timerDisplay.textContent = `Time remaining: ${minutes}:${
     seconds < 10 ? "0" : ""
   }${seconds}`;
 }
 
  const timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        submitQuiz();
      }
    }, 1000);

  function submitQuiz() {
    clearInterval(timerInterval);
    const form = document.getElementById("quizForm");
    const answers = {
      question1: form.elements["question1"].value,
      question2: form.elements["question2"].value,
      question3: form.elements["question3"].value,
      question4: form.elements["question4"].value,
      question5: form.elements["question5"].value,
    };

    // Calculate score
    let score = 0;
    if (answers["question1"] === "c") score++;
    if (answers["question2"] === "4") score++;
    if (answers["question3"] === "A") score++;
    if (answers["question4"] === "12") score++;
    if (answers["question5"] === "2") score++;

    // Redirect to result page
    const queryParams = `?score=${score}&timeLeft=${timeLeft}&question1=${answers.question1}&question2=${answers.question2}&question3=${answers.question3}&question4=${answers.question4}&question5=${answers.question5}`;
    window.location.href = `page_3.html${queryParams}`;
  }
