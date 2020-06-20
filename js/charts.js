var options = {
  scale: {
    ticks: {
      beginAtZero: true,
      stepSize: 1,
      max: 5,
      fontSize: 6
    },
    pointLabels: {
      fontSize: 10
    }
  }
};

var Chart1data = {
  labels: ['HTML', 'CSS', 'Word Press', 'JQuery', 'Vue.js', 'React.js'],
  datasets: [{
    label: 'Front-End',
    data: [5, 5, 3, 5, 4, 3],
    backgroundColor: [
      'rgba(255, 0, 0, 0.2)',
    ],
    borderColor: [
      'rgba(255, 0, 0, 1)',
      'rgba(255, 0, 0, 1)',
      'rgba(255, 0, 0, 1)',
      'rgba(255, 0, 0, 1)',
      'rgba(255, 0, 0, 1)',
      'rgba(255, 0, 0, 1)',
      'rgba(255, 0, 0, 1)',
    ],
    borderWidth: 1
  }]
};

var Chart2data = {
  labels: ['C言語', 'Ruby/Rails', 'PHP', 'Java', 'Python', 'VBA'],
  datasets: [{
    label: 'Back-End',
    data: [4, 4, 3, 3, 2, 5],
    backgroundColor: [
      'rgba(0, 125, 125, 0.2)',
    ],
    borderColor: [
      'rgba(0, 125, 125, 1)',
      'rgba(0, 125, 125, 1)',
      'rgba(0, 125, 125, 1)',
      'rgba(0, 125, 125, 1)',
      'rgba(0, 125, 125, 1)'
    ],
    borderWidth: 1
  }]
};

var Chart3data = {
  labels: ['AWS', 'Eclipse', 'Git/GitHub', 'Visual Stdio Code', 'Dreamweaver', 'Photoshop'],
  datasets: [{
    label: 'DevOps',
    data: [3, 2, 4, 1, 5, 3],
    backgroundColor: [
      'rgba(255, 0, 125, 0.2)',
    ],
    borderColor: [
      'rgba(255, 0, 125, 1)',
      'rgba(255, 0, 125, 1)',
      'rgba(255, 0, 125, 1)',
      'rgba(255, 0, 125, 1)',
      'rgba(255, 0, 125, 1)',
    ],
    borderWidth: 1
  }]
}

const createChart1 = () => {
  var ctx = document.getElementById('Chart1');
  var Chart1 = new Chart(ctx, {
    type: 'radar',
    data: Chart1data,
    options: options
  });
}

const createChartAlt1 = () => {
  var ctx = document.getElementById('ChartAlt1');
  var Chart1 = new Chart(ctx, {
    type: 'radar',
    data: Chart1data,
    options: options
  });
}

const createChart2 = () => {
  var ctx = document.getElementById('Chart2');
  var Chart2 = new Chart(ctx, {
    type: 'radar',
    data: Chart2data,
    options: options,
  });
  //Chart2.canvas.parentNode.style.height = vh;
  //Chart2.canvas.parentNode.style.width = vw;
}

const createChartAlt2 = () => {
  var ctx = document.getElementById('ChartAlt2');
  var Chart2 = new Chart(ctx, {
    type: 'radar',
    data: Chart2data,
    options: options,
  });
  //Chart2.canvas.parentNode.style.height = vh;
  //Chart2.canvas.parentNode.style.width = vw;
}

const createChart3 = () => {
  var ctx = document.getElementById('Chart3');
  var Chart3 = new Chart(ctx, {
    type: 'radar',
    data: Chart3data,
    options: options
  });
  //Chart3.canvas.parentNode.style.height = vh;
  //Chart3.canvas.parentNode.style.width = vw;
}

const createChartAlt3 = () => {
  var ctx = document.getElementById('ChartAlt3');
  var Chart3 = new Chart(ctx, {
    type: 'radar',
    data: Chart3data,
    options: options
  });
  //Chart3.canvas.parentNode.style.height = vh;
  //Chart3.canvas.parentNode.style.width = vw;
}

$(window).on('load', () => {
  createChart1();
  createChart2();
  createChart3();
  
  createChartAlt1();
  createChartAlt2();
  createChartAlt3();
});

const chartAlt = new Vue({
  el: '#skil',
  data: {
    cahrts: {
      chartAlt1: { id: "chartAlt1", data: Chart1data },
      chartAlt2: { id: "chartAlt2", data: Chart2data  },
      chartAlt3: { id: "chartAlt3", data: Chart3data },
    }, 
    nowhcart: { id: "ChartAlt1"},
  },
  methods: {
    selectCahrt(chartId) {
      $('#' + this.nowhcart.id ).addClass('d-none');
      this.nowhcart.id = chartId;
      $('#' + this.nowhcart.id ).removeClass('d-none');
    }
  }
})