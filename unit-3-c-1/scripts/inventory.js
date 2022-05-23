let arr=JSON.parse(localStorage.getItem("products"))||[];
let container=document.getElementById("all_products");

arr.map(function(el){
    let box=document.createElement("div");
    let p1=document.createElement("p");
    p1.innerText=el.type;
   
    let p2=document.createElement("p");
    p2.innerText=el.desc;
    p2.style.textAlign=""
    let p3=document.createElement("p");
    p3.innerText=el.price;
   
    let img=document.createElement("img");
    img.src=el.image;
    let p4=document.createElement("button");
    p4.innerText="Remove";
    p4.style.color="black"
 
   
    p4.style.cursor="pointer"
    p4.addEventListener("click",function(){
        event.target.parentNode.remove();
    })
    box.append(img,p1,p2,p3,p4)
    container.append(box);

})

function removeData(el,index){
    data.splice(index,1)
    localStorage.setItem("products",JSON.stringify(data))
    window.location.reload();
}