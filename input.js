let inputElem = document.querySelector(".input-1");
let spanElem = document.querySelector(".number-limit");
let inputMaxLength = inputElem.getAttribute('maxlength');
inputElem.addEventListener('keydown',function(){
  spanElem.innerHTML = inputMaxLength -inputElem.value.length;
})
