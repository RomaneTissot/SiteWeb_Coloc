const form = document.getElementById("form-livre");
const container = document.getElementById("messages");

const API_URL = "http://localhost:3000/api/messages";

/* Charger les messages */
async function loadMessages() {
  const res = await fetch(API_URL);
  const messages = await res.json();

  container.innerHTML = "";

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.className = "message";

    div.innerHTML = `
      <h4>${msg.author}</h4>
      <p>${msg.message}</p>
      <small>${new Date(msg.date).toLocaleString()}</small>
    `;

    container.appendChild(div);
  });
}

/* Envoi du formulaire */
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const author = document.getElementById("author").value;
  const message = document.getElementById("message").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ author, message })
  });

  form.reset();
  loadMessages();
});

/* Chargement initial */
loadMessages();
