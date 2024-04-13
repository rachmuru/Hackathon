function login() {
    var userType = document.getElementById("userType").value;
    // You can perform login logic here based on the selected userType
    console.log("Logging in as " + userType);
    // Example: Redirect to different pages based on userType
    if (userType === "administrator") {
      window.location.href = "admin_login.html";
    } else if (userType === "worker") {
      window.location.href = "worker_login.html";
    }
  }