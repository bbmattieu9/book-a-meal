var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// var btn = document.getElementsByClassName('myBtn');

function doStuff() {
    for(var i=1; i<=9; i++){
        var el = document.getElementById("myBtn" + i);
        // el.style.display = 'none';
        if(el){
            modal.style.display = "block";
        }
        
    }
  }

// document.getElementById('myBtn').addEventListener('click', function(){
//     doStuff();
//   });
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// function addClick(id){
// alert("myBtn"+id);
// var idName = "myBtn"+id;
//  btn = document.getElementById(idName);
// }

// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}