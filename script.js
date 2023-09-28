document.getElementById("btnAssitir").addEventListener('click', function () {
   
    document.getElementById("modal").style.display = "block";
    

  });


  document.getElementById("modal").addEventListener('click', function (event) {
    // Verifique se o clique ocorreu fora do elemento #video
    if (event.target === this) {
        document.getElementById("modal").style.display = "none";
    }
});


// if (event.target === this) { ... }: Isso verifica se o elemento clicado (event.target) é exatamente igual ao elemento
//  ao qual o ouvinte de eventos foi adicionado (this se refere ao elemento "modal").
//  Em outras palavras, estamos verificando se o clique ocorreu dentro do próprio elemento "modal" e não dentro de seus elementos filhos.