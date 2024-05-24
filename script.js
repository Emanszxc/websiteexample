document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    fetch('/led', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      // You can update the UI here based on the response from the server
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});