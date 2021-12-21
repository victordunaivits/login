const email = document.querySelector("#email");
const senha = document.querySelector("#password");
const submit = document.querySelector(".btnLogin");
const error1 = document.querySelector(".msg1"); // Campo do email
const error2 = document.querySelector(".msg2"); // Campo da senha
const textbox1 = document.querySelector(".textbox1"); // Campo do email
const textbox2 = document.querySelector(".textbox2"); // Campo da senha

// Validar campos formulário
submit.addEventListener("click", (e) => {
  e.preventDefault();

  const valorEmail = email.value;
  const valorSenha = senha.value;

  if (valorEmail === "" && valorSenha != "") {
    textbox1.style.borderColor = "#eb4444";
    textbox2.style.borderColor = "#32a850";

    error1.textContent = "Preencha este campo!";
    error2.textContent = "";
  } else if (valorEmail != "" && valorSenha === "") {
    textbox1.style.borderColor = "#32a850";
    textbox2.style.borderColor = "#eb4444";

    error1.textContent = "";
    error2.textContent = "Please fill out the fields!";
  } else if (valorEmail === "" && valorSenha === "") {
    textbox1.style.borderColor = "#eb4444";
    textbox2.style.borderColor = "#eb4444";

    error1.textContent = "Preencha este campo!";
    error2.textContent = "Preencha este campo!";
  } else {
    textbox1.style.borderColor = "#32a850";
    textbox2.style.borderColor = "#32a850";

    error1.textContent = "";
    error2.textContent = "";
  }
});
