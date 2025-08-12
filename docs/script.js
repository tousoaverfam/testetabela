document.getElementById("addButton").addEventListener("click", sendWord);

function sendWord() {
  const word = document.getElementById("wordInput").value.trim();
  const status = document.getElementById("status");

  if (!word) {
    status.textContent = "Please type a word first.";
    status.style.color = "red";
    return;
  }

  // 🔹 Replace with your Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzjFsnvSaIpPek585t9cX_aOwoPuxHEortwajMKmLayM9lGS2ZRY0aGwLCIJ4l2quHQ/exec";

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ word: word })
  })
  .then(() => {
    status.textContent = `"${word}" sent to Google Sheet!`;
    status.style.color = "green";
    document.getElementById("wordInput").value = "";
  })
  .catch(error => {
    console.error('Error!', error);
    status.textContent = "Error sending data.";
    status.style.color = "red";
  });
}
