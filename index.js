const config = new Config();
const cvs = document.getElementById(config.cvsId);
const ctx = cvs.getContext("2d");
const sprite = new Image();
sprite.src = "sprite.png";
let frameIndex = 0;
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
    ctx: ctx,
    dx: config.secondLine.dx,
    state: config.state
});
const bird = new Bird({
    x: config.brid.x,
    y: config.brid.y,
    width: config.brid.width,
    height: config.brid.height,
    frames: config.brid.frames,
    sprite: sprite,
    ctx: ctx,
    frameIndex: frameIndex,
    state: config.state,
    cvsH: cvs.height,
    sLH: config.secondLine.height
});
const getReady = new GetReady({
    x: config.getReady.x,
    y: config.getReady.y,
    w: config.getReady.w,
    h: config.getReady.h,
    sX: cvs.width/2 - config.getReady.w/2,
    sY: 80,
    sprite: sprite,
    state: config.state,
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
    state: config.state,
    ctx: ctx
});
const pipes = new Pipes({
    position : config.pipes.position,
    bottom: config.pipes.bottom,
    top:config.pipes.top,
    w: config.pipes.w,
    h: config.pipes.h,
    gap: config.pipes.gap,

    sX: 150,
    maxY: config.pipes.maxY,
    sW: cvs.width,
    frameIndex: frameIndex,
    dx: config.pipes.dx,
    sprite: sprite,
    ctx: ctx,
    state: config.state
});
cvs.addEventListener("click", function(evt) {
    switch (config.state.current) {
        case config.state.getReady:
            config.state.current = config.state.game
            break;
        case config.state.game:
            bird.flap();
            break;
        case config.state.over:
            config.state.current = config.state.getReady;
            break;
    }
})
function update() {
    secondLine.update();
    bird.update();
    pipes.update();
}
function loop() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0,cvs.width, cvs.height);
    update();
    firstLine.draw();
    secondLine.draw();
    bird.draw();
    bird.frameIndex++
    getReady.draw();
    gameOver.draw();
    pipes.draw();
    pipes.frameIndex++
    requestAnimationFrame(loop);
}
loop();