var chart = AmCharts.makeChart('dashboard_amchart_3', {
    'type': 'serial',
    'addClassNames': true,
    'theme': 'light',
    'path': '../assets/global/plugins/amcharts/ammap/images/',
    'autoMargins': false,
    'marginLeft': 30,
    'marginRight': 8,
    'marginTop': 10,
    'marginBottom': 26,
    'balloon': {
        'adjustBorderColor': false,
        'horizontalPadding': 10,
        'verticalPadding': 8,
        'color': '#ffffff'
    },

    'dataProvider': [{
        'year': 2009,
        'income': 23.5,
        'expenses': 21.1
    }, {
        'year': 2010,
        'income': 26.2,
        'expenses': 30.5
    }, {
        'year': 2011,
        'income': 30.1,
        'expenses': 34.9
    }, {
        'year': 2012,
        'income': 29.5,
        'expenses': 31.1
    }, {
        'year': 2013,
        'income': 30.6,
        'expenses': 28.2,
    }, {
        'year': 2014,
        'income': 34.1,
        'expenses': 32.9,
        'dashLengthColumn': 5,
        'alpha': 0.2,
        'additional': '(projection)'
    }],
    'valueAxes': [{
        'axisAlpha': 0,
        'position': 'left'
    }],
    'startDuration': 1,
    'graphs': [{
        'alphaField': 'alpha',
        'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
        'fillAlphas': 1,
        'title': 'Income',
        'type': 'column',
        'valueField': 'income',
        'dashLengthField': 'dashLengthColumn'
    }, {
        'id': 'graph2',
        'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
        'bullet': 'round',
        'lineThickness': 3,
        'bulletSize': 7,
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'useLineColorForBulletBorder': true,
        'bulletBorderThickness': 3,
        'fillAlphas': 0,
        'lineAlpha': 1,
        'title': 'Expenses',
        'valueField': 'expenses'
    }],
    'categoryField': 'year',
    'categoryAxis': {
        'gridPosition': 'start',
        'axisAlpha': 0,
        'tickLength': 0
    },
    'export': {
        'enabled': true
    }
});

$('.easy-pie-chart .number.transactions').easyPieChart({
    animate: 1000,
    size: 75,
    lineWidth: 3,
    barColor: App.getBrandColor('yellow')
});

$('.easy-pie-chart .number.visits').easyPieChart({
    animate: 1000,
    size: 75,
    lineWidth: 3,
    barColor: App.getBrandColor('green')
});

$('.easy-pie-chart .number.bounce').easyPieChart({
    animate: 1000,
    size: 75,
    lineWidth: 3,
    barColor: App.getBrandColor('red')
});

$('.easy-pie-chart-reload').click(function() {
    $('.easy-pie-chart .number').each(function() {
        var newValue = Math.floor(100 * Math.random());
        $(this).data('easyPieChart').update(newValue);
        $('span', this).text(newValue);
    });
});

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
        var option = {
            tooltip: {
                trigger: 'item',

            },
            grid: {
                x: 1,
                y: 1,
                x2: 1,
                y2: 1
            },
            xAxis: [{
                type: 'category',
                data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                show:false
            }],
            yAxis: [{
                type: 'value',
                show:false
            }],
            series: [{
                type: 'line',
                data: [120, 132, 101, 134, 90, 230, 210]
            }]
        };
        var myChartVol = ec.init(document.getElementById('echarts_line'));
        myChartVol.setOption(option);
        var myChartVol2 = ec.init(document.getElementById('echarts_line2'));
        myChartVol2.setOption(option);
        var myChartVol3 = ec.init(document.getElementById('echarts_line3'));
        myChartVol3.setOption(option);


    }
);
