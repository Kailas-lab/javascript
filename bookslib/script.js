//selecting popup box,overlay,button

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbtn=document.querySelector(".add-btn")


addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
     popupbox.style.display="block"
})


//select cancel btn

var cancelbtn=document.getElementById("cancel")

cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
     popupbox.style.display="none"
})

//select container,add btn,book title,book author,description 

var container=document.querySelector(".container")
var addbook=document.getElementById("add")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var bookdescribe=document.getElementById("description-input")

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
                   <h5>${bookauthor.value}</h5>
                   <p>${bookdescribe.value}</p>
                   <button>Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


function deletebook(){
    event.target.parentElement.remove()
}