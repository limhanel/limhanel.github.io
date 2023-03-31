$(window).ready(function() {
    draw(90, '.pie-chart1', '#FF6A2B');
    draw(80, '.pie-chart2', '#1888DA');
    draw(30, '.pie-chart3', '#EBD300');
    draw(90, '.pie-chart4', '#22AFFF');
    draw(80, '.pie-chart5', '#FFAF51');
    draw(70, '.pie-chart6', '#51ABFF');
    draw(70, '.pie-chart7', '#FF334B');
    draw(30, '.pie-chart8', '#FF63B7');
    draw(70, '.pie-chart9', '#5E81FF');
    draw(50, '.pie-chart10', '#745EFF');
    draw(50, '.pie-chart11', '#A143FF');
    draw(80, '.pie-chart12', '#D544E1');
});

function draw(max, classname, colorname) {
    var i = 1;
    var func1 = setInterval(function() {
        if (i < max) {
            color1(i, classname, colorname);
            i++;
        } else {
            clearInterval(func1);
        }
    }, 10);
}

function color1(i, classname, colorname) {
    $(classname).css({
        "background": "conic-gradient(" + colorname + " 0% " + i + "%, #ffffff " + i + "% 100%)"
    });
}