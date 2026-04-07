async function loadCSV() {
 const data = await fetch("data.csv");
 const resCSV = await data.text();
 const dataCSV = resCSV.trim().split(/\r\n|\n/).map(line => line.split(','));
 const htmlData = dataCSV.map(data => `<tr><th>${data[0]}</th><td>${data[1]}</td><td>${data[2]}</td><td>${data[3]}</td><td>${data[4]}</td></tr>`).join('');
 document.getElementById('tableCSV').insertAdjacentHTML('beforeend',htmlData);
}
loadCSV();