function renderData(data) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = '';
    if (data) {
      const dataList = document.createElement('ul');
      data.forEach(function(item) {
        const dataListItem = document.createElement('li');
        dataListItem.classList.add('data-item');
        const dataText = document.createTextNode(`${item.firstName}, ${item.lastName}, ${item.gender}, ${item.address}`);
        dataListItem.appendChild(dataText);
        dataList.appendChild(dataListItem);
      });
      dataContainer.appendChild(dataList);
    } else {
      const noDataText = document.createTextNode('Belum ada data.');
      dataContainer.appendChild(noDataText);
    }
  }
  
  export { renderData };
  