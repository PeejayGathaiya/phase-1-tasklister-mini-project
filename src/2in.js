document.querySelector('form').addEventListener('submit', e);{
    e.preventDefault()
    handleToDo(e.target.new_todo.value)
  }


  function handleToDo (todo){
    let p = document.createElement ('p')
    let btn = document.createElement ('button')
    btn. textContent = 'x'
    p. textContent = todo
    document. querySelector ('#todo_container')
  }
  
  const onSubmit = document.getElementById("submit-here")
  
    onSubmit.addEventListener("click", submitClick)
  
    function submitClick (event){
      event.preventDefault()
      
    }
