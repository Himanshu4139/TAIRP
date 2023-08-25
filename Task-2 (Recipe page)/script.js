const review = document.querySelectorAll(".inner");
var counter=0;
review.forEach(
    (review,index)=>{
        review.style.left =`${index*100}%`;
    }
)
const goback=()=>{
    if(counter!=0){
    counter--;
    slide();
    }
}
const goforward = ()=>{
    if(counter!=3){
        counter++;
        slide();
    }
}
const slide = ()=>{
    review.forEach(
        (review)=>{
            review.style.transform = `translateX(-${counter*100}%)`;
        }
    )
}