const form = document.getElementById("contact-form");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const messaggio = document.getElementById("messaggio");

const risultato = document.getElementById("risultato");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const messaggioValue = messaggio.value.trim();

  if (
    nomeValue === "" ||
    emailValue === "" ||
    messaggioValue === ""
  ) {

    risultato.textContent = "Compila tutti i campi";
    risultato.style.color = "red";

    return;
  }

  if (!emailValue.includes("@")) {

    risultato.textContent = "Inserisci una email valida";
    risultato.style.color = "red";

  }

  risultato.textContent = "Messaggio inviato con successo!";
  risultato.style.color = "green";

  const client = [
    {
        nome: nomeValue,
        email: emailValue,
        messaggio: messaggioValue,
    }
  ]
  console.log(client)

  form.reset();

});