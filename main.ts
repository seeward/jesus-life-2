scene.setBackgroundColor(9)
let Jesus = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . e e e f e . . . . . . . . . 
. . . . . . . . . f e f f f e e e . . . . . . . 
. . . . . . . . e e e e f e e f f e . . . . . . 
. . . . . . . e f f e e e e e e f e e . . . . . 
. . . . . . . f f e d d d e f e f f e . . . . . 
. . . . . . . e e d d d d d e e e f e e . . . . 
. . . . . . . e d d d d d d d f f e e e . . . . 
. . . . . . . . d f d d d f d f e e f e . . . . 
. . . . . . . . d d d d d d d e d e e f . . . . 
. . . . . . . . d d d d d d d e d e f f . . . . 
. . . . . . . . d e e e e e d e e e e e . . . . 
. . . . . . . . . e d d d e d e f f e f . . . . 
. . . . . . . . . e e e e e e e e f e . . . . . 
. e e e e . . . . e e e e e e d e f . . . . . . 
. e . e e . . . . . e e e e d d . . . . . . . . 
. e . . . . . . . . 2 2 2 d d 1 1 1 . . . . . . 
. e . . . . . . . . 2 2 2 1 1 1 1 1 1 . . . . . 
. e e e . . . . . 2 2 2 2 2 1 1 1 1 1 1 . . . . 
. . e e . . . . 1 1 2 2 2 2 2 1 1 1 1 1 1 . . . 
. . e e . . . 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . . 
. . e e . . 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 1 . 
. . e e . 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . 
. . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . 
. . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . 
. . d d d 1 1 1 1 1 1 2 2 2 2 2 2 2 1 1 1 1 1 . 
. . e e 1 1 1 1 1 1 1 e e e e e e e e 1 1 1 1 . 
. . e e . . 1 1 1 1 1 1 1 2 2 2 2 2 2 1 1 d d . 
. . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . 
. . e e . . . . . 2 1 1 1 2 2 2 2 2 2 2 2 d d . 
. . e e . . . . . 2 1 1 1 1 2 2 2 2 2 2 2 . . . 
. . e e . . . . . . 1 1 1 1 2 2 2 2 2 2 2 . . . 
. . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . 
. . e e . . . . . 1 1 1 1 1 2 2 2 2 2 2 2 2 . . 
. . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . 
. . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 . . 
. . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . 
. . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . 
. . e e . . . . . 1 1 1 1 1 1 2 2 2 2 2 2 2 2 . 
. . e e . . . . . e d d d . . . . . e d d d . . 
. . e e . . . . e e e e e . . . . e e e e e . . 
. . e e . . . . f f f f f . . . . f f f f f . . 
`, SpriteKind.Player)
let mySprite2 = sprites.create(img`
. . . . . . . f f f f f f f f f f f . . . . . . . 
. . . . . . f f f f f f f f f f f f f . . . . . . 
. . . . . . f f f f d d d d d d f f f . . . . . . 
. . . . . . f f d d d d d d d d d f f . . . . . . 
. . . . . . f d d d 8 d d d d 8 d . . . . . . . . 
. . . . . . . d d d d d d d d d d . . . . . . . . 
. . . . . . . . d d d d d d d d d . . . . . . . . 
. . . . . . . . d d d d 1 1 1 d d . . . . . . . . 
. . . . . . . . d d d d d d d d d . . . . . . . . 
. . . . . . . . . . d d d d d . . . . . . . . . . 
. . . . . . . e e e 6 6 6 6 6 e e e . . . . . . . 
. . e e e e e e e e e c c c e e e e e e e e e . . 
. . e e e e e e e e e c c c e e e e e e e e e . . 
. . . 6 6 . . 6 6 e 6 6 6 6 6 6 6 6 . . 6 6 . . . 
. . . 6 6 . . 6 6 6 e 6 6 6 6 6 6 6 . . 6 6 . . . 
. . . 6 6 . . 6 6 6 6 e 6 6 6 6 6 6 . . 6 6 . . . 
. . . 6 6 . . 6 6 6 6 6 e 6 6 6 6 6 . . 6 6 . . . 
. . . 6 6 . . 6 6 6 6 6 6 e 6 6 6 6 . . 6 6 . . . 
. . . c c . . 6 6 6 6 6 6 6 e 6 6 6 . . c c . . . 
. . . c c . . c c c c c c c c e c c . . c c . . . 
. . . e e . . c c c c c c c c c e c . . e e . . . 
. . . d d d . e e e e e e e e e e e . d d d . . . 
. . . d d d . b b b b b b b b b b b . d d d . . . 
. . . . . . . b b b b b b b b b b b . . . . . . . 
. . . . . . . b b . . . . . . . b b . . . . . . . 
. . . . . . . b b . . . . . . . b b . . . . . . . 
. . . . . . . b b . . . . . . . b b . . . . . . . 
. . . . . . . b b . . . . . . . b b . . . . . . . 
. . . . . . . b b . . . . . . . b b . . . . . . . 
. . . . . . . b b . . . . . . . b b . . . . . . . 
. . . . . . . b b . . . . . . . b b . . . . . . . 
. . . . . . . e e . . . . . . . e e . . . . . . . 
. . . . . . . e e . . . . . . . e e . . . . . . . 
. . . . . e e e e . . . . . . . e e e e . . . . . 
. . . . . e e e e . . . . . . . e e e e . . . . . 
`, SpriteKind.Player)
mySprite2.setPosition(34, 50)
