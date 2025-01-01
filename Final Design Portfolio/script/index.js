function navigateContact() {
  var button = this;  // Use `this` properly
  var a = document.createElement('a');  // Create an anchor tag
  a.href = './contact.html';  // Set the download path
  a.style.display = 'none';  // Hide the anchor tag
  document.body.appendChild(a);  // Append the anchor tag to the document body
  a.click();  // Trigger the download
  document.body.removeChild(a);  // Remove the anchor tag
}