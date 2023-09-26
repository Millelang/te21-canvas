

export default class Rectangle {
    constructor(x, y, width, height, color, speed) {
        this.x = x
        this.y = y
        this.speed = speed
        this.speedy = speed
        this.width = width
        this.height = height
        this.color = color
        this.hp = 3
    }

   intersect(rectangle) {
        return (this.x < rectangle.x + rectangle.width &&
            this.x + this.width > rectangle.x &&
            this.y < rectangle.y + rectangle.height &&
            this.y + this.height > rectangle.y)
   }

    update(canvas) {
        if (this.x + this.width > canvas.width ) {
            this.speed = -this.speed
        }
        if (this.x < 0) {
            this.speed = -this.speed
        }
        if (this.y + this.height > canvas.height) {
            this.speedy = -this.speedy
        }
        if (this.y < 0) {
            this.speedy = -this.speedy
        }
        this.y += this.speedy
        this.x += this.speed
    }

    draw(context) {
        context.fillStyle = this.color
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}
