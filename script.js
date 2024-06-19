
const campoLogin = document.getElementById("username");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("newusername");
const campoNovaSenha = document.getElementById("newpassword");
const campoRepSenha = document.getElementById("repassword");


function logar(){

let login = campoLogin.value;
let senha = campoSenha.value;
let mensagem = "Usuário ou senha incorreta!";
let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
if (bancoDeDados == null) {
    mensagem = "Nenhum usuário cadastrado até o momento";
} else {
    for (let usuario of bancoDeDados) {
        if (usuario.login == login && usuario.senha == senha) {
            mensagem = "Parabéns, você logou!";
            localStorage.setItem("logado", JSON.stringify(usuario));
            window.location.href='home.html'
            break;
            

            }
        }
    
    }
    alert(mensagem);

}

function cadastrar(){

    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
            bancoDeDados = [];
        }
    bancoDeDados.push(usuario);
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        
        alert("Usuário cadastrado com sucesso!");
                
    } else {
        alert("As senhas são diferentes!");
    }
    
}

function cadastrar_livro(){

let titulo= document.getElementById("titulo");
let autor= document.getElementById("autor");
let genero= document.getElementById("genero");
let isbn= document.getElementById("isbn");

let biblioteca = JSON.parse(localStorage.getItem("biblioteca"));
    if (biblioteca == null) {
        biblioteca = [];
        
        biblioteca.push(titulo);
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
        
        alert("Ulivro cadastrado com sucesso!");
                
    } else {
        alert("livro ja cadastrado");

}

}


function logout(){
    window.location.href='index.html'

}









