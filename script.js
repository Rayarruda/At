function enviar() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let assunto = document.getElementById("assunto").value;
  let texto = document.getElementById("texto").value;

  if (nome && email && assunto && texto) {
    alert("Enviado!\n" + nome + "\n" + email + "\n" + assunto + "\n" + texto);
  } else {
    alert("Preencha todos os campos!");
  }
}