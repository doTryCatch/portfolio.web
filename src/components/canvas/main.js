let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let radius = 30;
let Wave = new wave(window.innerWidth / 2, window.innerHeight / 2, radius);

animate();

function animate() {
    canvas.height = window.innerHeight;

    requestAnimationFrame(animate);
    // Wave.draw(c);
    Wave.update(c);

    // Wave.update2(c);
    // }
}