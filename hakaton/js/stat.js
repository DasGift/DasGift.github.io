function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Сезоны', 'Выручка'],
        ['Весна',   28300],
        ['Лето',    24200],
        ['Осень',   26100],
        ['Зима',    29500]
    ]);

    var options = {
        title: 'Сезонность к  выручке',
        hAxis: {title: 'Сезоны',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };

    var route = google.visualization.arrayToDataTable([
        ['Время', 'Выручка'],
        ['08:00',    70],
        ['10:00',    45],
        ['12:00',    40],
        ['16:00',    55],
        ['18:00',   120],
        ['22:00',    20],
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

    // var data4 = google.visualization.arrayToDataTable([
    //     ['Lat', 'Long', 'Name'],
    //     [37.4232, -122.0853, 'Work'],
    //     [37.4289, -122.1697, 'University'],
    //     [37.6153, -122.3900, 'Airport'],
    //     [37.4422, -122.1731, 'Shopping']
    // ]);

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    var chart2 = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    var chart3 = new google.visualization.ComboChart(document.getElementById('chart_div3'));
    var map = new google.visualization.Map(document.getElementById('map_div'));

    chart.draw(data, options);
    chart2.draw(route, routeOptions);
    chart3.draw(data3, options3);

    // map.draw(data4, {
    //     showTooltip: true,
    //     showInfoWindow: true
    // });

};