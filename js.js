ript>
        // JavaScript for interactivity
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple client-side validation
            if (username === "admin" && password === "password") {
                alert('Login successful!');
                // Redirect to another page or perform further actions
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });