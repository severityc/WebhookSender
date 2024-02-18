document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const webhook = document.getElementById('webhook').value; 
    const message = document.getElementById('message').value; 

    const xhr = new XMLHttpRequest();

    xhr.open('POST', webhook, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            alert('Message sent successfully!');
            document.getElementById('message').value = ''; 
        } else {
            alert('Message failed to send. Please try again later.');
        }
    };

    xhr.onerror = function () {
        alert('An error occurred while sending the message.');
    };

    const data = JSON.stringify({
        content: message
    });

    xhr.send(data);
});
