class Config {
    cvsId = 'canvas'
    firstLine = {
        x: 0,
        y: 0,
        width: 275,
        height: 226
    }
    secondLine = {
        x: 276,
        y: 1,
        width: 224,
        height: 112,
        dx: 2
    }
    brid = {
        x: 50,
        y: 150,
        width: 34,
        height: 26,
        frames: [
            {sX: 276, sY: 112},
            {sX: 276, sY: 139},
            {sX: 276, sY: 164},
            {sX: 276, sY: 139}
        ]
    }
    getReady = {
        x: 0,
        y: 228,
        w: 173,
        h: 152,
    }
    gameOver = {
        x: 174,
        y: 228,
        w: 225,
        h: 200,
    }
    state = {
        current: 0,
        getReady: 0,
        game: 1,
        over: 2
    }
}