let angleLeft=document.getElementById('anglel')
let angleRight=document.getElementById('angler')
let land=document.querySelector('.landing')
console.log(angleLeft)
console.log(angleRight)

console.log(land)
angleLeft.onclick=function(){
    land.style.backgroundImage='url("images/shuffle1.jpg")'
}
angleRight.onclick=function(){
    
land.style.backgroundImage='url("images/shuffle2.jpg")'
}