document.addEventListener("DOMContentLoaded", () => {
  // your code here

    let form = document.querySelector('form')
    form.addEventListener('submit', (Event) => {
      Event.preventDefault()
      handleToDo(Event.target.new_task_description.value)
      form.reset()
    })

});

function handleToDo(todo){
  let p = document.createElement('p')
  let button = document.createElement('button')
  // let edit = document.createElement('button')
  // edit.textContent = 'Edit'
  button.textContent = 'X'

  button.addEventListener('click',handleDelete)
  // edit.addEventListener('click',editTask)

  p.textContent = `${todo}   `

  p.appendChild(button)
  // p.appendChild(edit)
  console.log(p)
  document.getElementById('list').appendChild(p)
}

function handleDelete(Event){
  Event.target.parentNode.remove()
}





