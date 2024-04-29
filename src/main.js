import './assets/style.css'

// render html elements in dom
const body = document.querySelector('body');

// app-container
const appContainer = document.createElement('div');
appContainer.id = 'app-container';
body.appendChild(appContainer);

// modal
const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container', 'hide');
appContainer.appendChild(modalContainer);

// modal > modal-content
const modal = document.createElement('div');
modal.classList.add('modal');
modalContainer.appendChild(modal);

// modal-container > modal > title-container
const modalTitleContainer = document.createElement('div');
modalTitleContainer.classList.add('modal-title-container');
modal.appendChild(modalTitleContainer);

// modal-container > modal > title-container > title-label
const titleLabel = document.createElement('label');
titleLabel.classList.add('modal-title-label');
titleLabel.for = 'title-input';
titleLabel.textContent = 'Title';
modalTitleContainer.appendChild(titleLabel);

// modal-container > modal > title-container > title-input
const titleInput = document.createElement('input');
titleInput.classList.add('modal-title-input');
titleInput.id = 'title-input';
titleInput.type = 'text';
titleInput.name = 'project-title';
titleInput.placeholder = 'New project title...';
titleInput.required = true;
modalTitleContainer.appendChild(titleInput);

// modal-container > modal > description-container
const modalDescContainer = document.createElement('div');
modalDescContainer.classList.add('modal-desc-container');
modal.appendChild(modalDescContainer);

// modal-container > modal > description-container > description-label
const descLabel = document.createElement('label');
descLabel.classList.add('modal-desc-label');
descLabel.for = 'desc-input';
descLabel.textContent = 'Description';
modalDescContainer.appendChild(descLabel);

// modal-container > modal > title-container > desc-input
const descInput = document.createElement('input');
descInput.classList.add('modal-desc-input');
descInput.id = 'desc-input';
descInput.type = 'text';
descInput.name = 'project-desc';
descInput.required = false;
modalDescContainer.appendChild(descInput);

// modal-container > modal > cancel-btn;
const cancelBtn = document.createElement('button');
cancelBtn.classList.add('cancel-btn');
cancelBtn.textContent = 'Cancel';
cancelBtn.addEventListener('click', () => {
    modalContainer.classList.add('hide');
});
modal.appendChild(cancelBtn);

// modal-container > modal > submit-btn;
const submitBtn = document.createElement('button');
submitBtn.classList.add('submit-btn');
submitBtn.textContent = 'Submit';
modal.appendChild(submitBtn);

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

// project-container > new-project-btn | logic
newProjectBtn.addEventListener('click', (e) => {
    modalContainer.classList.remove('hide');
    // const projectListItem = document.createElement('li');
    // projectListItem.textContent = 'My Project 1';
    // projectList.appendChild(projectListItem);
});

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
optionsMenu.classList.add('options-menu', 'hide'); // hide by default
optionsContainer.appendChild(optionsMenu);

// task-container > title-container > title-container-secondary > options-container > options-menu > edit-btn
const optionsEditBtn = document.createElement('button');
optionsEditBtn.classList.add('hide'); // hide by default
optionsEditBtn.id = 'options-edit-btn';
optionsEditBtn.textContent = 'Edit';
optionsMenu.appendChild(optionsEditBtn);

// task-container > title-container > title-container-secondary > options-container > options-menu > delete-btn
const optionsDeleteBtn = document.createElement('button');
optionsDeleteBtn.classList.add('hide'); // hide by default
optionsDeleteBtn.id = 'options-delete-btn';
optionsDeleteBtn.textContent = 'Delete';
optionsMenu.appendChild(optionsDeleteBtn);

// task-container > options-btn | logic
optionsBtn.addEventListener('click', () => {
    optionsMenu.classList.toggle('hide');
    optionsEditBtn.classList.toggle('hide');
    optionsDeleteBtn.classList.toggle('hide');
});

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

// task-container > new-task-btn | logic
function renderTaskListItem() {
    const taskListItem = document.createElement('li');

    const taskCompletionBtn = document.createElement('button');
    taskCompletionBtn.classList.add('task-completion-btn');
    
    const taskText = document.createElement('p');
    taskText.textContent = `My Task 1`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');

    taskListItem.appendChild(taskCompletionBtn);
    taskListItem.appendChild(taskText);
    taskListItem.appendChild(deleteBtn);
    taskList.appendChild(taskListItem);

    return { taskListItem, taskCompletionBtn, taskText, deleteBtn };
};

try {
    newTaskBtn.addEventListener('click', () => {
        const { taskListItem, taskCompletionBtn, taskText, deleteBtn } = renderTaskListItem();
        
        taskCompletionBtn.addEventListener('click', () => {
            taskListItem.classList.toggle('checked');
            taskCompletionBtn.classList.toggle('task-completion-btn-checked');
            taskText.classList.toggle('task-text-checked');
            deleteBtn.classList.toggle('delete-btn-checked');
        });

        deleteBtn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
    });
}
catch (err) {
    console.error('task-list-item does not exist');
};