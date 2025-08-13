const scriptURL = "https://script.google.com/macros/s/AKfycbx-lOU0zJh7vdQnM2kmiySMlkF4LxajyE9yIIVkjQce3xMeqFj5XUqHemJPlUztZxyM/exec"; // from Apps Script deployment
const addBtn = document.getElementById("addBtn");
const status = document.getElementById("status");

addBtn.addEventListener("click", () => {
  const word = document.getElementById("wordInput").value.trim();
  if (!word) {
    status.textContent = "Please enter a word.";
    status.style.color = "red";
    return;
  }

  fetch(scriptURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ word: word })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      status.textContent = `"${word}" added!`;
      status.style.color = "green";
      document.getElementById("wordInput").value = "";
    } else {
      status.textContent = "Error: " + data.message;
      status.style.color = "red";
    }
  })
  .catch(err => {
    status.textContent = "Request failed.";
    status.style.color = "red";
    console.error(err);
  });
});
