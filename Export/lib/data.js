function saveData() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var storageType = document.getElementById("storageType").value;
  
    if (storageType == "session") {
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("lastName", lastName);
      sessionStorage.setItem("gender", gender);
      sessionStorage.setItem("address", address);
    } else {
      var expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = "firstName=" + firstName + ";expires=" + expiryDate.toUTCString();
      document.cookie = "lastName=" + lastName + ";expires=" + expiryDate.toUTCString();
      document.cookie = "gender=" + gender + ";expires=" + expiryDate.toUTCString();
      document.cookie = "address=" + address + ";expires=" + expiryDate.toUTCString();
    }
  
    alert("Data saved successfully!");
  }
  
  function displayData() {
    var storageType = document.getElementById("storageType").value;
  
    if (storageType == "session") {
      var firstName = sessionStorage.getItem("firstName");
      var lastName = sessionStorage.getItem("lastName");
      var gender = sessionStorage.getItem("gender");
      var address = sessionStorage.getItem("address");
    } else {
      var firstName = getCookie("firstName");
      var lastName = getCookie("lastName");
      var gender = getCookie("gender");
      var address = getCookie("address");
    }
  
    var dataElement = document.getElementById("data");
    dataElement.innerHTML = "<p>First Name: " + firstName + "</p>" +
                            "<p>Last Name: " + lastName + "</p>" +
                            "<p>Gender: " + gender + "</p>" +
                            "<p>Address: " + address + "</p>";
  }
  
  function deleteData() {
    var storageType = document.getElementById("storageType").value;
  
    if (storageType == "session") {
      sessionStorage.removeItem("firstName");
      sessionStorage.removeItem("lastName");
      sessionStorage.removeItem("gender");
      sessionStorage.removeItem("address");
    } else {
      var expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() - 1);
      document.cookie = "firstName=;expires=" + expiryDate.toUTCString();
      document.cookie = "lastName=;expires=" + expiryDate.toUTCString();
      document.cookie = "gender=;expires=" + expiryDate.toUTCString();
      document.cookie = "address=;expires=" + expiryDate.toUTCString();
    }
  
    alert("Data deleted successfully!");
  }
  
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
      return parts.pop().split(";").shift();
    }
  }