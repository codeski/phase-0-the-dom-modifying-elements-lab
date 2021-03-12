// Write your code here!
const main = document.querySelector('main') 
main.remove()

const newHeader = document.createElement('h1')

document.body.appendChild(newHeader)

newHeader.setAttribute("id", "victory")

newHeader.innerHTML = "Todd is the champion"

