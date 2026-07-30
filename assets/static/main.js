let bd = document.querySelector('body')

let time = new Date()
let i = 0

function changecolor(){
    let colors = ["blue", "red", "gray"]
    if (!undefined){
        bd.style.background = colors[i]
        i++
    } else {
        
    }
}
setInterval(changecolor,3000)

