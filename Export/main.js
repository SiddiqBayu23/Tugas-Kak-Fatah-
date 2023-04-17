import { addDataToStorage, getDataFromStorage, clearData} from './lib/storage.js';
import { renderData } from './lib/render.js';
import { getFormData } from './lib/form.js';

// Array to store form data
var formDataArray = [];

// Function to save form data
function saveData() {
  // Get form values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var gender = document.getElementById("gender").value;
  var address = document.getElementById("address").value;
  var storageType = document.getElementById("storageType").value;

  // Create data object
  var data = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    address: address
  };

  // Save data to array
  formDataArray.push(data);

  // Save data to storage
  if (storageType === "session") {
    sessionStorage.setItem("formData", JSON.stringify(formDataArray));
  } else if (storageType === "cookie") {
    document.cookie = "formData=" + JSON.stringify(formDataArray);
  }

  // Reset form
  document.getElementById("myForm").reset();
}

// Function to delete data
function deleteData() {
  sessionStorage.removeItem("formData");
  document.cookie = "formData=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

  // Clear displayed data
  document.getElementById("data").innerHTML = "";
}

// Function to display data
function displayData() {
  var storedData = sessionStorage.getItem("formData") || getCookie("formData");

  if (storedData) {
    var data = JSON.parse(storedData);

    var output = "";

    for (var i = 0; i < data.length; i++) {
      output += "Data " + (i+1) + ":<br>" +
                "First Name: " + data[i].firstName + "<br>" +
                "Last Name: " + data[i].lastName + "<br>" +
                "Gender: " + data[i].gender + "<br>" +
                "Address: " + data[i].address + "<br><br>";
    }

    document.getElementById("data").innerHTML = output;
  } else {
    document.getElementById("data").innerHTML = "No data found.";
  }
}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");

  // Loop through cookies to find the one with the specified name
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // If cookie not found, return null
  return null;
}
