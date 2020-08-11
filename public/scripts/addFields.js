// Procurar o botão
document.querySelector('#add-item')
// Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
  //Duplicar os campos. Quais campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  //Pegar os campos. Quais campos?
  const fields = newFieldContainer.querySelectorAll('input')

  //Para cada campo, limpar
  fields.forEach(input => {
    input.value = ''
  })

  //Colocar na página. Onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}