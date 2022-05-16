
function toggleForm(stuff) {
    var x = document.getElementsByClassName("popup");

    Array.from(x).forEach((x)=>{
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    })
    
  }
