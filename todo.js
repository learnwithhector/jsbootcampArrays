const todos = [{
    text: 'Talk to Bert',
    completed: true
},{
    text: 'Cook burger',
    completed: false
},{
    text: 'Walk the dog',
    completed: true
},{
    text: 'Stare at the tree',
    completed: false
},{
    text: 'Contemplate things',
    completed: false
}]

const sortTodos = function (todos) {
    todos.sort(function(a,b) {
        if (!a.compled && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index,1)
    }
}

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
      return !todo.completed
  })
}

sortTodos(todos)
console.log(todos)

// deleteTodo(todos, 'cook burger')
// console.log(getThingsToDo(todos))
// console.log(todos)