class Pipes {
    constructor({position, bottom, top, w, h, gap, sX, maxY, sW, sprite, ctx, dx, state, frameIndex, bird}){
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
        
                p.x -= this.dx;
                if(this.bird.x + this.bird.radius > p.x && this.bird.x - this.bird.radius < p.x + this.w && this.bird.y + this.bird.radius > p.y && this.bird.y - this.bird.radius < p.y + this.h){
                    this.state.current = this.state.over;
                }
                if(this.bird.x + this.bird.radius > p.x && this.bird.x - this.bird.radius < p.x + this.w && this.bird.y + this.bird.radius > bottomPipeYPos && this.bird.y - this.bird.radius < bottomPipeYPos + this.h){
                    this.state.current = this.state.over;
                }
            }
        } else if (this.state.current == this.state.getReady) {
            this.position = [];
        }
    }
}