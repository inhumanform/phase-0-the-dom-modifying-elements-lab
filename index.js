// Remove <main> with the id 'main'
// "Make sure you create an <h1> and assign it to the 'newHeader' variable"
//"Make sure the id of your <h1> is set to 'victory'"
// make sure your <h1> with id 'victory' includes the text \"is the champion\" inside it").to.include("is the champion")

const elementToDelete = document.getElementById("main")
elementToDelete.remove();
// create a header, save it to a variable 'newHeader'
const newHeader = document.createElement("h1")
// make h1's id = 'victory'
newHeader.setAttribute('id', 'victory')
// make h1's text say "Drew is the champion"
newHeader.textContent = "Drew is the champion"