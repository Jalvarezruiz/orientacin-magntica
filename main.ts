let angulo = 0
basic.forever(function () {
    angulo = input.compassHeading() + 23
    if (angulo % 360 < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (angulo % 360 < 90) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (angulo % 360 < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (angulo % 360 < 180) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (angulo % 360 < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (angulo % 360 < 270) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (angulo % 360 < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
