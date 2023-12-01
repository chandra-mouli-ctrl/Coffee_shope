let cartIcon=document.querySelector('#cartIcon')
let car=document.querySelector('#car')
let closecart=document.querySelector('#closecart')
//openingcart//
cartIcon.onclick=()=>{
    cartIcon.classList.add('active');
}
//close caret//
closecart.onclick=()=>{
    cartIcon.classList.remove("active");
}
//CART WORKINGJS//
if(document, readystate=='loading'){
    document.add addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}
//Marking function//
function ready(){
    //remove Item for cart//
    var removCartButtons=document.getElementsByClassName('cart-remove')
    console.log(removecartButton)
    for(var i=o;i<removecartButten.length;i++){
        var botton=removecartButtons[i]
        button.addEventListener('click,removeCartItem')
    }
}
//revove Iteamfrome cart//
function removeCartItam(event){
    var buttonclicked=event.target;
    buttonclicked.partElement.remove();
}