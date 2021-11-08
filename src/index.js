document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(e)
  })
  
document.getElementById("Button").onclick = function(){
const newHeader = document.createElement("h2");
newHeader.textContent = newtaskdescription.value;
const fullList = document.getElementById("list")
fullList.append(newHeader)
}

});

// document.querySelector('form').addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log(e)
// })
// });