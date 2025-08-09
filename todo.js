// plugins/todo.js
export function init() {
  const todo = document.createElement('div')
  todo.innerHTML = `
    <div style="border:1px solid #ddd;padding:10px;width:250px">
      <h3 style="margin-top:0">Mes Tâches</h3>
      <input type="text" id="todo-input" placeholder="Nouvelle tâche" style="width:100%">
      <button id="todo-add" style="width:100%">Ajouter</button>
      <ul id="todo-list" style="list-style:none;padding-left:5px"></ul>
    </div>
  `
  
  document.getElementById('app-content').appendChild(todo)
  
  document.getElementById('todo-add').addEventListener('click', () => {
    const input = document.getElementById('todo-input')
    if (input.value.trim()) {
      const li = document.createElement('li')
      li.textContent = input.value
      document.getElementById('todo-list').appendChild(li)
      input.value = ''
    }
  })
}
