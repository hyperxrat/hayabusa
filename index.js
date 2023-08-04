const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const bike = document.querySelector(".bikeimg")

img1.onclick=change1;
function change1(){
    bike.src="project10.png"
}

img2.onclick=change2;
function change2(){
    bike.src="project8.png"
}

img3.onclick=change3;
function change3(){
    bike.src="project7.png"
}

img4.onclick=change4;
function change4(){
    bike.src="project4.png"
}
