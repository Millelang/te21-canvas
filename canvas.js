import Rectangle from './Rectangle.js'

export function setup(element) {
    const width = 1200
    const height = 900
    const canvas = document.querySelector('#test')
    const context = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height
    let rectangles = []
    let random = 0
    let random2 = 0
    let player = new Rectangle(1, 0, 200, 200, 'red', 5)
    let color = []
    color.push('red')
    color.push('blue')
    color.push('green')
    color.push('yellow')
    color.push('orange')
    color.push('purple')
    color.push('pink')

    canvas.addEventListener('click', (event) => {
        console.log("click")
        random = Math.floor(Math.random() * color.length)
        random2 = Math.floor(Math.random()* 50)
        rectangles.push(new Rectangle(event.offsetX, event.offsetY, 50, 50, color[random], random2))
    })


    function step() {
        context.clearRect(0, 0, width, height)
        player.update(canvas)
        player.draw(context)
        rectangles.forEach((rectangle) => {
            if (player.intersect(rectangle)) {
                console.log("intersect")
                rectangle.speed = -rectangle.speed
                rectangle.speedy = -rectangle.speedy
                player.speed = -player.speed
                rectangle.hp -= 1
                if (rectangle.hp == 0) {
                    rectangles.splice(rectangles.indexOf(rectangle), 1)
                }
            }
        
            rectangle.update(canvas)
            rectangle.draw(context)
        })
        requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
}
