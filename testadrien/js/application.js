Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Prix moyen immobilier : Villes les moins chères'
  },
  subtitle: {
    text: 'Source: https://www.meilleursagents.com/prix-immobilier/'
  },
  xAxis: {
    categories: [
      'Saint-Etienne',
      'Limoges',
      'Mulhouse',
      'Brest',
      'Le Mans',
      'Perpignan',
      'Besançon',
      'Clermont-Ferrand',
      'Metz',
      'Reims'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rainfall (mm)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Prix m2 moyen appartement (€)',
    data: [1044,1397,1091,1827,1391,1454,1995,1896,1790,2255]

  }, {
    name: 'Prix m2 moyen maison (€)',
    data: [1587,1593,1637,1795,1730,1759,2095,2129,2034,2456]

  }, {
    name: 'Loyer 100 m2 moyen appartement (€)',
    data: [760,830,850,840,810,840,940,1000,970,980]

  }, {
    name: 'Prévisions (%)',
    data: [2,4,-3,4,-3,1,1,-6,6,4]

  }]
});