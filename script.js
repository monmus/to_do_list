//loop over query selector - will try later to make js shorter

//To do


const taskForm = document.querySelector('.task_to_post');

let tasks = [
    "Zrobić zakupy",
    "Zapłacić za rachunki",
];

let tasksList = document.querySelector('.list_with_tasks');

//Add task on list

document.addEventListener('DOMContentLoaded', function () {
    getTask();
    showTasks();
});

function showTasks() {
   tasks.forEach(function(task) {
       addTask(task);
   }); 
};

function addTask(task) {
    let newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = prepareTask(task);

    //Add listener to 'done' class and delete task

    let btnDoneToggle = newTask.querySelector('.btn_done');
    let btnDltToggle = newTask.querySelector('.btn_dlt');
    
    
    btnDoneToggle.addEventListener('click', function() {
        toggleTaskComplete(this);
    });

    btnDltToggle.addEventListener('click', function() {
        deleteTask(this);
    });
    
    //Added task to the end of list
    
    tasksList.appendChild(newTask);
};

function prepareTask(task) {
    return '<div class="task_descrip">' +
                '<p class="task_text">'+task+'</p>' +
                '<i class="far fa-list-alt"></i>' +
            '</div>' +
            '<button type="button" class="btn btn_done"><i class="fas fa-check"></i></button>' +
            '<button type="button" class="btn btn_dlt"><i class="fas fa-times"></i></button>';
}

// Get task from form

function getTask() {
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let task = this.querySelector('.todo').value;
        var buttonAdd = document.getElementById("btn_add");
        var counter = document.getElementById("counter");
        
        if(task) {
           addTask(task); 
        };
        count = 2;
        buttonAdd.onclick = function() {
        count += 1;
        counter.innerHTML = '(' + count + ')';
            };
    });
};

//Function to change tasks class(done, delete)

function toggleTaskComplete(task) {
    task.classList.toggle('btn_did'); 
    let textDone = task.previousSibling;
    textDone.classList.toggle('task_done');
};

function deleteTask(task) {
    let taskToDel = task.closest('.task');
    task.closest('.list_with_tasks').removeChild(taskToDel);
};



//In progress

const taskForm1 = document.querySelector('.task_to_post1');

let tasks1 = [
    "Umyć okna",
    "Upiec ciasto",
];

let tasksList1 = document.querySelector('.list_with_tasks1');

//Add task on list

document.addEventListener('DOMContentLoaded', function () {
    getTask1();
    showTasks1();
});

function showTasks1() {
   tasks1.forEach(function(task1) {
       addTask1(task1);
   }); 
};

function addTask1(task1) {
    let newTask1 = document.createElement('div');
    newTask1.classList.add('task');
    newTask1.innerHTML = prepareTask1(task1);

    //Add listener to 'done' class and delete task

    let btnDoneToggle1 = newTask1.querySelector('.btn_done');
    let btnDltToggle1 = newTask1.querySelector('.btn_dlt');
    
    
    btnDoneToggle1.addEventListener('click', function() {
        toggleTaskComplete(this);
    });

    btnDltToggle1.addEventListener('click', function() {
        deleteTask(this);
    });

    
    tasksList1.appendChild(newTask1);
};


function prepareTask1(task1) {
    return '<div class="task_descrip">' +
                '<p class="task_text">'+task1+'</p>' +
                '<i class="fas fa-edit"></i>' +
            '</div>' +
            '<button type="button" class="btn btn_done"><i class="fas fa-check"></i></button>' +
            '<button type="button" class="btn btn_dlt"><i class="fas fa-times"></i></button>';   
}

// Get task from form

function getTask1() {
    taskForm1.addEventListener('submit', function(e) {
        e.preventDefault();
        let task1 = this.querySelector('input').value;
        var buttonAddProgress = document.getElementById("btn_add_progress");
        var counterProgress = document.getElementById("counter_progress");
        
        if(task1) {
           addTask1(task1); 
        };
        count = 2;
        buttonAddProgress.onclick = function() {
        count += 1;
        counterProgress.innerHTML = '(' + count + ')';
            };
    });
};

function toggleTaskComplete(task1) {
    task1.classList.toggle('btn_did'); 
    let textDone = task1.previousSibling;
    textDone.classList.toggle('task_done');
};

function deleteTask(task1) {
    let taskToDel = task1.closest('.task');
    task1.closest('.list_with_tasks1').removeChild(taskToDel);
};



//Completed

const taskForm2 = document.querySelector('.task_to_post2');

let tasks2 = [
    "Kupić wino",
];

let tasksList2 = document.querySelector('.list_with_tasks2');

//Add task on list

document.addEventListener('DOMContentLoaded', function () {
    getTask2();
    showTasks2();
});

function showTasks2() {
   tasks2.forEach(function(task2) {
       addTask2(task2);
   }); 
};

function addTask2(task2) {
    let newTask2 = document.createElement('div');
    newTask2.classList.add('task');
    newTask2.innerHTML = prepareTask2(task2);

     //Add listener to 'done' class and delete task

     let btnDoneToggle2 = newTask2.querySelector('.btn_done');
     let btnDltToggle2 = newTask2.querySelector('.btn_dlt');
     
     
     btnDoneToggle2.addEventListener('click', function() {
         toggleTaskComplete(this);
     });
 
     btnDltToggle2.addEventListener('click', function() {
         deleteTask(this);
     });
 

    
    tasksList2.appendChild(newTask2);
};


function prepareTask2(task2) {
    return '<div class="task_descrip">' +
                '<p class="task_text">'+task2+'</p>' +
                '<i class="fas fa-check-circle"></i>' +
            '</div>' +
            '<button type="button" class="btn btn_done"><i class="fas fa-check"></i></button>' +
            '<button type="button" class="btn btn_dlt"><i class="fas fa-times"></i></button>'; 
         
}

// Get task from form

function getTask2() {
    taskForm2.addEventListener('submit', function(e) {
        e.preventDefault();
        let task2 = this.querySelector('input').value;
        var buttonAddCompleted = document.getElementById("btn_add_completed");
        var counterCompleted = document.getElementById("counter_completed");
        
        if(task2) {
           addTask2(task2); 
        };

        count = 1;
        buttonAddCompleted.onclick = function() {
        count += 1;
        counterCompleted.innerHTML = '(' + count + ')';
            };
    });
};


function toggleTaskComplete(task2) {
    task2.classList.toggle('btn_did'); 
    let textDone = task1.previousSibling;
    textDone.classList.toggle('task_done');
};

function deleteTask(task2) {
    let taskToDel = task2.closest('.task');
    task2.closest('.list_with_tasks2').removeChild(taskToDel);
};


//Input displays

function myFunction() {
    document.querySelector('.todo').style.display = "block";
  }

function myFunction1() {
    document.querySelector('.in_progress').style.display = "block";
}

function myFunction2() {
     document.querySelector('.done').style.display = "block";
}


  