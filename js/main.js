//SHARE MENU OPEN
document.querySelector('.btn__share').addEventListener("click", () => {
    document.querySelector(".share__dark-container").style.display = "flex";
    document.querySelector(".btn__share-desktop").style.display = "inline-block";
    document.querySelector(".btn__share").style.display = "none";

//SHARE MENU CLOSE
    document.querySelector(".btn__share-active").addEventListener("click", () => {
        document.querySelector(".share__dark-container").style.display = "none";
        document.querySelector(".btn__share-desktop").style.display = "none";
        document.querySelector(".btn__share").style.display = "inline-block";
    })
    
})

//DESKTOP SHARE BUTTON
 function init(){
    document.querySelector(".share__dark-container").style.display = "none";
    document.querySelector(".btn__share").style.display = "inline-block";
    document.querySelector(".btn__share-desktop").style.display = "none";
}

document.querySelector(".btn__share-desktop").addEventListener("click", init);