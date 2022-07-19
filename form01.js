var x = 1;

function criaElemento(fruta, cor){
    const eNovo = document.createElement("div")
    eNovo.innerHTML = `<br />Fruta ${x}: ${fruta}<br />Cor ${x}: ${cor}`
    eNovo.style = `color: ${cor}`
    document.body.appendChild(eNovo)
    x++
}

document.exm01.addEventListener("submit", SubmitListener)

function SubmitListener(event)
{
    event.preventDefault()
    if(verificaValor(document.exm01.fruta.value, document.exm01.cor.value))
    {
        criaElemento(
            document.exm01.fruta.value,
            document.exm01.cor.value
        )
    }
    else
    document.write(`<div style="text-align: center;margin-top:100px;color: #e90101"><b> ERROR: 404 </b></div>`)
    document.exm01.fruta.value = ""
    document.exm01.cor.value = ""

    //ou
    document.exm01.reset();
}

function verificaValor(fruta, cor)
{
    if((fruta != "") && (cor != ""))
        return true
}
