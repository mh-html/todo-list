let $ = document

// Variable
let userInput = $.querySelector('.inp')
let addClick = $.querySelector('.btn')
let listTodo = $.querySelector('.lists-todo')
let alarmShow = $.querySelector('.alarm')
let alarmTitle = $.querySelector('.alarm-title')
let conterTodo = $.querySelector('.conter')
let conter = 0

// Remove Todo function
function removeTodo(event){

    conterTodo.innerHTML = --conter

    alarmShow.style.opacity = '1'
    alarmShow.style.backgroundColor = '#e40a0a'
    alarmTitle.innerHTML = event.target.parentElement.textContent
    setTimeout(function(){
        alarmShow.style.opacity = '0'
    }, 3000)

    event.target.parentElement.remove()
}

// Add Todo function
function addNewTodo(){

    let mainValue = userInput.value.trim()

    if(mainValue){
        let newTodoLi = $.createElement('li')
        newTodoLi.innerHTML = mainValue
        newTodoLi.classList.add('list-todo')
    
        let newSpan = $.createElement('span')
        newSpan.innerHTML = '  delete'
        newSpan.classList.add('delete')
        newSpan.addEventListener('click', removeTodo)
    
        newTodoLi.append(newSpan)
        listTodo.append(newTodoLi)
        userInput.value = ''
        conterTodo.innerHTML = ++conter

        alarmShow.style.opacity = '1'
        alarmShow.style.backgroundColor = '#0ae40a'
        alarmTitle.innerHTML = 'Adding was successful'
        setTimeout(function(){
            alarmShow.style.opacity = '0'
        }, 3000)

    }else{
        alert('Input is empity !')
    }
}

// Event function
addClick.addEventListener('click', addNewTodo)
userInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        addNewTodo()
    }
})