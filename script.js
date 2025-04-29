//popupoverlay box button select panrom apo the display none to block change panne
var popupoverlays=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".pop-box")
var addpopupbutton=document.getElementById("popup")

addpopupbutton.addEventListener("click",function(){
    popupoverlays.style.display="block"
    popupbox.style.display="block"
})
//select cancel
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
   event.preventDefault()
   popupoverlays.style.display="none"
    popupbox.style.display="none"
})
//select container apo the type panne display akum add panra apo like author title description elama chose pananum
var container = document.querySelector(".container")
var  addbook = document.getElementById("add-book")
var  Booktitleinput =document.getElementById("Book-title-input")
var  Bookauthorinput=document.getElementById("Book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${Booktitleinput.value}<\h2>
    <h5>${Bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button>Delete</button>`
    container.append(div)
    popupoverlays.style.display="none"
    popupbox.style.display="none"

})