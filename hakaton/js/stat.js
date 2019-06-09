function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Сезоны', 'Выручка'],
        ['Весна',   700],
        ['Лето',    460],
        ['Осень',   1120],
        ['Зима',    840]
    ]);

    var options = {
        title: 'Сезонность к выручке',
        hAxis: {title: 'Сезоны',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}