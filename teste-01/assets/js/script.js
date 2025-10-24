// Seleciona os elementos do DOM
const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");
const body = document.body;

// Adiciona evento de clique ao botão
botao.addEventListener("click", function() {
      // verifica  se o tema atual é claro
      if (body.classList.contains("claro")) {
      //Troca para o modo escuro 
       body.classList.replace("claro", 
        "escuro");
       titulo.textContent = "Tema Escuro🌙";
       botao.textContent = "Mudar para Tema Claro☀️";
        } else {
     // Troca para o modo claro
         body.classList.replace("escuro", 
            "claro");
            titulo.textContent = "Tema Claro☀️";
            botao.textContent = "Mudar para Tema Escuro🌙";
        }
});

