let dados;

fetch("../assets/dados.json")
  .then(res => res.json())
  .then(json => {
    dados = json;
    preencherDatas();
  })
  .catch(err => console.error("Erro ao carregar JSON:", err));

function preencherDatas() {
  const nome = "Yasmin Stéfany";
  const selectDatas = document.getElementById("datas");
  selectDatas.innerHTML = "<option disabled selected>Selecione uma data</option>";

  if (!dados[nome]) {
    selectDatas.innerHTML = "<option disabled>Nenhum dado encontrado</option>";
    return;
  }

  Object.keys(dados[nome]).forEach(data => {
    const option = document.createElement("option");
    option.value = data;
    option.textContent = data;
    selectDatas.appendChild(option);
  });
}

document.getElementById("datas").addEventListener("change", () => {
  const data = document.getElementById("datas").value;
  mostrarTexto(data);
});

function mostrarTexto(data) {
  const nome = "Yasmin Stéfany";
  const texto = dados[nome][data];
  let textoFormatado = texto
    .replace(/Repertório:/g, "<h3>🎵 Repertório</h3>")
    .replace(/Observações:/g, "<h3>📝 Observações</h3>")
    .replace(/- /g, "• ")
    .replace(/\n{2,}/g, "<br><br>")
    .replace(/\n/g, "<br>");

  document.getElementById("resultado").innerHTML = textoFormatado;
}
