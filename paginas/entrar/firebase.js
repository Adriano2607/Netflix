const firebaseConfig = {
    apiKey: "AIzaSyBdtWhS1hCUo4w9OKSStEfv14sfQIZw2JY",
    authDomain: "netflix-5d653.firebaseapp.com",
    databaseURL: "https://netflix-5d653-default-rtdb.firebaseio.com",
    projectId: "netflix-5d653",
    storageBucket: "netflix-5d653.appspot.com",
    messagingSenderId: "978891364485",
    appId: "1:978891364485:web:87cfb6d88c7dd0496cf1ec"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementsByTagName("input");

    const nome = input[0].value;
    const username = input[1].value;
    const senha = input[2].value;

   
   
    database.ref('usuarios/').set({
        nome: nome,
        username: username,
        senha: senha
    })
    .then(() => {
        alert("Inserção bem-sucedida!");
        input[0].value = "";
        input[1].value = "";
        input[2].value = "";
        window.location.href = '../index.html';
    })
    .catch((error) => {
        alert("Erro ao inserir dados: " + error.message);
    });
});
