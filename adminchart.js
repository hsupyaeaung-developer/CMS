// chart.js
const dates=['2021-08-25', '2021-08-26', '2021-08-27', '2021-08-28', '2021-08-29', '2021-08-30', '2021-08-31'];
const datapoints=[1,2,3,4,5,6,7];
const data = {
  labels:dates,
  datasets: [{
    label: 'Weekly Invoice Costs',
    data: datapoints,
    backgroundColor: [
      'rgba(255, 26, 104, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};

const config = {
  type: 'bar',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

function filterDate(){
  const dates2=[...dates];
  console.log(dates2)
  const startdate=document.getElementById('startdate');
  const enddate=document.getElementById('enddate');
  const indexstartdate=dates2.indexOf(startdate.value);
  const indexenddate=dates2.indexOf(enddate.value);
  console.log(indexstartdate);
  const filterDate=dates2.slice(indexstartdate,indexenddate+1);

  myChart.config.data.labels=filterDate;
  const datapoints2=[...datapoints];
  const filterDatapoints=datapoints2.slice(indexstartdate,indexenddate+1);
  myChart.config.data.datasets[0].data=filterDatapoints;
  myChart.update();
}
