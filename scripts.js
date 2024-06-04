window.onload = function() {
    var elem = document.getElementById("animateMe");
    var pos = 0;
    var direction = 1;
    var speed = 2;

    function move() {
        pos += direction * speed;
        if (pos > 300 || pos < 0) {
            direction *= -1;
        }
        elem.style.left = pos + 'px';
        requestAnimationFrame(move);
    }

    move();
};
