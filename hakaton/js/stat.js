function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Сезоны', 'Выручка'],
        ['Весна',   600],
        ['Лето',    560],
        ['Осень',   620],
        ['Зима',    640]
    ]);

    var options = {
        title: 'Сезонность к  выручке',
        hAxis: {title: 'Сезоны',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };

    var route = google.visualization.arrayToDataTable([
        ['Время', 'Выручка'],
        ['08:00',   1200],
        ['10:00',    960],
        ['12:00',    620],
        ['16:00',    840],
        ['18:00',    1240],
        ['22:00',    440],
    ]);

    var routeOptions = {
        title: 'Средняя загрузка за рейс по времени',
        hAxis: {title: 'Время',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };

    var data3 = google.visualization.arrayToDataTable([
        ['Время', '16-20 лет', '21-29 лет', '30-45 лет', '45-60 лет', 'выше 60 лет'],
        ['08:00',  165,      100,         95,                80,           20],
        ['10:00',  135,      120,         99,                68,           28],
        ['12:00',  157,      117,         87,                87,           39],
        ['16:00',  139,      110,         65,                68,           21],
        ['18:00',  136,      111,         62,                86,           36],
        ['22:00',  90,        81,         32,                16,            3]
    ]);

    var options3 = {
        title : 'Возраст и время передвижения',
        vAxis: {title: 'Количество'},
        hAxis: {title: 'Время'},
        seriesType: 'bars',
        series: {5: {type: 'line'}}
    };


    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    var chart2 = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    var chart3 = new google.visualization.ComboChart(document.getElementById('chart_div3'));
    chart.draw(data, options);
    chart2.draw(route, routeOptions);
    chart3.draw(data3, options3);
};

// function drawVisualization() {
//     // Some raw data (not necessarily accurate)
//
// }