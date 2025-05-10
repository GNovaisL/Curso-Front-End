const buttonFalar = document.getElementById("falar");
const buttonAniversario = document.querySelector("#completarAno")

const pessoa = {
    nome: "Gabriel",
    idade: 21,
    possuiCNH: true,
    possuiCarro: false,
    listaDeCompras: ["banana", "maçã", "pera"],
    paginasDaAtividade: [1, 5, 18, "20", "39"],
}

const nome = "Gabriel";
let idade = "21";
const possuiCNH = true;
const possuiCarro = false;
const listaDeCompras = ["banana", "maçã", "pera"];
const paginasDaAtividade = [1, 5, 18, "20", "39"];

buttonFalar.addEventListener("click", falarIdade);
buttonAniversario.addEventListener("click", aniversario);

function falarIdade() {
    // let idade = 18;
    alert(`Minha idade é ${pessoa.idade} anos`);
    // idade = idade + 1;
}

function aniversario() {
    alert(`Feliz aniversário ${pessoa.nome}!`);
    pessoa.idade = pessoa.idade + 1;
    alert(`Agora você tem ${pessoa.idade} anos!`);
}

const podeDirigir = () => {
    if (!pessoa.possuiCNH) {
        return alert("Você não possui habilitação!");
    }
    if (pessoa.possuiCarro) {
        return alert("Você pode dirigir.");
    }
    return alert(typeof (pessoa.possuiCarro));
}

function verListaDeCompras() {
    let lista = "Lista de Compras: ";
    for (let i = 0; i < pessoa.listaDeCompras.length; i++) {
        lista += `${pessoa.listaDeCompras[i]}, `;
    }
    alert(lista);
}
