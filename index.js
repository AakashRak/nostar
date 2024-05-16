//*sign up bar removal

var closeicon = document.getElementById("closeicon")
var container=document.getElementById("container")

closeicon.addEventListener("click",function(){
    container.remove()
})

