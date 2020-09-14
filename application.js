

Highcharts.chart("container", {
    chart: {
    type: "column"
    },
    title: {
    text: "Prix du m² en France par ville"
    },
    subtitle: {
    text:
        'Source: '
    },
    xAxis: {
    type: "category",
    labels: {
        rotation: -45,
        style: {
        fontSize: "13px",
        fontFamily: "Verdana, sans-serif"
        }
    }
    },
    yAxis: {
    min: 0,
    title: {
        text: "Prix en euros"
    }
    },
    legend: {
    enabled: false
    },
    tooltip: {
    pointFormat: "Population in 2017: <b>{point.y:.1f} millions</b>"
    },
    series: [
    {
        name: "Population",
        data: [
        ["Saint-Etienne", 1296],
        ["Limoges", 1425],
        ["Mulhouse", 1551],
        ["Brest", 1578],
        ["Le Mans", 1599],
        ["Perpignan", 1700],
        ["Besançon", 1907],
        ["Clermont-Ferrand", 1965],
        ["Metz", 2016],
        ["Reims", 2163]
        ],
        dataLabels: {
        enabled: true,
        rotation: -90,
        color: "#FFFFFF",
        align: "right",
        format: "{point.y:.1f}", // one decimal
        y: 10, // 10 pixels down from the top
        style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif"
        }
        }
    }
    ]
})