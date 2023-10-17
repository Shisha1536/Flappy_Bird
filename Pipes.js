class Pipes {
    constructor({position, bottom, top, w, h, gap, sX, maxY, sW, sprite, ctx, dx, state, frameIndex, bird, value, record}){
        this.position = position
        this.bottom = bottom
        this.top = top
        this.w = w
        this.h = h
        this.gap =gap

        this.sX = sX
        this.maxY = maxY
        this.sW = sW

        this.frameIndex = frameIndex
        this.sprite = sprite
        this.ctx = ctx
        this.dx = dx
        this.state = state
        this.bird = bird
        this.value = value
        this.record = record
    }
    draw() {
        for(let i  = 0; i < this.position.length; i++){
            let p = this.position[i];
            
            let topY = p.y;
            let bottomY = p.y + this.h + this.gap;
            ctx.drawImage(sprite, this.top.x, this.top.y, this.w, this.h, p.x, topY, this.w, this.h);
            ctx.drawImage(sprite, this.bottom.x, this.bottom.y, this.w, this.h, p.x, bottomY, this.w, this.h);  
        }
    }
    update() {
        if (this.state.current == this.state.game) {
            if(this.frameIndex%100 == 0){
                this.position.push({
                    x : this.sW,
                    y : this.maxY * ( Math.random() + 1)
                });
            }
            for(let i = 0; i < this.position.length; i++){
                let p = this.position[i];
                let bottomPipeYPos = p.y + this.h + this.gap;
                let speed = this.dx;
        
                p.x -= ((pipes.value%10 == 0) ? speed++ : speed);
                if(this.bird.x + this.bird.radius > p.x && this.bird.x - this.bird.radius < p.x + this.w && this.bird.y + this.bird.radius > p.y && this.bird.y - this.bird.radius < p.y + this.h){
                    this.state.current = this.state.over;
                    speed = this.dx;
                }
                if(this.bird.x + this.bird.radius > p.x && this.bird.x - this.bird.radius < p.x + this.w && this.bird.y + this.bird.radius > bottomPipeYPos && this.bird.y - this.bird.radius < bottomPipeYPos + this.h){
                    this.state.current = this.state.over;
                    speed = this.dx;
                }
                if(p.x + this.w/2 <= this.bird.x - this.bird.width/2 && p.x + this.w/2 >= this.bird.x - this.bird.width/2 - 2){
                    this.value += 1;
                    this.record = Math.max(this.value, this.record);
                    localStorage.setItem("FB", this.record);
                }
                if (p.x + this.w <= 0) {
                    this.position.shift();
                }
            }
            this.ctx.fillStyle = "#FFF";
            this.ctx.font = '35px Serif'
            this.ctx.fillText(this.value, this.sW/2, 50);
        } else if (this.state.current == this.state.getReady) {
            this.position = [];
            this.value = 0;
        }
    }
}