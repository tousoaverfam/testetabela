// Replace with your actual Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbx-lOU0zJh7vdQnM2kmiySMlkF4LxajyE9yIIVkjQce3xMeqFj5XUqHemJPlUztZxyM/exec";

document.getElementById("addBtn").addEventListener("click", () => {
  const word = document.getElementById("wordInput").value.trim();
  if (!word) {
    alert("Please enter a word");
    return;
  }

  const formData = new FormData();
  formData.append("word", word);

  fetch(scriptURL, { method: "POST", body: formData })
    .then(response => response.text())
    .then(() => {
      alert(`"${word}" added to Google Sheet!`);
      document.getElementById("wordInput").value = "";
    })
    .catch(error => {
      console.error("Error!", error);
      alert("Error sending data.");
    });
});
