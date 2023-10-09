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
const bird = new Bird({
    x: config.brid.x,
    y: config.brid.y,
    width: config.brid.width,
    height: config.brid.height,
    frames: config.brid.frames,
    sprite: sprite,
    ctx: ctx,
    frameIndex: 0
});
const getReady = new GetReady({
    x: config.getReady.x,
    y: config.getReady.y,
    w: config.getReady.w,
    h: config.getReady.h,
    sX: cvs.width/2 - config.getReady.w/2,
    sY: 80,
    sprite: sprite,
    ctx: ctx
});
const gameOver = new GameOver({
    x: config.gameOver.x,
    y: config.gameOver.y,
    w: config.gameOver.w,
    h: config.gameOver.h,
    sX: cvs.width/2 - config.gameOver.w/2,
    sY: 80,
    sprite: sprite,
    ctx: ctx
}); 
function loop() {
    firstLine.draw();
    secondLine.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
    requestAnimationFrame(loop);
}
loop();