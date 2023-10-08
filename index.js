const config = new Config();
const cvs = document.getElementById(config.cvsId);
const ctx = cvs.getContext("2d");
ctx.fillStyle = "#70c5ce";
ctx.fillRect(0, 0,cvs.width, cvs.height);
const sprite = new Image();
sprite.src = "sprite.png";
const firstLine = new Field({
    x: config.firstLine.x,
    y: config.firstLine.y,
    width: config.firstLine.width,
    height: config.firstLine.height,
    sX: 0,
    sY: 0,
    sWidth: cvs.width,
    sHeight: cvs.height,
    sprite: sprite,
    ctx: ctx
});
const secondLine = new Field({
    x: config.secondLine.x,
    y: config.secondLine.y,
    width: config.secondLine.width,
    height: config.secondLine.height,
    sX: 0,
    sY: 0,
    sWidth: cvs.width,
    sHeight: cvs.height,
    sprite: sprite,
    ctx: ctx
});
function loop() {
    firstLine.draw();
    secondLine.draw();
    requestAnimationFrame(loop);
}
loop();