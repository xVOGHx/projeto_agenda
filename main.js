const form = document.getElementById('form');
const nomes = [];
const numeros = [];
const inputNome = document.getElementById ("add-nome");
const inputNumero = document.getElementById ("add-numero");
let numeroValido = false;

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    validaNumero();

    if (numeroValido) {
        adicionaLinha();
        atualizaTabela();
    }
});

function validaNumero() {
    const numero = inputNumero.value;

    if ((numero.length === 9 || numero.length === 11) && !isNaN(numero)) {
        numeroValido = true;
    } else {
        numeroValido = false;
        alert('Por favor, insira um número de telefone válido (9 ou 11 dígitos).');
    }
}

function adicionaLinha() {
    if (nomes.includes(inputNome.value)) {
        alert(`Este nome já está incluído na lista`);
    } else if (numeros.includes(inputNumero.value)) {
        alert(`Este número já está incluído na lista`);
    } else {
        let numeroFormatado = inputNumero.value;
        if (numeroFormatado.length === 11) {
            numeroFormatado = `(${numeroFormatado.substring(0, 2)})${numeroFormatado.substring(2)}`;
        }

        nomes.push(inputNome.value);
        numeros.push(numeroFormatado);

        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${numeroFormatado}</td>`;
        linha += `</tr>`;
        linhas += linha;
    }

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

