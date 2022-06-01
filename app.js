let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let container = document.querySelector('.container')
let notesContainer = document.querySelector('.container-2')

//document.addEventListener('DOMContentLoaded', getTodos)

btn.addEventListener('click', function(e) {
   e.preventDefault();
   addTask()
})


function addTask() {
 if(input.value.trim()) {
   let taskArticle = document.createElement('ul')
 taskArticle.classList.add('taskArticle')

 let todoList = document.createElement('div')
 todoList.classList.add('todoList')


 let task = document.createElement('li')
 task.classList.add('task-item')
 task.textContent = input.value 

 let btnsDiv = document.createElement('div')
 btnsDiv.classList.add('btnsDiv')


 let completeTask = document.createElement('button')
 completeTask.classList.add('complete-btn')
 completeTask.innerHTML = `<i class="fas fa-check"></i>`

 let deleteTask = document.createElement('button')
 deleteTask.classList.add('delete-btn')
 deleteTask.innerHTML = `<i class="fas fa-trash"></i>`


 
 taskArticle.appendChild(todoList)
 todoList.appendChild(task)
 todoList.appendChild(btnsDiv)
 btnsDiv.appendChild(completeTask)
 btnsDiv.appendChild(deleteTask)

notesContainer.appendChild(taskArticle)


deleteTask.addEventListener('click',function() {
  console.log('button clicked');
  taskArticle.remove()
 })


completeTask.addEventListener('click', function() {
 task.classList.toggle('line-through')
}) 
input.value = ''
 input.focus()


}else if(input.value === '') {
   let tooltipTimer = setTimeout(function() {
   tooltip.remove()
  },800)
 
  let todoList = document.querySelector('div')
  let tooltip = document.createElement('p')
  tooltip.textContent = 'Please enter task!!!'
  todoList.appendChild(tooltip)
  tooltip.style.backgroundColor = 'white'
  tooltip.style.width = '200px'
  tooltip.style.color = 'red' 
  tooltip.style.borderRadius = '7px'
  tooltip.style.margin = '9px'
}

input.value = ''
input.focus()
 
} 


let deleteAllBtn = document.querySelector('.btn-delete-all')

deleteAllBtn.addEventListener('click', function() {
 let taskArticle = document.querySelectorAll('.taskArticle')
  for(var i=0; i < taskArticle.length; i++) {
   taskArticle[i].remove()
  }
})
