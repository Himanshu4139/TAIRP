const slide = document.querySelectorAll(".inner");
const pic = document.querySelector('.main');
var count = 0;
slide.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`;
    }
)
const forward = ()=>{
    if(count!=5){
    count++;
    slideshow();
    pic.classList.remove(`pic${count-1}`);
    pic.classList.add(`pic${count}`);
    }
    else{
        count=0;
        slideshow();
        pic.classList.remove(`pic${5}`);
        pic.classList.add(`pic${count}`);
    }
}
const backward = ()=>{
    if(count!=0){
    pic.classList.remove(`pic${count}`);  
    count--;
    pic.classList.add(`pic${count}`);
    slideshow();
    }
    else{
        count=5;
        pic.classList.remove(`pic${0}`);
        pic.classList.add(`pic${count}`);
        slideshow();
    }
}
const slideshow = ()=>{
    slide.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${count*100}%)`;
        }
    )
}