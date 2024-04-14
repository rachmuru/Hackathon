/*this is initia trial*/
document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve input values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Placeholder validation logic (replace with your actual validation)
    if (email === "worker@example.com" || password !== "password") {
      // Redirect to the dashboard upon successful login
      window.location.href = "../HTML/workersdash.html";
    } else {
      // Show an error message or handle invalid login
      alert("Invalid email or password. Please try again.");
    }
  });


  /*document.getElementById("loginButton").addEventListener("click", function() {
    // Redirect to the dashboard upon clicking the login button
    window.location.href = "./HTML/workersdash.html";
  });*/
  /*document.getElementById("loginButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Placeholder validation logic (replace with your actual validation)
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Assuming validation is successful, redirect to dashboard
    if (email === "worker@example.com" && password === "password") {
      window.location.href = "../HTML/workersdash.html"; // Redirect to the dashboard HTML file
    } else {
      alert("Incorrect email or password. Please try again."); // Show an error message
    }
  });*/
  