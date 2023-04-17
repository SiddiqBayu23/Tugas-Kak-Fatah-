import { getFormData, handleSubmit } from './form.js';
import { renderData } from './render.js';

// fungsi untuk menambah data ke storage
function addDataToStorage(data, storageType) {
  let storedData = getDataFromStorage(storageType);
  if (!storedData) {
    storedData = [];
  }
  storedData.push(data);
  localStorage.setItem(storageType, JSON.stringify(storedData));
  
  console.log('\ndata telah ditambahkan ke '+storageType);
}

function getDataFromStorage(storageType) {
  const storedData = localStorage.getItem(storageType);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
}

function clearData(storageType) {
  const confirmDelete = confirm('Apakah Anda yakin ingin menghapus semua data?');
  if (confirmDelete) {
    localStorage.removeItem(storageType);
    renderData(null);
    console.clear();
    console.log('\ndata telah dihapus dari ' + storageType + ' Storage');
  }
}

export { addDataToStorage, getDataFromStorage, clearData};
