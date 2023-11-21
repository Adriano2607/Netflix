document.getElementById("btnAssitir").addEventListener('click', function () {
   
    document.getElementById("modal").style.display = "block";
    

  });


  document.getElementById("modal").addEventListener('click', function (event) {
    // Verifique se o clique ocorreu fora do elemento #video
    if (event.target === this) {
        document.getElementById("modal").style.display = "none";
    }
});