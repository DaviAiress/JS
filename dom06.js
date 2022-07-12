const eP = document.querySelector ("p");
const eButton = document.querySelector("button")

function mudaTexto()
{
    eP.textContent = "Ola padawan";
}

function ouvinteClick(event)
{
    mudaTexto();
}

eButton.addEventListener("click", ouvinteClick)