const scrollBtn = document.querySelector(".fa-arrow-up");
const rootEle = document.documentElement;
const scrollDetail = document.querySelector('.wrap')
let i = 0;
const txt = `Greeting :D`; /* The text */
let speed = 100;
document.addEventListener('DOMContentLoaded',showAlert)
document.addEventListener('scroll',showBtn);
document.addEventListener('scroll',showDetail);
document.addEventListener('DOMContentLoaded',typeWriter)
scrollBtn.addEventListener("click",scrollToTop);

function showBtn(){
   const scrollTotal = rootEle.scrollHeight - rootEle.clientHeight;
   if(rootEle.scrollTop/scrollTotal > 0.3){
    scrollBtn.classList.add("show-btn");
   }else{
   scrollBtn.classList.remove("show-btn");
   }
};
function scrollToTop(){
    rootEle.scrollTo({
        top:0,
        behavior:'smooth'
    })
};
function showDetail(){
    const scrollTotal = rootEle.scrollHeight - rootEle.clientHeight;
    console.log(rootEle.scrollTop/scrollTotal);
    if(rootEle.scrollTop/scrollTotal > 0.2){
        scrollDetail.classList.add("show-detail");
       }else{
       scrollDetail.classList.remove("show-detail");
       }
}
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("TypeText").innerHTML += txt.charAt(i);
    // document.getElementById("TypeText").write('<span class="Highlight">KUNAGIT</span>').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function showAlert(){
    alert("I'm currently working on optimizing the website for all devices. In the meantime, you may experience some viewing limitations on smaller screens.")
}