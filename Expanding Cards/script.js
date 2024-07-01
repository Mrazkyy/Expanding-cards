let list = document.querySelectorAll(".panel")

list.forEach(function(jedenlist){
    jedenlist.addEventListener("click", function(){
        deleteActiveClass()
        jedenlist.classList.add("active")

    })
})

function deleteActiveClass(){
    list.forEach(function(myPanel){
        myPanel.classList.remove("active")
    })
}