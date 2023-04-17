// Get form elements
const form = document.getElementById("myForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const gender = document.getElementById("gender");
const address = document.getElementById("address");
const storageType = document.getElementById("storageType");
const dataContainer = document.getElementById("data");

// Save data to storage
function saveData() {
  // Get form values
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    gender: gender.value,
    address: address.value,
  };
  const storage = storageType.value === "session" ? sessionStorage : localStorage;
  
  // Store data
  storage.setItem("formData", JSON.stringify(formData));
}

// Display saved data
function displayData() {
  const storage = storageType.value === "session" ? sessionStorage : localStorage;
  const formData = JSON.parse(storage.getItem("formData"));
  if (formData) {
    dataContainer.innerHTML = `
      <p>First Name: ${formData.firstName}</p>
      <p>Last Name: ${formData.lastName}</p>
      <p>Gender: ${formData.gender}</p>
      <p>Address: ${formData.address}</p>
    `;
  } else {
    dataContainer.innerHTML = "No data stored.";
  }
}

// Delete saved data
function deleteData() {
  const storage = storageType.value === "session" ? sessionStorage : localStorage;
  storage.removeItem("formData");
  dataContainer.innerHTML = "Data deleted.";
}

// Add event listeners
form.addEventListener("submit", (event) => {
  event.preventDefault();
  saveData();
});

