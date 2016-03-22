$(document).ready(function () {
    createGrid(16);
    onHover();
    
$("button").on("click",function(){
    $( "#container").empty();
    var num = prompt("Enter a number");
    createGrid(num);
	onHover();
});
    
function get_random_color() {
    function c() {
        return Math.floor(Math.random() * 256).toString(16);
    }
    return "#" + c() + c() + c();
}

function createGrid(num){
    squareSize = ((960 - (num * 2)) / num);
    for (var x = 0; x < num; x++) {

        for (var y = 0; y < num; y++) {
            var unit = $("<div class='unit'></div>");
            unit.css({
                "height": squareSize + "px",
                "width": squareSize + "px"
            });
            unit.appendTo("#container");
        }
}
}
    
function onHover(){
        $(".unit").hover(function () {
    $(this).css("background-color", get_random_color());
}, function () {
    $(this).css("border-color", "white");
});
    }
    });
