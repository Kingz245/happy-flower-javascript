let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . a a 1 1 1 1 a a . . . . 
    . . . . a 1 1 5 5 1 1 a . . . . 
    . . . . a 1 1 5 5 1 1 a . . . . 
    . . . . a a 1 1 1 1 a a . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e . . e . . . . . 
        . . . . . . . e e e e . . . . . 
        . . . . . . . . . . e . . . . . 
        . . . . . f 5 f 5 f 5 f 5 . . . 
        . . . . . . 5 f 5 f 5 f 5 . . . 
        . . . . . . . f 5 f 5 f 5 . . . 
        . . . . . . . e . . e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
