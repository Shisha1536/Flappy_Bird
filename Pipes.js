class Pipes {
    constructor({position, bottom, top, w, h, gap, sX, maxY, sW, sprite, ctx, dx, state, frameIndex}){
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
        if(this.frameIndex%100 == 0){
            this.position.push({
                x : this.sW,
                y : this.maxY * ( Math.random() + 1)
            });
        }
        for(let i = 0; i < this.position.length; i++){
            let p = this.position[i];
    
            p.x -= this.dx;
        }
    }
}