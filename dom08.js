var eP = document.querySelector("p")

const eUl = document.querySelectorAll("ul")
const eUlPar = eUl[0];
const eUlImpar = eUl[1];
//opera os dados
function gera()
{
    const rng = Math.floor(Math.random() * 11);
    eP.textContent = rng;
}

function define()
{
    const eLi = document.createElement("li");
    eLi.textContent = eP.textContent;
    if(eLi.textContent % 2 == 0)
        eUlPar.appendChild(eLi)
    else
        eUlImpar.appendChild(eLi);
}