//var rawDataURL = 'https://raw.githubusercontent.com/plotly/datasets/master/2016-weather-data-seattle.csv';
var xField = 'Month_Code';
var yField = 'Deaths';

var selectorOptions = {
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1m'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6m'
    }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1y'
    }, {
        step: 'all',
    }],
};

Plotly.d3.csv("US_Suicide_by_month_2011-2016.csv", function(err, rawData) {
    if(err) throw err;
   
    var data = prepData(rawData);
    var layout = {
        title: 'US Suicides with range slider and selectors',
        xaxis: {
            rangeselector: selectorOptions,
            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
    };

    Plotly.plot('slider', data, layout);
});

function prepData(rawData) {
    var x = [];
    var y = [];

    rawData.forEach(function(datum, i) {
        //var year = new Date(Date.parse(datum.Mon + " 1, " + datum.Year)).getUTCFullYear()
        //var month = new Date(Date.parse(datum.Mon + " 1, " + datum.Year)).getUTCMonth() + 1

        x.push(datum[xField]);
        y.push(datum[yField]);
    });

    console.log(x)
    console.log(y)

    return [{
        mode: 'lines',
        x: x,
        y: y
    }];
}