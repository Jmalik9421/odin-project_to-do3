import './assets/style.css'

// render html elements in dom
const body = document.querySelector('body');

// app-container
const appContainer = document.createElement('div');
appContainer.id = 'app-container';
body.appendChild(appContainer);

// modal-primary-container
const modalPrimaryContainer = document.createElement('div');
modalPrimaryContainer.classList.add('modal-primary-container', 'hide'); 
appContainer.appendChild(modalPrimaryContainer);

// modal-primary-container > modal-container
const modalContainer = document.createElement('div');
modalContainer.classList.add('modal-container');
modalPrimaryContainer.appendChild(modalContainer);

// modal > modal-content
const modal = document.createElement('div');
modal.classList.add('modal');
modalContainer.appendChild(modal);

// modal-primary-container > modal-container > modal > title-container
const modalTitleContainer = document.createElement('div');
modalTitleContainer.classList.add('modal-title-container');
modal.appendChild(modalTitleContainer);

// modal-primary-container > modal-container > modal > title-container > title-label
const titleLabel = document.createElement('label');
titleLabel.classList.add('modal-title-label');
titleLabel.for = 'title-input';
titleLabel.textContent = 'Title';
modalTitleContainer.appendChild(titleLabel);

// modal-primary-container > modal-container > modal > title-container > title-input
const titleInput = document.createElement('textarea');
titleInput.classList.add('modal-title-input');
titleInput.id = 'title-input';
modalTitleContainer.appendChild(titleInput);

// modal-primary-container > modal-container > modal > description-container
const modalDescContainer = document.createElement('div');
modalDescContainer.classList.add('modal-desc-container');
modal.appendChild(modalDescContainer);

// modal-primary-container > modal-container > modal > description-container > description-label
const descLabel = document.createElement('label');
descLabel.classList.add('modal-desc-label');
descLabel.for = 'desc-input';
descLabel.textContent = 'Description';
modalDescContainer.appendChild(descLabel);

// modal-primary-container > modal-container > modal > title-container > desc-input
const descInput = document.createElement('textarea');
descInput.classList.add('modal-desc-input');
modalDescContainer.appendChild(descInput);

// modal-primary-container > modal-container > modal > btn-container;
const modalBtnContainer = document.createElement('div');
modalBtnContainer.classList.add('modal-btn-container');
modal.appendChild(modalBtnContainer);

// modal-primary-container > modal-container > modal > cancel-btn;
const cancelBtn = document.createElement('button');
cancelBtn.classList.add('cancel-btn', 'text-btn');
cancelBtn.textContent = 'Cancel';
modalBtnContainer.appendChild(cancelBtn);

// modal-primary-container > modal-container > modal > submit-btn;
const submitBtn = document.createElement('button');
submitBtn.classList.add('submit-btn', 'text-btn');
submitBtn.textContent = 'Submit';
modalBtnContainer.appendChild(submitBtn);

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

// project-container > project-list | logic
function renderProject() {
    projectList.addEventListener('click', (e) => {
        const project = e.target;

        taskTitle.textContent = project.textContent;
        subtitle.textContent = projects[project.textContent];

        optionsMenu.classList.add('hide');
        optionsEditBtn.classList.add('hide');
        optionsDeleteBtn.classList.add('hide');
    });
}

try {
    renderProject();
}
catch (err) {
    console.error('no projects listed');
};

// new-project functions
function displayModal(submitType) {
    modalPrimaryContainer.classList.remove('hide');
    submitBtn.classList.add(submitType);
};

function hideModal() {
    modalPrimaryContainer.classList.add('hide');
    
    if (submitBtn.classList.contains('add-project')) {
        submitBtn.classList.remove('add-project');
    } else if (submitBtn.classList.contains('edit-project')) {
        submitBtn.classList.remove('edit-project');
    };

    optionsMenu.classList.add('hide');
    optionsEditBtn.classList.add('hide');
    optionsDeleteBtn.classList.add('hide');
}

function addProject() {
    // add to projects obj
    projects[titleInput.value] = descInput.value;
    console.log(projects);
    
    // render html element
    const projectListItem = document.createElement('li');
    projectListItem.textContent = titleInput.value;
    projectListItem.dataset.project = titleInput.value;
    projectList.appendChild(projectListItem);

    // update task-title and subtitle
    taskTitle.textContent = titleInput.value;
    subtitle.textContent = descInput.value;

    // clear modal
    titleInput.value = '';
    descInput.value = '';
    hideModal();
};

// projects obj
let projects = {};

// project-container > new-project-btn | logic
newProjectBtn.addEventListener('click', () => {
    displayModal('add-project');
    cancelBtn.addEventListener('click', hideModal);
    submitBtn.addEventListener('click', () => {
        if (submitBtn.classList.contains('add-project')) {
            addProject();
        };
    });
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

// task-container > title-container > title-container-secondary > options-container > options-btn | logic
optionsBtn.addEventListener('click', () => {
    optionsMenu.classList.toggle('hide');
    optionsEditBtn.classList.toggle('hide');
    optionsDeleteBtn.classList.toggle('hide');
});

// task-container > title-container > title-container-secondary > options-container > options-menu
const optionsMenu = document.createElement('div');
optionsMenu.classList.add('options-menu', 'hide');
optionsContainer.appendChild(optionsMenu);

// task-container > title-container > title-container-secondary > options-container > options-menu > edit-btn
const optionsEditBtn = document.createElement('button');
optionsEditBtn.classList.add('hide');
optionsEditBtn.id = 'options-edit-btn';
optionsEditBtn.textContent = 'Edit';
optionsMenu.appendChild(optionsEditBtn);

// task-container > title-container > title-container-secondary > options-container > options-menu > edit-btn | logic
function editProject() {
    if (projects.length > 0) {
        // add new key to projects obj
        projects[titleInput.value] = descInput.value;
        
        // remove old key from project obj
        delete projects[taskTitle.textContent];
        console.log(projects);
        
        // update html elements
        const projectListItem = document.querySelector(`[data-project="${taskTitle.textContent}"]`);
        projectListItem.textContent = titleInput.value;
        taskTitle.textContent = titleInput.value;
        subtitle.textContent = descInput.value;
    } else {
        // update html elements
        taskTitle.textContent = titleInput.value;
        subtitle.textContent = descInput.value;
    }

    // clear modal
    titleInput.value = '';
    descInput.value = '';
    hideModal();
    optionsMenu.classList.add('hide');
    optionsEditBtn.classList.add('hide');
    optionsDeleteBtn.classList.add('hide');
};

try {
    optionsEditBtn.addEventListener('click', () => {
        displayModal('edit-project');
        submitBtn.addEventListener('click', () => {
            if (submitBtn.classList.contains('edit-project')) {
                editProject();
            };
        });
        cancelBtn.addEventListener('click', hideModal);
    });
} catch (err) {
    console.error('project does not exist');
};

// task-container > title-container > title-container-secondary > options-container > options-menu > delete-btn
const optionsDeleteBtn = document.createElement('button');
optionsDeleteBtn.classList.add('hide');
optionsDeleteBtn.id = 'options-delete-btn';
optionsDeleteBtn.textContent = 'Delete';
optionsMenu.appendChild(optionsDeleteBtn);

// task-container > title-container > title-container-secondary > options-container > options-menu > delete-btn | logic
function deleteProject() {
    // delete key value pair from projects obj
    delete projects[taskTitle.textContent];

    // remove project from project-list
    const projectListItem = document.querySelector(`[data-project="${taskTitle.textContent}"]`);
    projectListItem.remove();

    // reset task-title and subtitle to default
    taskTitle.textContent = 'My Project';
    subtitle.textContent = 'Rest and recreation';
};

try {
    optionsDeleteBtn.addEventListener('click', deleteProject);
} catch (err) {
    console.error('project does not exist');
};

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

// task-container > task-list
const taskList = document.createElement('ul');
taskList.id = 'task-list';
taskContainer.appendChild(taskList);



// i am here
// then need to implement code for when default 'My Project' title and 'Rest and recreation' subtitle are edited, projects obj is not updated, no new project is added. Only the textContent for the title and subtitle should be changed 
//      i need to create a default project by the same name of 'My Project'. Therefore, the app loads with a project which you can edit / delete
//      i need to implement logic to remove all children under task-container (if all projects are deleted) and to render them when atleast 1 project exists. 
// then need to create a tasks obj and append this to the value of each project key in the projects obj
// then need to create a input field when adding a new task. +new task button should be repurposed to the submit button. a new task should be rendered to the task list. the list of tasks should be saved to the tasks obj for that project

