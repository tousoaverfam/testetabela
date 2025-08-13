function doGet(e) {
  var ss = SpreadsheetApp.openById("1pVvg6iEkfKLc_Ch1Ci76Uk6pPfyO9GBn3Axyc0XZwSY");
  var sheet = ss.getSheetByName("testetabela");
  var word = e.parameter.word || "";
  
  if (word.trim()) {
    sheet.appendRow([word]);
  }
  
  return ContentService.createTextOutput("Success");
}

function doPost(e) {
  var ss = SpreadsheetApp.openById("1pVvg6iEkfKLc_Ch1Ci76Uk6pPfyO9GBn3Axyc0XZwSY");
  var sheet = ss.getSheetByName("testetabela");
  var word = e.parameter.word || "";
  
  if (word.trim()) {
    sheet.appendRow([word]);
  }
  
  return ContentService.createTextOutput("Success");
}
