class Bird {
    constructor({x, y, width, height, frames, sprite, liftBird, phisicsEngine, drawEngine, game }){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = 0
        this._frames = frames
        this._frameIndex = 0
        this._sprite = sprite
        this._liftBird = liftBird
        this._phisicsEngine = phisicsEngine
        this._drawEngine = drawEngine
        this._game = game
    }
    draw() {
        this._drawEngine.drawImg(this._sprite, this._frames[this._frameIndex], this.x, this.y, this.width, this.height)
    }
    update() [
        this._phisicsEngine.update(this)
        if (this.y < 0) {
            this.y = 0
        }
        if (this.y = this.height >= this._game.height) {
            this._game.gameOver()
        }
        this._frameIndex = (this._frameIndex + 1) % this._frames.length
    ]
    lift(){
        this.speed = -this._liftBird
    }
    
}