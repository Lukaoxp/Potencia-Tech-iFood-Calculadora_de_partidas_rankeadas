let nivel;
const vitorias = 150;
const derrotas = 99;

let saldoVitorias = calculaSaldoVitorias(vitorias, derrotas);

function calculaSaldoVitorias(qtdvitorias, qtdderrotas) {
    return qtdvitorias - qtdderrotas;
}

validaNivel(saldoVitorias);

function validaNivel(saldoVitorias) {
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    }
    else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    }
    else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    }
    else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    }
    else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Imortal";
    }
    else if (saldoVitorias >= 10001) {
        nivel = "Radiante";
    }

    console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + nivel);
}

