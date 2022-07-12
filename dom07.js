//pega referencia para todos os elementos
const spans = document.querySelectorAll("span");
const eA = spans[0];
const eB = spans[1];
const eC = spans[2];
//partes desnecessárias que um OnClick resolveria
const eButton = document.querySelectorAll("button")
const eButtonSoma = eButton[0];
const eButtonMutiplica = eButton[1];

eButtonSoma.addEventListener("click", soma)
eButtonMutiplica.addEventListener("click", multiplica)

function somaListener(event){
    soma()
}
function multiplicaListener(event){
    multiplica()
}
//opera os dados
const a = parseInt(eA.textContent);
const b = Number(eB.textContent);
function soma()
{
    const c = a+b;
    eC.textContent = c;
}

function multiplica()
{
    const c = a*b;
    eC.textContent = c;
}


