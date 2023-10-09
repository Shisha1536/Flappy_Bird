class Bird {
    constructor({x, y, width, height, frames, sprite, ctx, frameIndex}){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.frames = frames
        this.sprite = sprite
        this.ctx = ctx
        this.frameIndex = frameIndex
    }
    draw() {
        ctx.drawImage(
            sprite,
            this.frames[this.frameIndex].sX,
            this.frames[this.frameIndex].sY,
            this.width,
            this.height,
            
            this.x - this.width/2,
            this.y - this.height/2,
            this.width,
            this.height)
    }
    flap() {
        
    }   
}   