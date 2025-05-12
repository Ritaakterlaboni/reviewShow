// let heading = document.getElementById("heading");

// console.log(heading.innerHTML);



let mainscreen = document.getElementsByClassName("mainscreen");
let reviewshow = document.getElementById("reviewshow");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");                       //jehetu getelement aita  array type hoi tai addeventlistener ta kaj kore id dile kaj kore
let review_box = document.getElementById("review_box");


submit.addEventListener("click",function(){
    if(review_box.value == ""){
        alert("Please enter your review");
    }
    else{
        reviewshow.style.display = "block"; 
        reviewshow.innerHTML = review_box.value;
    }
})


reset.addEventListener("click", function(){
    review_box.value ="";
    reviewshow.innerHTML ="";           //aita akta div tai ar value hoi na ar innertext ba innerhtml dite hoi
})