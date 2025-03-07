function classificarHeroi(nome, xp) {
    let nivel;

if (xp < 1000) {
  nivel = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
  nivel = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
  nivel = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Imortal"
} else {
  nivel = "Radiante"
}
    return `O Herói de nome ${nome} está no nível  ${nivel} com ${xp} pontos.`;
}

document.getElementById("heroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const xp = parseInt(document.getElementById("xp").value);

    if (nome && !isNaN(xp)) {
        const resultado = classificarHeroi(nome, xp);
        document.getElementById("result").innerHTML = `<span>${resultado}</span>`;
    } else {
        document.getElementById("result").innerHTML = "Por favor, preencha todos os campos corretamente.";
    }
});