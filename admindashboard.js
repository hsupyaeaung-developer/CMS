// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// BAR CHART

var barChartOptions = {
  series: [
    {
      name: 'Registered Eaten',
      data: [1, 2, 4, 5, 15],
     
    },
    {
      name: 'Registered Not Eaten',
      data: [20, 29, 37, 36, 44],
      
    },
    {
      name: 'UnRegistered Eaten',
      data: [10, 19, 17, 36, 44]
    }
  ],
  yaxis: [
    {
      seriesName: 'TEAM A',
     
    },
    {
      seriesName: 'TEAM B',
     
    },
    {
      seriesName: 'TEAM C',
    
    }
  ],
  chart: {
    type: "bar",
    background: "transparent",
    height: 350,
    toolbar: {
      show: false,
    },
  },
 
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#000",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  animation: {
    enabled: true,
    delay: 500,
  },
  xaxis: {
    categories: ["Mon","Tue","Wed","Thur","Fri"],
    title: {
      style: {
        color: "#000",
      },
    },
    axisBorder: {
      show: true,
      color: "#000",
    },
    axisTicks: {
      show: true,
      color: "#000",
    },
    labels: {
      style: {
        colors: "#000",
      },
    },
  },
  yaxis: {
    title: {
      text: "Count",
      style: {
        color:  "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#000",
      show: true,
    },
    labels: {
      style: {
        colors: "#000",
      },
    },
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


var donutChartOptions = {
  series: [31, 40, 28],
  chart: {
    type: "donut", // change type to "donut"
    background: "",
    height: 350,
  },
  labels: ["Registered E", "Registered N", "Unregistered E"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    labels: {
      colors: "#000",
    },
    show: true,
    position: "top",
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  animation: {
    enabled: true,
    delay: 500,
  },
};

var donutChart = new ApexCharts(document.querySelector("#donut-chart"), donutChartOptions);
donutChart.render();

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

// config 
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

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);
function filterDate(){
  const dates2=[...dates];
  console.log(dates2)
  const startdate=document.getElementById('startdate');
  const enddate=document.getElementById('enddate');
  //get the index number in array
  const indexstartdate=dates2.indexOf(startdate.value);
  const indexenddate=dates2.indexOf(enddate.value);
  console.log(indexstartdate);
  //slice array (pie) only showing the selected section / slice
  const filterDate=dates2.slice(indexstartdate,indexenddate+1);

  //replace the labels in the chart
  myChart.config.data.labels=filterDate;
 

  //datapoints
  const datapoints2=[...datapoints];
  const filterDatapoints=datapoints2.slice(indexstartdate,indexenddate+1);
  myChart.config.data.datasets[0].data=filterDatapoints;
  myChart.update();
}
// Instantly assign Chart.js version
const chartVersion = document.getElementById('chartVersion');
chartVersion.innerText = Chart.version;

