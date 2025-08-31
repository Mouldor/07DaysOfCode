function armazenaInfo() {
  let form = document.getElementById("meuForm");
  let dados = new FormData(form);

  let nome = dados.get("nome");
  let idade = dados.get("idade");
  let linguagem = dados.get("linguagem");

  let mensagem = document.getElementById("mensagem");

  if (nome && idade && linguagem) {
    mensagem.innerHTML = `Olá <b>${nome}</b>, você tem <b>${idade}</b> ano(s) e está programando em <b>${linguagem}</b>.`;
  } else {
    mensagem.innerHTML = "Preencha todos os campos!";
  }
}