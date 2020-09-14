const url = "https://api.github.com/users/joz84/repos";

const groupByLanguage = (data) => {
  key = "language";
  const result = data.reduce((sum, current) => {
    if(!sum[current[key]]) {
      sum[current[key]] = 0;
    }
    sum[current[key]] += 1;
    return sum;
  },{});
  const solutions = Object.keys(result).map((key) => {
    return { name: key, y: result[key] }
  });
  return solutions
};

const sizeByDate = (data) => {
  return data.map( current => [Date.parse(current.created_at), current.size]).sort();
};

Highcharts.getJSON(url,
  function (data) {
    console.dir(data)
    const firstFormatedData = sizeByDate(data);
    const secondFormatedData = groupByLanguage(data);
    console.log(secondFormatedData)
    // var averages = [
    //     [1246406400000, 21.5],
    //     [1246492800000, 22.1],
    //     [1246579200000, 23],
    //     [1246665600000, 23.8],
    //     [1246752000000, 21.4],
    //     [1246838400000, 21.3],
    //     [1246924800000, 18.3],
    //     [1247011200000, 15.4],
    //     [1247097600000, 16.4],
    //     [1247184000000, 17.7],
    //     [1247270400000, 17.5],
    //     [1247356800000, 17.6],
    //     [1247443200000, 17.7],
    //     [1247529600000, 16.8],
    //     [1247616000000, 17.7],
    //     [1247702400000, 16.3],
    //     [1247788800000, 17.8],
    //     [1247875200000, 18.1],
    //     [1247961600000, 17.2],
    //     [1248048000000, 14.4],
    //     [1248134400000, 13.7],
    //     [1248220800000, 15.7],
    //     [1248307200000, 14.6],
    //     [1248393600000, 15.3],
    //     [1248480000000, 15.3],
    //     [1248566400000, 15.8],
    //     [1248652800000, 15.2],
    //     [1248739200000, 14.8],
    //     [1248825600000, 14.4],
    //     [1248912000000, 15],
    //     [1248998400000, 13.6]
    //   ];


    Highcharts.chart('graph1', {

      title: {
        text: 'July temperatures'
      },

      xAxis: {
        type: 'datetime',
        accessibility: {
          rangeDescription: 'Range: Jul 1st 2009 to Jul 31st 2009.'
        }
      },

      yAxis: {
        title: {
          text: null
        }
      },

      tooltip: {
        crosshairs: true,
        shared: true,
        valueSuffix: '°C'
      },

      series: [{
        name: 'Temperature',
        data: firstFormatedData,
        zIndex: 1,
        marker: {
          fillColor: 'white',
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[0]
        }
      }]
    });


    Highcharts.chart('graph2', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares in January, 2018'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: secondFormatedData
      }]
    });

  }
);





const graphBoxes = document.querySelectorAll(".graph-box");

graphBoxes.forEach((graphBoxe) => {
  const graph = graphBoxe.querySelector(".graph");
  graphBoxe.addEventListener("click", (event) => {
    graph.classList.toggle("d-none");
  })
});


