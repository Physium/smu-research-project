//volume chart
var chartData1 = [];
var chartData2 = [];
var chartData3 = [];
var chartData4 = [];

generateChartData2();

function generateChartData2() {
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 500);
    firstDate.setHours(0, 0, 0, 0);

    for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        var a1 = Math.round(Math.random() * (40 + i)) + 100 + i;
        var b1 = Math.round(Math.random() * (1000 + i)) + 500 + i * 2;

        var a2 = Math.round(Math.random() * (100 + i)) + 200 + i;
        var b2 = Math.round(Math.random() * (1000 + i)) + 600 + i * 2;

        var a3 = Math.round(Math.random() * (100 + i)) + 200;
        var b3 = Math.round(Math.random() * (1000 + i)) + 600 + i * 2;

        var a4 = Math.round(Math.random() * (100 + i)) + 200 + i;
        var b4 = Math.round(Math.random() * (100 + i)) + 600 + i;

        chartData1.push({
            'date': newDate,
            'value': a1,
            'volume': b1
        });
        chartData2.push({
            'date': newDate,
            'value': a2,
            'volume': b2
        });
        chartData3.push({
            'date': newDate,
            'value': a3,
            'volume': b3
        });
        chartData4.push({
            'date': newDate,
            'value': a4,
            'volume': b4
        });
    }
}

/*var chart = AmCharts.makeChart('chart_11', {
    'type': 'stock',
    'theme': 'none',
    'dataSets': [{
        'title': 'Product 1',
        'fieldMappings': [{
            'fromField': 'value',
            'toField': 'value'
        }, {
            'fromField': 'volume',
            'toField': 'volume'
        }],
        'dataProvider': chartData1,
        'categoryField': 'date'
    }, {
        'title': 'Product 2',
        'fieldMappings': [{
            'fromField': 'value',
            'toField': 'value'
        }, {
            'fromField': 'volume',
            'toField': 'volume'
        }],
        'dataProvider': chartData2,
        'categoryField': 'date'
    }, {
        'title': 'Product 3',
        'fieldMappings': [{
            'fromField': 'value',
            'toField': 'value'
        }, {
            'fromField': 'volume',
            'toField': 'volume'
        }],
        'dataProvider': chartData3,
        'categoryField': 'date'
    }, {
        'title': 'Product 4',
        'fieldMappings': [{
            'fromField': 'value',
            'toField': 'value'
        }, {
            'fromField': 'volume',
            'toField': 'volume'
        }],
        'dataProvider': chartData4,
        'categoryField': 'date'
    }],

    'panels': [{
        'showCategoryAxis': false,
        'title': 'Value',
        'percentHeight': 70,
        'stockGraphs': [{
            'id': 'g10',
            'valueField': 'value',
            'comparable': true,
            'compareField': 'value',
            'balloonText': '[[title]]:<b>[[value]]</b>',
            'compareGraphBalloonText': '[[title]]:<b>[[value]]</b>'
        }],
        'stockLegend': {
            'periodValueTextComparing': '[[percents.value.close]]%',
            'periodValueTextRegular': '[[value.close]]'
        }
    }, {
        'title': 'Volume',
        'percentHeight': 30,
        'stockGraphs': [{
            'valueField': 'volume',
            'type': 'column',
            'showBalloon': false,
            'fillAlphas': 1
        }],
        'stockLegend': {
            'periodValueTextRegular': '[[value.close]]'
        }
    }],

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
        'periods': [{
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
    },

    'dataSetSelector': {
        'position': 'left',
    }
});*/

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
        }, {
            'type': 'line',
            'id': 'g2',
            'title': 'Line graph',
            'valueField': 'open',
            'lineColor': '#00cc00',
            'lineThickness': 3,
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

jQuery(document).ready(function() {
    //Ladda.bind('.mt-ladda-btn', { timeout: 2000 });
    //$("#product_movement").hide();
    //$("#product_external").hide();
    var option4 = {
        title: {
            text: 'Decision Tree'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [{
            name: 'decision tree',
            type: 'tree',
            orient: 'vertical', // vertical horizontal
            rootLocation: { x: 'center', y: 'center' }, // 根节点位置  {x: 100, y: 'center'}
            nodePadding: 8,
            layerPadding: 200,
            symbol: 'rectangle',
            //hoverable: false,
            roam: true,
            symbolSize: [200, 70],
            itemStyle: {
                normal: {
                    color: '#4883b4',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b}',
                        textStyle: {
                            color: '#000',
                            fontSize: 20
                        }
                    },
                    lineStyle: {
                        color: '#ccc',
                        type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

                    }
                },
                emphasis: {
                    //color: 'cyan',
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{b}',
                        textStyle: {
                            color: '#000',
                            fontSize: 20
                        }
                    },
                    borderWidth: 0
                }
            },

            data: [{
                name: 'First Time Login?',
                value: 1,
                symbol: 'rectangle',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'inside',
                            formatter: '{b}',
                            textStyle: {
                                color: '#000',
                                fontSize: 20
                            }
                        }
                    }
                },
                children: [{
                    name: 'Views more than 3 products?',
                    value: 0.6,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '{b}',
                                textStyle: {
                                    color: '#000',
                                    fontSize: 15
                                }
                            }
                        }
                    },
                    children: [{
                        name: 'Visit lasts longer than 5 minutes?',
                        value: 4,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'inside',
                                    formatter: '{b}',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 10
                                    }
                                }
                            }
                        }
                    }, {
                        name: 'Already products in the basket?',
                        value: 4,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'inside',
                                    formatter: '{b}',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 10
                                    }
                                }
                            }
                        }
                    }]
                }, {
                    name: 'Visits in the evenings?',
                    value: 0.3,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: '{b}',
                                textStyle: {
                                    color: '#000',
                                    fontSize: 15
                                }
                            }
                        }
                    },
                    children: [{
                        name: 'Visit lasts longer than 5 minutes?',
                        value: 4,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'inside',
                                    formatter: '{b}',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 10
                                    }
                                }
                            }
                        }
                    }, {
                        name: 'Already products in the basket?',
                        value: 4,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    position: 'inside',
                                    formatter: '{b}',
                                    textStyle: {
                                        color: '#000',
                                        fontSize: 10
                                    }
                                }
                            }
                        }
                    }]
                }]
            }]

        }]
    };

    var option3 = {
        title: {
            text: 'External Events Factors',
            subtext: 'Event Timeline'
        },
        tooltip: {
            trigger: 'item',
            enterable: true
        },
        legend: {
            data: ['Positive Factors', 'Negative Factors']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: [{
            type: 'time',
            boundaryGap: [0.05, 0.1]
        }],
        series: [{
            'name': 'Positive Factors',
            'type': 'eventRiver',
            'weight': 500,
            'data': [{
                'name': 'Apple IPhone Release',
                'weight': 123,
                'evolution': [{
                    'time': '2014-05-01',
                    'value': 20,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-02',
                    'value': 20,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-03',
                    'value': 20,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-04',
                    'value': 20,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-05',
                    'value': 20,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }]
            }, {
                'name': 'Samsung Galaxy Release',
                'weight': 123,
                'evolution': [{
                    'time': '2014-05-02',
                    'value': 10,
                    'detail': {
                        'link': 'www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-03',
                    'value': 34,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-04',
                    'value': 40,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-05',
                    'value': 10,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }]
            }, {
                'name': 'Supreme LV Collab Launch',
                'weight': 123,
                'evolution': [{
                    'time': '2014-05-03',
                    'value': 24,
                    'detail': {
                        'link': 'www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-04',
                    'value': 34,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-05',
                    'value': 50,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-06',
                    'value': 30,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-07',
                    'value': 20,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }]
            }]
        }, {
            'name': 'Negative Factors',
            'type': 'eventRiver',
            'weight': 123,
            'data': [{
                'name': 'IPhone Mass Product Defacts',
                'weight': 123,
                'evolution': [{
                    'time': '2014-05-06',
                    'value': 14,
                    'detail': {
                        'link': 'www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-07',
                    'value': 34,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-08',
                    'value': 60,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-09',
                    'value': 40,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-10',
                    'value': 20,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }]
            }, {
                'name': 'US Elections',
                'weight': 123,
                'evolution': [{
                    'time': '2014-05-08',
                    'value': 4,
                    'detail': {
                        'link': 'www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-09',
                    'value': 14,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-10',
                    'value': 30,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-11',
                    'value': 20,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-12',
                    'value': 10,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }]
            }, {
                'name': 'Donald Trump Trade Restriction',
                'weight': 123,
                'evolution': [{
                    'time': '2014-05-11',
                    'value': 4,
                    'detail': {
                        'link': 'www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-12',
                    'value': 24,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-13',
                    'value': 40,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-14',
                    'value': 20,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-15',
                    'value': 15,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }, {
                    'time': '2014-05-16',
                    'value': 10,
                    'detail': {
                        'link': 'http://www.baidu.com',
                        'text': '百度指数',
                        //"img": '../asset/ico/favicon.png'
                    }
                }]
            }]
        }]
    };

    var option2 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Demand', 'Inventory']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataZoom: { show: true },
                dataView: { show: true },
                magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        dataZoom: {
            show: true,
            realtime: true,
            start: 20,
            end: 80
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: function() {
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push('2013-03-' + i);
                }
                return list;
            }()
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: 'Demand',
            type: 'line',
            data: function() {
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random() * 30));
                }
                return list;
            }()
        }, {
            name: 'Inventory',
            type: 'line',
            data: function() {
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random() * 10));
                }
                return list;
            }()
        }]
    };
    var option = {
        backgroundColor: '#1b1b1b',
        color: ['gold', 'aqua', 'lime'],
        title: {
            text: 'Product Movement',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['北京 Top10', '上海 Top10', '广州 Top10'],
            selectedMode: 'single',
            selected: {
                '上海 Top10': false,
                '广州 Top10': false
            },
            textStyle: {
                color: '#fff'
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        dataRange: {
            min: 0,
            max: 100,
            calculable: true,
            color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
            textStyle: {
                color: '#fff'
            }
        },
        series: [{
            name: '全国',
            type: 'map',
            roam: true,
            hoverable: false,
            mapType: 'china',
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100,149,237,1)',
                    borderWidth: 0.5,
                    areaStyle: {
                        color: '#1b1b1b'
                    }
                }
            },
            data: [],
            markLine: {
                smooth: true,
                symbol: ['none', 'circle'],
                symbolSize: 1,
                itemStyle: {
                    normal: {
                        color: '#fff',
                        borderWidth: 1,
                        borderColor: 'rgba(30,144,255,0.5)'
                    }
                },
                data: [
                    [{ name: '北京' }, { name: '包头' }],
                    [{ name: '北京' }, { name: '北海' }],
                    [{ name: '北京' }, { name: '广州' }],
                    [{ name: '北京' }, { name: '郑州' }],
                    [{ name: '北京' }, { name: '长春' }],
                    [{ name: '北京' }, { name: '长治' }],
                    [{ name: '北京' }, { name: '重庆' }],
                    [{ name: '北京' }, { name: '长沙' }],
                    [{ name: '北京' }, { name: '成都' }],
                    [{ name: '北京' }, { name: '常州' }],
                    [{ name: '北京' }, { name: '丹东' }],
                    [{ name: '北京' }, { name: '大连' }],
                    [{ name: '北京' }, { name: '东营' }],
                    [{ name: '北京' }, { name: '延安' }],
                    [{ name: '北京' }, { name: '福州' }],
                    [{ name: '北京' }, { name: '海口' }],
                    [{ name: '北京' }, { name: '呼和浩特' }],
                    [{ name: '北京' }, { name: '合肥' }],
                    [{ name: '北京' }, { name: '杭州' }],
                    [{ name: '北京' }, { name: '哈尔滨' }],
                    [{ name: '北京' }, { name: '舟山' }],
                    [{ name: '北京' }, { name: '银川' }],
                    [{ name: '北京' }, { name: '衢州' }],
                    [{ name: '北京' }, { name: '南昌' }],
                    [{ name: '北京' }, { name: '昆明' }],
                    [{ name: '北京' }, { name: '贵阳' }],
                    [{ name: '北京' }, { name: '兰州' }],
                    [{ name: '北京' }, { name: '拉萨' }],
                    [{ name: '北京' }, { name: '连云港' }],
                    [{ name: '北京' }, { name: '临沂' }],
                    [{ name: '北京' }, { name: '柳州' }],
                    [{ name: '北京' }, { name: '宁波' }],
                    [{ name: '北京' }, { name: '南京' }],
                    [{ name: '北京' }, { name: '南宁' }],
                    [{ name: '北京' }, { name: '南通' }],
                    [{ name: '北京' }, { name: '上海' }],
                    [{ name: '北京' }, { name: '沈阳' }],
                    [{ name: '北京' }, { name: '西安' }],
                    [{ name: '北京' }, { name: '汕头' }],
                    [{ name: '北京' }, { name: '深圳' }],
                    [{ name: '北京' }, { name: '青岛' }],
                    [{ name: '北京' }, { name: '济南' }],
                    [{ name: '北京' }, { name: '太原' }],
                    [{ name: '北京' }, { name: '乌鲁木齐' }],
                    [{ name: '北京' }, { name: '潍坊' }],
                    [{ name: '北京' }, { name: '威海' }],
                    [{ name: '北京' }, { name: '温州' }],
                    [{ name: '北京' }, { name: '武汉' }],
                    [{ name: '北京' }, { name: '无锡' }],
                    [{ name: '北京' }, { name: '厦门' }],
                    [{ name: '北京' }, { name: '西宁' }],
                    [{ name: '北京' }, { name: '徐州' }],
                    [{ name: '北京' }, { name: '烟台' }],
                    [{ name: '北京' }, { name: '盐城' }],
                    [{ name: '北京' }, { name: '珠海' }],
                    [{ name: '上海' }, { name: '包头' }],
                    [{ name: '上海' }, { name: '北海' }],
                    [{ name: '上海' }, { name: '广州' }],
                    [{ name: '上海' }, { name: '郑州' }],
                    [{ name: '上海' }, { name: '长春' }],
                    [{ name: '上海' }, { name: '重庆' }],
                    [{ name: '上海' }, { name: '长沙' }],
                    [{ name: '上海' }, { name: '成都' }],
                    [{ name: '上海' }, { name: '丹东' }],
                    [{ name: '上海' }, { name: '大连' }],
                    [{ name: '上海' }, { name: '福州' }],
                    [{ name: '上海' }, { name: '海口' }],
                    [{ name: '上海' }, { name: '呼和浩特' }],
                    [{ name: '上海' }, { name: '合肥' }],
                    [{ name: '上海' }, { name: '哈尔滨' }],
                    [{ name: '上海' }, { name: '舟山' }],
                    [{ name: '上海' }, { name: '银川' }],
                    [{ name: '上海' }, { name: '南昌' }],
                    [{ name: '上海' }, { name: '昆明' }],
                    [{ name: '上海' }, { name: '贵阳' }],
                    [{ name: '上海' }, { name: '兰州' }],
                    [{ name: '上海' }, { name: '拉萨' }],
                    [{ name: '上海' }, { name: '连云港' }],
                    [{ name: '上海' }, { name: '临沂' }],
                    [{ name: '上海' }, { name: '柳州' }],
                    [{ name: '上海' }, { name: '宁波' }],
                    [{ name: '上海' }, { name: '南宁' }],
                    [{ name: '上海' }, { name: '北京' }],
                    [{ name: '上海' }, { name: '沈阳' }],
                    [{ name: '上海' }, { name: '秦皇岛' }],
                    [{ name: '上海' }, { name: '西安' }],
                    [{ name: '上海' }, { name: '石家庄' }],
                    [{ name: '上海' }, { name: '汕头' }],
                    [{ name: '上海' }, { name: '深圳' }],
                    [{ name: '上海' }, { name: '青岛' }],
                    [{ name: '上海' }, { name: '济南' }],
                    [{ name: '上海' }, { name: '天津' }],
                    [{ name: '上海' }, { name: '太原' }],
                    [{ name: '上海' }, { name: '乌鲁木齐' }],
                    [{ name: '上海' }, { name: '潍坊' }],
                    [{ name: '上海' }, { name: '威海' }],
                    [{ name: '上海' }, { name: '温州' }],
                    [{ name: '上海' }, { name: '武汉' }],
                    [{ name: '上海' }, { name: '厦门' }],
                    [{ name: '上海' }, { name: '西宁' }],
                    [{ name: '上海' }, { name: '徐州' }],
                    [{ name: '上海' }, { name: '烟台' }],
                    [{ name: '上海' }, { name: '珠海' }],
                    [{ name: '广州' }, { name: '北海' }],
                    [{ name: '广州' }, { name: '郑州' }],
                    [{ name: '广州' }, { name: '长春' }],
                    [{ name: '广州' }, { name: '重庆' }],
                    [{ name: '广州' }, { name: '长沙' }],
                    [{ name: '广州' }, { name: '成都' }],
                    [{ name: '广州' }, { name: '常州' }],
                    [{ name: '广州' }, { name: '大连' }],
                    [{ name: '广州' }, { name: '福州' }],
                    [{ name: '广州' }, { name: '海口' }],
                    [{ name: '广州' }, { name: '呼和浩特' }],
                    [{ name: '广州' }, { name: '合肥' }],
                    [{ name: '广州' }, { name: '杭州' }],
                    [{ name: '广州' }, { name: '哈尔滨' }],
                    [{ name: '广州' }, { name: '舟山' }],
                    [{ name: '广州' }, { name: '银川' }],
                    [{ name: '广州' }, { name: '南昌' }],
                    [{ name: '广州' }, { name: '昆明' }],
                    [{ name: '广州' }, { name: '贵阳' }],
                    [{ name: '广州' }, { name: '兰州' }],
                    [{ name: '广州' }, { name: '拉萨' }],
                    [{ name: '广州' }, { name: '连云港' }],
                    [{ name: '广州' }, { name: '临沂' }],
                    [{ name: '广州' }, { name: '柳州' }],
                    [{ name: '广州' }, { name: '宁波' }],
                    [{ name: '广州' }, { name: '南京' }],
                    [{ name: '广州' }, { name: '南宁' }],
                    [{ name: '广州' }, { name: '南通' }],
                    [{ name: '广州' }, { name: '北京' }],
                    [{ name: '广州' }, { name: '上海' }],
                    [{ name: '广州' }, { name: '沈阳' }],
                    [{ name: '广州' }, { name: '西安' }],
                    [{ name: '广州' }, { name: '石家庄' }],
                    [{ name: '广州' }, { name: '汕头' }],
                    [{ name: '广州' }, { name: '青岛' }],
                    [{ name: '广州' }, { name: '济南' }],
                    [{ name: '广州' }, { name: '天津' }],
                    [{ name: '广州' }, { name: '太原' }],
                    [{ name: '广州' }, { name: '乌鲁木齐' }],
                    [{ name: '广州' }, { name: '温州' }],
                    [{ name: '广州' }, { name: '武汉' }],
                    [{ name: '广州' }, { name: '无锡' }],
                    [{ name: '广州' }, { name: '厦门' }],
                    [{ name: '广州' }, { name: '西宁' }],
                    [{ name: '广州' }, { name: '徐州' }],
                    [{ name: '广州' }, { name: '烟台' }],
                    [{ name: '广州' }, { name: '盐城' }]
                ],
            },
            geoCoord: {
                '上海': [121.4648, 31.2891],
                '东莞': [113.8953, 22.901],
                '东营': [118.7073, 37.5513],
                '中山': [113.4229, 22.478],
                '临汾': [111.4783, 36.1615],
                '临沂': [118.3118, 35.2936],
                '丹东': [124.541, 40.4242],
                '丽水': [119.5642, 28.1854],
                '乌鲁木齐': [87.9236, 43.5883],
                '佛山': [112.8955, 23.1097],
                '保定': [115.0488, 39.0948],
                '兰州': [103.5901, 36.3043],
                '包头': [110.3467, 41.4899],
                '北京': [116.4551, 40.2539],
                '北海': [109.314, 21.6211],
                '南京': [118.8062, 31.9208],
                '南宁': [108.479, 23.1152],
                '南昌': [116.0046, 28.6633],
                '南通': [121.1023, 32.1625],
                '厦门': [118.1689, 24.6478],
                '台州': [121.1353, 28.6688],
                '合肥': [117.29, 32.0581],
                '呼和浩特': [111.4124, 40.4901],
                '咸阳': [108.4131, 34.8706],
                '哈尔滨': [127.9688, 45.368],
                '唐山': [118.4766, 39.6826],
                '嘉兴': [120.9155, 30.6354],
                '大同': [113.7854, 39.8035],
                '大连': [122.2229, 39.4409],
                '天津': [117.4219, 39.4189],
                '太原': [112.3352, 37.9413],
                '威海': [121.9482, 37.1393],
                '宁波': [121.5967, 29.6466],
                '宝鸡': [107.1826, 34.3433],
                '宿迁': [118.5535, 33.7775],
                '常州': [119.4543, 31.5582],
                '广州': [113.5107, 23.2196],
                '廊坊': [116.521, 39.0509],
                '延安': [109.1052, 36.4252],
                '张家口': [115.1477, 40.8527],
                '徐州': [117.5208, 34.3268],
                '德州': [116.6858, 37.2107],
                '惠州': [114.6204, 23.1647],
                '成都': [103.9526, 30.7617],
                '扬州': [119.4653, 32.8162],
                '承德': [117.5757, 41.4075],
                '拉萨': [91.1865, 30.1465],
                '无锡': [120.3442, 31.5527],
                '日照': [119.2786, 35.5023],
                '昆明': [102.9199, 25.4663],
                '杭州': [119.5313, 29.8773],
                '枣庄': [117.323, 34.8926],
                '柳州': [109.3799, 24.9774],
                '株洲': [113.5327, 27.0319],
                '武汉': [114.3896, 30.6628],
                '汕头': [117.1692, 23.3405],
                '江门': [112.6318, 22.1484],
                '沈阳': [123.1238, 42.1216],
                '沧州': [116.8286, 38.2104],
                '河源': [114.917, 23.9722],
                '泉州': [118.3228, 25.1147],
                '泰安': [117.0264, 36.0516],
                '泰州': [120.0586, 32.5525],
                '济南': [117.1582, 36.8701],
                '济宁': [116.8286, 35.3375],
                '海口': [110.3893, 19.8516],
                '淄博': [118.0371, 36.6064],
                '淮安': [118.927, 33.4039],
                '深圳': [114.5435, 22.5439],
                '清远': [112.9175, 24.3292],
                '温州': [120.498, 27.8119],
                '渭南': [109.7864, 35.0299],
                '湖州': [119.8608, 30.7782],
                '湘潭': [112.5439, 27.7075],
                '滨州': [117.8174, 37.4963],
                '潍坊': [119.0918, 36.524],
                '烟台': [120.7397, 37.5128],
                '玉溪': [101.9312, 23.8898],
                '珠海': [113.7305, 22.1155],
                '盐城': [120.2234, 33.5577],
                '盘锦': [121.9482, 41.0449],
                '石家庄': [114.4995, 38.1006],
                '福州': [119.4543, 25.9222],
                '秦皇岛': [119.2126, 40.0232],
                '绍兴': [120.564, 29.7565],
                '聊城': [115.9167, 36.4032],
                '肇庆': [112.1265, 23.5822],
                '舟山': [122.2559, 30.2234],
                '苏州': [120.6519, 31.3989],
                '莱芜': [117.6526, 36.2714],
                '菏泽': [115.6201, 35.2057],
                '营口': [122.4316, 40.4297],
                '葫芦岛': [120.1575, 40.578],
                '衡水': [115.8838, 37.7161],
                '衢州': [118.6853, 28.8666],
                '西宁': [101.4038, 36.8207],
                '西安': [109.1162, 34.2004],
                '贵阳': [106.6992, 26.7682],
                '连云港': [119.1248, 34.552],
                '邢台': [114.8071, 37.2821],
                '邯郸': [114.4775, 36.535],
                '郑州': [113.4668, 34.6234],
                '鄂尔多斯': [108.9734, 39.2487],
                '重庆': [107.7539, 30.1904],
                '金华': [120.0037, 29.1028],
                '铜川': [109.0393, 35.1947],
                '银川': [106.3586, 38.1775],
                '镇江': [119.4763, 31.9702],
                '长春': [125.8154, 44.2584],
                '长沙': [113.0823, 28.2568],
                '长治': [112.8625, 36.4746],
                '阳泉': [113.4778, 38.0951],
                '青岛': [120.4651, 36.3373],
                '韶关': [113.7964, 24.7028]
            }
        }, {
            name: '北京 Top10',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: [
                    [{ name: '北京' }, { name: '上海', value: 95 }],
                    [{ name: '北京' }, { name: '广州', value: 90 }],
                    [{ name: '北京' }, { name: '大连', value: 80 }],
                    [{ name: '北京' }, { name: '南宁', value: 70 }],
                    [{ name: '北京' }, { name: '南昌', value: 60 }],
                    [{ name: '北京' }, { name: '拉萨', value: 50 }],
                    [{ name: '北京' }, { name: '长春', value: 40 }],
                    [{ name: '北京' }, { name: '包头', value: 30 }],
                    [{ name: '北京' }, { name: '重庆', value: 20 }],
                    [{ name: '北京' }, { name: '常州', value: 10 }]
                ]
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function(v) {
                    return 10 + v / 10
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: { show: false }
                    },
                    emphasis: {
                        label: { position: 'top' }
                    }
                },
                data: [
                    { name: '上海', value: 95 },
                    { name: '广州', value: 90 },
                    { name: '大连', value: 80 },
                    { name: '南宁', value: 70 },
                    { name: '南昌', value: 60 },
                    { name: '拉萨', value: 50 },
                    { name: '长春', value: 40 },
                    { name: '包头', value: 30 },
                    { name: '重庆', value: 20 },
                    { name: '常州', value: 10 }
                ]
            }
        }, {
            name: '上海 Top10',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: [
                    [{ name: '上海' }, { name: '包头', value: 95 }],
                    [{ name: '上海' }, { name: '昆明', value: 90 }],
                    [{ name: '上海' }, { name: '广州', value: 80 }],
                    [{ name: '上海' }, { name: '郑州', value: 70 }],
                    [{ name: '上海' }, { name: '长春', value: 60 }],
                    [{ name: '上海' }, { name: '重庆', value: 50 }],
                    [{ name: '上海' }, { name: '长沙', value: 40 }],
                    [{ name: '上海' }, { name: '北京', value: 30 }],
                    [{ name: '上海' }, { name: '丹东', value: 20 }],
                    [{ name: '上海' }, { name: '大连', value: 10 }]
                ]
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function(v) {
                    return 10 + v / 10
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: { show: false }
                    },
                    emphasis: {
                        label: { position: 'top' }
                    }
                },
                data: [
                    { name: '包头', value: 95 },
                    { name: '昆明', value: 90 },
                    { name: '广州', value: 80 },
                    { name: '郑州', value: 70 },
                    { name: '长春', value: 60 },
                    { name: '重庆', value: 50 },
                    { name: '长沙', value: 40 },
                    { name: '北京', value: 30 },
                    { name: '丹东', value: 20 },
                    { name: '大连', value: 10 }
                ]
            }
        }, {
            name: '广州 Top10',
            type: 'map',
            mapType: 'china',
            data: [],
            markLine: {
                smooth: true,
                effect: {
                    show: true,
                    scaleSize: 1,
                    period: 30,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        }
                    }
                },
                data: [
                    [{ name: '广州' }, { name: '福州', value: 95 }],
                    [{ name: '广州' }, { name: '太原', value: 90 }],
                    [{ name: '广州' }, { name: '长春', value: 80 }],
                    [{ name: '广州' }, { name: '重庆', value: 70 }],
                    [{ name: '广州' }, { name: '西安', value: 60 }],
                    [{ name: '广州' }, { name: '成都', value: 50 }],
                    [{ name: '广州' }, { name: '常州', value: 40 }],
                    [{ name: '广州' }, { name: '北京', value: 30 }],
                    [{ name: '广州' }, { name: '北海', value: 20 }],
                    [{ name: '广州' }, { name: '海口', value: 10 }]
                ]
            },
            markPoint: {
                symbol: 'emptyCircle',
                symbolSize: function(v) {
                    return 10 + v / 10
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                itemStyle: {
                    normal: {
                        label: { show: false }
                    },
                    emphasis: {
                        label: { position: 'top' }
                    }
                },
                data: [
                    { name: '福州', value: 95 },
                    { name: '太原', value: 90 },
                    { name: '长春', value: 80 },
                    { name: '重庆', value: 70 },
                    { name: '西安', value: 60 },
                    { name: '成都', value: 50 },
                    { name: '常州', value: 40 },
                    { name: '北京', value: 30 },
                    { name: '北海', value: 20 },
                    { name: '海口', value: 10 }
                ]
            }
        }]
    };
    // ECHARTS
    require.config({
        paths: {
            echarts: '../assets/global/plugins/echarts/'
        }
    });

    // DEMOS
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/chord',
            'echarts/chart/eventRiver',
            'echarts/chart/force',
            'echarts/chart/funnel',
            'echarts/chart/gauge',
            'echarts/chart/heatmap',
            'echarts/chart/k',
            'echarts/chart/line',
            'echarts/chart/map',
            'echarts/chart/pie',
            'echarts/chart/radar',
            'echarts/chart/scatter',
            'echarts/chart/tree',
            'echarts/chart/treemap',
            'echarts/chart/venn',
            'echarts/chart/wordCloud'
        ],
        function(ec) {
            //--- BAR ---
            Ladda.bind('.mt-ladda-btn', {
                callback: function(instance) {
                    var progress = 0;
                    var interval = setInterval(function() {
                        progress = Math.min(progress + Math.random() * 0.1, 1);
                        instance.setProgress(progress);

                        if (progress === 1) {
                            $('#product_movement').show();
                            $('#product_external').show();
                            var myChart = ec.init(document.getElementById('echarts_bar'));
                            myChart.setOption(option);

                            var myChartExternal = ec.init(document.getElementById('echarts_bar3'));
                            myChartExternal.setOption(option3)
                            instance.stop();
                            clearInterval(interval);
                            $('.mt-ladda-btn').hide();
                        }
                    }, 200);
                }
            });
            if (document.getElementById('echarts_bar4') != null) {
                var myChartTree = ec.init(document.getElementById('echarts_bar4'));
                myChartTree.setOption(option4);
            }

            var myChartVol = ec.init(document.getElementById('echarts_bar2'));
            myChartVol.setOption(option2);


        }
    );
});
