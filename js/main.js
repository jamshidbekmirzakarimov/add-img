const elform = document.querySelector(".js-form");
const elInputUrl = document.querySelector(".js-input-url");
const elInputName = document.querySelector(".js-input-name");
const elInputId = document.querySelector(".js-input-id");
const elJsList = document.querySelector(".js-list");
const elbtn = document.querySelector(".btn");
let arr = [];

elform.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let elInputUrlValue = elInputUrl.value;
  let elInputNameValue = elInputName.value;
  let elInputIdValue = elInputId.value;
  
  arr.push({
    id: arr.length + 1,
    todo1: elInputUrlValue,
    todo2: elInputNameValue,
    todo3: elInputIdValue
  })

  drawPage();
});



function drawPage(){
  var result = "";
  for(var i = 0; i < arr.length; i++){
    result += 
    `<li>

      <img src="${arr[i].todo1}">
      <div class="box">
      <h3>${arr[i].todo2}</h3>
      <p>${arr[i].todo3}</p>
      </div>
      <p>${arr[i].id}</p>
    </li>`
  }
  
  elJsList.innerHTML = result;
}




btn.addEventListener("click")