/**
         * Function to hide loader and adjust iframe height dynamically
         * @param {string} loaderId - The ID of the loader to hide
         * @param {string} iframeId - The ID of the iframe to adjust
         */
function adjustIframe(loaderId, iframeId) {
  const loader = document.getElementById(loaderId);
  const iframe = document.getElementById(iframeId);
  const btn_slide = document.querySelectorAll(".slide_button"); 

  if (loader) loader.style.display = "none"; // Hide loader
  if (iframe) {
      iframe.style.display = "block"; // Show iframe

      btn_slide.forEach(button => {
          button.style.display = "block";
      });



      // Dynamically adjust iframe height based on content
      setTimeout(() => {
          const iframeDocument = iframe.contentWindow?.document || iframe.contentDocument;
          if (iframeDocument) {
              iframe.style.height = iframeDocument.body.scrollHeight + "px";
          }
      }, 500); // Allow time for iframe content to load
  }
}


function expandDTR() {
window.open('./dtr.html', '_blank');  
}

function setDownloadHref() {
  var button = this;  // Use `this` properly
  var a = document.createElement('a');  // Create an anchor tag
  a.href = './file/pdf/MarkAnthonyVillahermosaResume.pdf';  // Set the download path
  a.download = 'MarkAnthonyVillahermosaResume.pdf';  // Set the filename
  a.style.display = 'none';  // Hide the anchor tag
  document.body.appendChild(a);  // Append the anchor tag to the document body
  a.click();  // Trigger the download
  document.body.removeChild(a);  // Remove the anchor tag
}
