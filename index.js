const tak = document.getElementById("tak");
const booksy = document.getElementById("booksy");
const ch = document.getElementById("fiut");

tak.onclick = function(){
    booksy.classList.remove("hidden");
    ch.classList.add("hidden")
    console.log("hide");
};

