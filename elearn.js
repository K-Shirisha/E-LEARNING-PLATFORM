function increaseProgress() {
  const progress = document.getElementById("progress");
  const text = document.getElementById("progress-text");

  if (progress.value < 100) {
    progress.value += 20;
    text.textContent = `${progress.value}% completed`;
  } else {
    alert("You’ve completed this course!");
  }
}
