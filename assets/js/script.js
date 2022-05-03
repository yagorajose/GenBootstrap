//getElementById: por ID
//getElementByTagName - por Tag
//getElementByName - por nome
//getElementByClass - por classe
//querySelector - por seletor


/* case sensitive: reconhece maiúsculas de minúsculas
 */


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let map = document.querySelector('#map')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txt.innerHTML = "nome inválido"
        txt.style.color = 'red'
    } else { 
        txt.innerHTML = " "
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') ==1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'    
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'

    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true

    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
          alert ('Formulário enviado com sucesso!')
    } else {
         alert ('Preencha os campos corretamente')    
    }   
}

function mapZoom(){
    map.style.width = '800px'
    map.style.height = '600px'
}

function mapNormal(){
    map.style.width = '600px'
    map.style.height = '450px'
}