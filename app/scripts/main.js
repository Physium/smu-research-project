console.log('\'Allo \'Allo!');



// svg path for target icon
var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';
// svg path for plane icon
var planeSVG = 'M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z';

//explore event listeners
var map = AmCharts.makeChart('travelchart', {
    'type': 'map',
    'theme': 'light',
    'colorSteps': 10,
    'dataProvider': {
        'map': 'worldLow',
        'zoomLevel': 3.5,
        'zoomLongitude': -20.1341,
        'zoomLatitude': 49.1712,


        'lines': [{
            'latitudes': [51.5002, 50.4422],
            'longitudes': [-0.1262, 30.5367]
        }, {
            'latitudes': [51.5002, 46.9480],
            'longitudes': [-0.1262, 7.4481]
        }, {
            'latitudes': [51.5002, 59.3328],
            'longitudes': [-0.1262, 18.0645]
        }, {
            'latitudes': [51.5002, 40.4167],
            'longitudes': [-0.1262, -3.7033]
        }, {
            'latitudes': [51.5002, 46.0514],
            'longitudes': [-0.1262, 14.5060]
        }, {
            'latitudes': [51.5002, 48.2116],
            'longitudes': [-0.1262, 17.1547]
        }, {
            'latitudes': [51.5002, 44.8048],
            'longitudes': [-0.1262, 20.4781]
        }, {
            'latitudes': [51.5002, 55.7558],
            'longitudes': [-0.1262, 37.6176]
        }, {
            'latitudes': [51.5002, 38.7072],
            'longitudes': [-0.1262, -9.1355]
        }, {
            'latitudes': [51.5002, 54.6896],
            'longitudes': [-0.1262, 25.2799]
        }, {
            'latitudes': [51.5002, 64.1353],
            'longitudes': [-0.1262, -21.8952]
        }, {
            'latitudes': [51.5002, 40.4300],
            'longitudes': [-0.1262, -74.0000]
        }],
        'images': [{
            'svgPath': targetSVG,
            'title': 'London',
            'latitude': 51.5002,
            'longitude': -0.1262,
            'scale': 1
        }, {
            'svgPath': targetSVG,
            'title': 'Brussels',
            'latitude': 50.8371,
            'longitude': 4.3676,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Prague',
            'latitude': 50.0878,
            'longitude': 14.4205,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Athens',
            'latitude': 37.9792,
            'longitude': 23.7166,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Reykjavik',
            'latitude': 64.1353,
            'longitude': -21.8952,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Dublin',
            'latitude': 53.3441,
            'longitude': -6.2675,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Oslo',
            'latitude': 59.9138,
            'longitude': 10.7387,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Lisbon',
            'latitude': 38.7072,
            'longitude': -9.1355,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Moscow',
            'latitude': 55.7558,
            'longitude': 37.6176,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Belgrade',
            'latitude': 44.8048,
            'longitude': 20.4781,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Bratislava',
            'latitude': 48.2116,
            'longitude': 17.1547,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Ljubljana',
            'latitude': 46.0514,
            'longitude': 14.5060,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Madrid',
            'latitude': 40.4167,
            'longitude': -3.7033,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Stockholm',
            'latitude': 59.3328,
            'longitude': 18.0645,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Bern',
            'latitude': 46.9480,
            'longitude': 7.4481,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Kiev',
            'latitude': 50.4422,
            'longitude': 30.5367,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'Paris',
            'latitude': 48.8567,
            'longitude': 2.3510,
            'scale': 0.5
        }, {
            'svgPath': targetSVG,
            'title': 'New York',
            'latitude': 40.43,
            'longitude': -74,
            'scale': 0.5
        }],
        'areas': [{
            'id': 'London',
            'value': 4447100
        }]
    },

    'areasSettings': {
        //"unlistedAreasColor": "#FFCC00",
        //"unlistedAreasAlpha": 0.9
        'ballonText': 'test'
    },

    'imagesSettings': {
        'color': '#CC0000',
        'rollOverColor': '#CC0000',
        'selectedColor': '#000000'
    },

    'linesSettings': {
        'arc': -0.7, // this makes lines curved. Use value from -1 to 1
        'arrow': 'middle',
        'color': '#CC0000',
        'alpha': 0.4,
        'arrowAlpha': 1,
        'arrowSize': 4
    },
    'zoomControl': {
        'gridHeight': 100,
        'draggerAlpha': 1,
        'gridAlpha': 0.2
    },

    'backgroundZoomsToTop': true,
    'linesAboveImages': true,
    'valueLegend': {
        'right': 10,
        'minValue': 'little',
        'maxValue': 'a lot!'
    },

    'export': {
        'enabled': true
    },
    'listeners': [{
        'event': 'init',
        'method': updateHeatmap
    }]

});

function updateHeatmap(event) {
    var map = event.chart;
    if (map.dataGenerated)
        return;
    if (map.dataProvider.areas.length === 0) {
        setTimeout(updateHeatmap, 100);
        return;
    }
    for (var i = 0; i < map.dataProvider.areas.length; i++) {
        map.dataProvider.areas[i].value = Math.round(Math.random() * 10000);
    }
    map.dataGenerated = true;
    map.validateNow();
}

//This is candlestick chart
var chartData = [];

function generateChartData() {
    var firstDate = new Date();
    firstDate.setHours(0, 0, 0, 0);
    firstDate.setDate(firstDate.getDate() - 2000);

    for (var i = 0; i < 2000; i++) {
        var newDate = new Date(firstDate);

        newDate.setDate(newDate.getDate() + i);

        var open = Math.round(Math.random() * (30) + 100);
        var close = open + Math.round(Math.random() * (15) - Math.random() * 10);

        var low;
        if (open < close) {
            low = open - Math.round(Math.random() * 5);
        } else {
            low = close - Math.round(Math.random() * 5);
        }

        var high;
        if (open < close) {
            high = close + Math.round(Math.random() * 5);
        } else {
            high = open + Math.round(Math.random() * 5);
        }

        var volume = Math.round(Math.random() * (1000 + i)) + 100 + i;


        chartData[i] = ({
            'date': newDate,
            'open': open,
            'close': close,
            'high': high,
            'low': low,
            'volume': volume
        });
    }
}

generateChartData();

var chart2 = AmCharts.makeChart('chart_12', {
    'type': 'stock',
    'theme': 'none',
    'dataSets': [{
        'fieldMappings': [{
            'fromField': 'open',
            'toField': 'open'
        }, {
            'fromField': 'close',
            'toField': 'close'
        }, {
            'fromField': 'high',
            'toField': 'high'
        }, {
            'fromField': 'low',
            'toField': 'low'
        }, {
            'fromField': 'volume',
            'toField': 'volume'
        }, {
            'fromField': 'value',
            'toField': 'value'
        }],
        'color': '#7f8da9',
        'dataProvider': chartData,
        'categoryField': 'date'
    }],
    'balloon': {
        'horizontalPadding': 13
    },
    'panels': [{
        'title': 'Value',
        'stockGraphs': [{
            'id': 'g1',
            'type': 'candlestick',
            'openField': 'open',
            'closeField': 'close',
            'highField': 'high',
            'lowField': 'low',
            'valueField': 'close',
            'lineColor': '#7f8da9',
            'fillColors': '#7f8da9',
            'negativeLineColor': '#db4c3c',
            'negativeFillColors': '#db4c3c',
            'fillAlphas': 1,
            'balloonText': 'open:<b>[[open]]</b><br>close:<b>[[close]]</b><br>low:<b>[[low]]</b><br>high:<b>[[high]]</b>',
            'useDataSetColors': false
        }]
    }],
    'scrollBarSettings': {
        'graphType': 'line',
        'usePeriod': 'WW'
    },
    'panelsSettings': {
        'panEventsEnabled': true
    },
    'cursorSettings': {
        'valueBalloonsEnabled': true,
        'valueLineBalloonEnabled': true,
        'valueLineEnabled': true
    },
    'periodSelector': {
        'position': 'bottom',
        'periods': [{
            'period': 'DD',
            'count': 10,
            'label': '10 days'
        }, {
            'period': 'MM',
            'selected': true,
            'count': 1,
            'label': '1 month'
        }, {
            'period': 'YYYY',
            'count': 1,
            'label': '1 year'
        }, {
            'period': 'YTD',
            'label': 'YTD'
        }, {
            'period': 'MAX',
            'label': 'MAX'
        }]
    }
});

function addPanel() {
    var chart = AmCharts.charts[1];
    if (chart.panels.length == 1) {
        var newPanel = new AmCharts.StockPanel();
        newPanel.allowTurningOff = true;
        newPanel.title = 'Volume';
        newPanel.showCategoryAxis = false;

        var graph = new AmCharts.StockGraph();
        graph.valueField = 'volume';
        graph.fillAlphas = 0.15;
        newPanel.addStockGraph(graph);

        var legend = new AmCharts.StockLegend();
        legend.markerType = 'none';
        legend.markerSize = 0;
        newPanel.stockLegend = legend;

        chart.addPanelAt(newPanel, 1);
        chart.validateNow();
    }
}

function removePanel() {
    var chart = AmCharts.charts[1];
    if (chart.panels.length > 1) {
        chart.removePanel(chart.panels[1]);
        chart.validateNow();
    }
}

//volume chart
var chartData1 = [];
var chartData2 = [];
var chartData3 = [];
var chartData4 = [];

generateChartData2();

function generateChartData2() {
  var firstDate = new Date();
  firstDate.setDate( firstDate.getDate() - 500 );
  firstDate.setHours( 0, 0, 0, 0 );

  for ( var i = 0; i < 500; i++ ) {
    var newDate = new Date( firstDate );
    newDate.setDate( newDate.getDate() + i );

    var a1 = Math.round( Math.random() * ( 40 + i ) ) + 100 + i;
    var b1 = Math.round( Math.random() * ( 1000 + i ) ) + 500 + i * 2;

    var a2 = Math.round( Math.random() * ( 100 + i ) ) + 200 + i;
    var b2 = Math.round( Math.random() * ( 1000 + i ) ) + 600 + i * 2;

    var a3 = Math.round( Math.random() * ( 100 + i ) ) + 200;
    var b3 = Math.round( Math.random() * ( 1000 + i ) ) + 600 + i * 2;

    var a4 = Math.round( Math.random() * ( 100 + i ) ) + 200 + i;
    var b4 = Math.round( Math.random() * ( 100 + i ) ) + 600 + i;

    chartData1.push( {
      'date': newDate,
      'value': a1,
      'volume': b1
    } );
    chartData2.push( {
      'date': newDate,
      'value': a2,
      'volume': b2
    } );
    chartData3.push( {
      'date': newDate,
      'value': a3,
      'volume': b3
    } );
    chartData4.push( {
      'date': newDate,
      'value': a4,
      'volume': b4
    } );
  }
}

var chart = AmCharts.makeChart( 'chart_11', {
  'type': 'stock',
  'theme': 'none',
  'dataSets': [ {
      'title': 'Product 1',
      'fieldMappings': [ {
        'fromField': 'value',
        'toField': 'value'
      }, {
        'fromField': 'volume',
        'toField': 'volume'
      } ],
      'dataProvider': chartData1,
      'categoryField': 'date'
    }, {
      'title': 'Product 2',
      'fieldMappings': [ {
        'fromField': 'value',
        'toField': 'value'
      }, {
        'fromField': 'volume',
        'toField': 'volume'
      } ],
      'dataProvider': chartData2,
      'categoryField': 'date'
    }, {
      'title': 'Product 3',
      'fieldMappings': [ {
        'fromField': 'value',
        'toField': 'value'
      }, {
        'fromField': 'volume',
        'toField': 'volume'
      } ],
      'dataProvider': chartData3,
      'categoryField': 'date'
    }, {
      'title': 'Product 4',
      'fieldMappings': [ {
        'fromField': 'value',
        'toField': 'value'
      }, {
        'fromField': 'volume',
        'toField': 'volume'
      } ],
      'dataProvider': chartData4,
      'categoryField': 'date'
    }
  ],

  'panels': [ {
    'showCategoryAxis': false,
    'title': 'Value',
    'percentHeight': 70,
    'stockGraphs': [ {
      'id': 'g10',
      'valueField': 'value',
      'comparable': true,
      'compareField': 'value',
      'balloonText': '[[title]]:<b>[[value]]</b>',
      'compareGraphBalloonText': '[[title]]:<b>[[value]]</b>'
    } ],
    'stockLegend': {
      'periodValueTextComparing': '[[percents.value.close]]%',
      'periodValueTextRegular': '[[value.close]]'
    }
  }, {
    'title': 'Volume',
    'percentHeight': 30,
    'stockGraphs': [ {
      'valueField': 'volume',
      'type': 'column',
      'showBalloon': false,
      'fillAlphas': 1
    } ],
    'stockLegend': {
      'periodValueTextRegular': '[[value.close]]'
    }
  } ],

  'chartScrollbarSettings': {
    'graph': 'g10'
  },

  'chartCursorSettings': {
    'valueBalloonsEnabled': true,
    'fullWidth': true,
    'cursorAlpha': 0.1,
    'valueLineBalloonEnabled': true,
    'valueLineEnabled': true,
    'valueLineAlpha': 0.5
  },

  'periodSelector': {
    'position': 'left',
    'periods': [ {
      'period': 'MM',
      'selected': true,
      'count': 1,
      'label': '1 month'
    }, {
      'period': 'YYYY',
      'count': 1,
      'label': '1 year'
    }, {
      'period': 'YTD',
      'label': 'YTD'
    }, {
      'period': 'MAX',
      'label': 'MAX'
    } ]
  },

  'dataSetSelector': {
    'position': 'right',
  }
} );
