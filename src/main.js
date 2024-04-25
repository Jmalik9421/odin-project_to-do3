import './assets/style.css'

// render html elements in dom
const body = document.querySelector('body');

// app-container
const appContainer = document.createElement('div');
appContainer.id = 'app-container';
body.appendChild(appContainer);

// project-container
const projectContainer = document.createElement('div');
projectContainer.id = 'project-container';
appContainer.appendChild(projectContainer)

// project-container > title
const appTitle = document.createElement('h1')
appTitle.textContent = 'Project Master';
appTitle.classList.add('title');
projectContainer.appendChild(appTitle);

// project-container > new-project-btn
const newProjectBtn = document.createElement('button');
newProjectBtn.id = 'new-project-btn';
newProjectBtn.classList.add('text-btn');
newProjectBtn.textContent = '+ NEW PROJECT';
projectContainer.appendChild(newProjectBtn);

// project-container > project-list
const projectList = document.createElement('ul');
projectList.id = 'project-list';
projectContainer.appendChild(projectList);

// project-container > project-list > list-item
const projectListItem = document.createElement('li');
projectListItem.textContent = 'My Project 1';
projectList.appendChild(projectListItem);

// task-container
const taskContainer = document.createElement('div');
taskContainer.id = 'task-container';
appContainer.appendChild(taskContainer);

// task-container > title-container
const titleContainer = document.createElement('div');
titleContainer.classList.add('title-container');
taskContainer.appendChild(titleContainer);

// task-container > title-container > title-container-secondary
const titleContainerSecondary = document.createElement('div');
titleContainerSecondary.classList.add('title-container-secondary');
titleContainer.appendChild(titleContainerSecondary);

// task-container > title-container > title-container-secondary > title
const taskTitle = document.createElement('h1');
taskTitle.classList.add('title');
taskTitle.textContent = 'My Project';
titleContainerSecondary.appendChild(taskTitle);

// task-container > title-container > title-container-secondary > options-container
const optionsContainer = document.createElement('div');
optionsContainer.classList.add('options-container');
titleContainerSecondary.appendChild(optionsContainer);

// task-container > title-container > title-container-secondary > options-container > options-btn
const optionsBtn = document.createElement('div');
optionsBtn.classList.add('options-btn');
optionsContainer.appendChild(optionsBtn);

// task-container > title-container > title-container-secondary > options-container > options-menu
const optionsMenu = document.createElement('div');
optionsMenu.classList.add('options-menu');
optionsContainer.appendChild(optionsMenu);

// task-container > title-container > title-container-secondary > options-container > options-menu > edit-btn
const optionsEditBtn = document.createElement('button');
optionsEditBtn.id = 'options-edit-btn';
optionsEditBtn.textContent = 'Edit';
optionsMenu.appendChild(optionsEditBtn);

// task-container > title-container > title-container-secondary > options-container > options-menu > delete-btn
const optionsDeleteBtn = document.createElement('button');
optionsDeleteBtn.id = 'options-delete-btn';
optionsDeleteBtn.textContent = 'Delete';
optionsMenu.appendChild(optionsDeleteBtn);

// task-conatiner > title-container > subtitle
const subtitle = document.createElement('p');
subtitle.classList.add('subtitle');
subtitle.textContent = 'Rest and recreation';
titleContainer.appendChild(subtitle);

// task-container > new-task-btn
const newTaskBtn = document.createElement('button');
newTaskBtn.id = 'new-task-btn';
newTaskBtn.classList.add('text-btn');
newTaskBtn.textContent = '+ NEW TASK';
taskContainer.appendChild(newTaskBtn);

// task-container > task-list
const taskList = document.createElement('ul');
taskList.id = 'task-list';
taskContainer.appendChild(taskList);

// task-container > task-list > list-item
for (let i=0; i<3; i++) {
    const taskListItem = document.createElement('li');

    const taskCompletionBtn = document.createElement('button');
    taskCompletionBtn.classList.add('task-completion-btn');
    
    const taskText = document.createElement('p');
    taskText.textContent = `My Task ${i+1}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');

    if (i===0) {
        taskListItem.classList.add('checked');
        taskCompletionBtn.classList.add('task-completion-btn-checked');
        taskText.classList.add('task-text-checked');
        deleteBtn.classList.add('delete-btn-checked');
    };


    taskListItem.appendChild(taskCompletionBtn);
    taskListItem.appendChild(taskText);
    taskListItem.appendChild(deleteBtn);
    taskList.appendChild(taskListItem);
};

