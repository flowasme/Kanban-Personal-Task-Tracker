const taskNameInput = document.getElementById('task-name')
const taskDescriptionInput = document.getElementById('task-description')
const taskDateTimeInput = document.getElementById('task-date-time')

const submitButton = document.getElementById('submit-button')
const taskForm = document.getElementById('task-form')

const toDoList = document.getElementById('to-do-card-list')
const inProgressList = document.getElementById('in-progress-card-list')
const doneList = document.getElementById('done-card-list')

let tasksObjectList = []

updateLists()

taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    tasksObjectList.push(
        new Task(taskNameInput.value, taskDescriptionInput.value, taskDateTimeInput.value)
    )
    updateLists()
})

function updateLists() {
    toDoList.innerHTML = ''
    inProgressList.innerHTML = ''
    doneList.innerHTML = ''

    let tasks = [false, false, false]

    tasksObjectList.forEach(task => {
            if (task.status === 'to-do') {
                toDoList.innerHTML += `
                    <div class="task-display-card">
                        <span class="task-display-title">Task title: ${task.title}</span>
                        <ul class="task-card-info-list">
                            <li class="task-card-info-list-item">Description: ${task.description}</li>
                            <li class="task-card-info-list-item">Due: ${task.dateTime}</li>
                            <li class="task-card-info-list-item">Created: ${task.creationDateTime}</li>
                        </ul>
                        <button id="mark-in-progress" onclick="changeStatus(${task.id}, 'in-progress')" class="update-task-status-button">In Progress</button>
                        <button id="mark-done" onclick="changeStatus(${task.id}, 'done')" class="update-task-status-button done-button">Done</button>
                        <button id="mark-done" onclick="deleteTask(${task.id})" class="delete-task-button">Delete Task</button>
                    </div>`
                tasks[0] = true
            } else if (task.status === 'in-progress') {
                inProgressList.innerHTML += `
                    <div class="task-display-card">
                        <span class="task-display-title">Task title: ${task.title}</span>
                        <ul class="task-card-info-list">
                            <li class="task-card-info-list-item">Description: ${task.description}</li>
                            <li class="task-card-info-list-item">Due: ${task.dateTime}</li>
                            <li class="task-card-info-list-item">Created: ${task.creationDateTime}</li>
                        </ul>
                        <button id="mark-to-do" onclick="changeStatus(${task.id}, 'to-do')" class="update-task-status-button">To Do</button>
                        <button id="mark-done" onclick="changeStatus(${task.id}, 'done')" class="update-task-status-button done-button">Done</button>
                        <button id="mark-done" onclick="deleteTask(${task.id})" class="delete-task-button">Delete Task</button>
                    </div>`
                tasks[1] = true
            } else if (task.status === 'done') {
                doneList.innerHTML += `
                    <div class="task-display-card">
                        <span class="task-display-title">Task title: ${task.title}</span>
                        <ul class="task-card-info-list">
                            <li class="task-card-info-list-item">Description: ${task.description}</li>
                            <li class="task-card-info-list-item">Due: ${task.dateTime}</li>
                            <li class="task-card-info-list-item">Created: ${task.creationDateTime}</li>
                        </ul>
                        <button id="mark-in-progress" onclick="changeStatus(${task.id}, 'to-do')" class="update-task-status-button">To Do</button>
                        <button id="mark-in-progress" onclick="changeStatus(${task.id}, 'in-progress')" class="update-task-status-button">In Progress</button>
                        <button id="mark-done" onclick="deleteTask(${task.id})" class="delete-task-button">Delete Task</button>
                    </div>`
                tasks[2] = true
            } 
    })

    if (tasks[0] === false) {
        toDoList.innerHTML = `
            <div class="empty-task-list-tag">
                No Tasks To Show Here...
            </div>`
    }

    if (tasks[1] === false) {
        inProgressList.innerHTML = `
            <div class="empty-task-list-tag">
                No Tasks To Show Here...
            </div>`
    }

    if (tasks[2] === false) {
        doneList.innerHTML = `
            <div class="empty-task-list-tag">
                No Tasks To Show Here...
            </div>`
    }
}

function changeStatus(taskId, newStatus) {
    const task = tasksObjectList.find(task => task.id === taskId)

    if (!task) return

    task.status = newStatus
    updateLists()
}

function deleteTask(taskId) {
    const taskIndex = tasksObjectList.findIndex(task => task.id === taskId)

    if (taskIndex === -1) return

    tasksObjectList.splice(taskIndex, 1)
    updateLists()
}

class Task {
    static taskCount = 0
    constructor(title, description, dateTime) {
        this.title = title
        this.description = description || 'Not Set...'
        this.dateTime = dateTime || 'Not Set...'
        this.creationDateTime = String(new Date()).split('GMT')[0]
        this.status = 'to-do'
        this.id = Task.taskCount
        Task.taskCount += 1
    }
}
