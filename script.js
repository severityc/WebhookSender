document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const webhook = document.getElementById('webhook').value; // Get the webhook from the input
    const message = document.getElementById('message').value; // Get the message from the input

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open('POST', webhook, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Define what happens on successful data submission
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            alert('Message sent successfully!');
            document.getElementById('message').value = ''; // Clear the message input field
        } else {
            alert('Message failed to send. Please try again later.');
        }
    };

    // Handle any errors
    xhr.onerror = function () {
        alert('An error occurred while sending the message.');
    };

    // Create the JSON payload
    const data = JSON.stringify({
        content: message
    });

    // Send the request
    xhr.send(data);
});
