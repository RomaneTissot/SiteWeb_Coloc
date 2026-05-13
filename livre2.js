const form = document.getElementById("form-avis");
const liste = document.getElementById("liste-avis");

window.addEventListener("load", afficherAvis);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nom = document.getElementById("nom").value;
    const message = document.getElementById("message").value;

    const avis = {
        nom: nom,
        message: message,
        date: new Date().toLocaleDateString()
    };

    let avisStockes = JSON.parse(localStorage.getItem("avis")) || [];

    avisStockes.push(avis);

    localStorage.setItem("avis", JSON.stringify(avisStockes));

    form.reset();

    afficherAvis();
});

function afficherAvis() {
    liste.innerHTML = "";

    let avisStockes = JSON.parse(localStorage.getItem("avis")) || [];

    avisStockes.reverse().forEach(avis => {
        const div = document.createElement("div");
        div.classList.add("avis");

        div.innerHTML = `
            <strong>${avis.nom}</strong> <span>(${avis.date})</span>
            <p>${avis.message}</p>
        `;

        liste.appendChild(div);
    });
}

