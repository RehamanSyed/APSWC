// pageloade popup

$(document).ready(function() {
    $("#pagepopup").modal('show');
});

// Tenders Vertical scroll 
$('#demo').marquee({
    enable: true,
    direction: 'vertical',
    itemSelecter: 'li',
    delay: 3000,
    speed: 1,
    timing: 1,
    mouse: true
});


// Chart js
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Total Occupied', 11],
        ['Vacant', 2],
    ]);
    var options = {
        'backgroundColor': {
            'fill': '#FCFCFC',
            'opacity': 100
        },
        legend: {
            alignment: 'center',
            textStyle: { bold: true, fontSize: 14 }
        },
        colors: ['#324BA3', '#069203'],
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

// Bottom Up
mybutton = document.getElementById("myBtn")
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}