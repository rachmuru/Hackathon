function redirectToLoginPage() {
  var userType = document.getElementById("userType").value;
  if (userType === "worker") {
    window.location.href = "./HTML/worker_login.html";
  } else if (userType === "administrator") {
    window.location.href = "./HTML/admin_login.html";
  }
}
