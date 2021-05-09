let filterColor = document.querySelectorAll(".filter");
let modalColors = document.querySelectorAll(".modal-color");
let mainContainer = document.querySelector(".main-container");
let modalContainer = document.querySelector(".modal_container");
let taskBox = document.querySelector(".task_box");
let plusBtn = document.querySelector(".plus");
let filterContainers = document.querySelectorAll(".filter_color-container");
let modalFlag = false;
let iColor = "black";
let colors = ["pink", "blue", "green", "black"];
let allTasks = [];

if(localStorage.getItem("allTasks")){
    let strArr = localStorage.getItem("allTasks");
    allTasks = JSON.parse(strArr);

    for (let i = 0; i < allTasks.length; i++) {
        createTicketFromLocalStorage(allTasks[i]);
    }
}

function createTicketFromLocalStorage(taskObj) {
    let {id,color,task} = taskObj;
    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class","ticket_container");
    taskContainer.innerHTML = 
    `<div class="ticket_color ${color}"></div>
        <div class="ticket_desc_conatiner">
            <div class="ticket_id">${id}</div>
            <div class="ticket_desc">${task}</div>
        </div>
    `;
    mainContainer.appendChild(taskContainer);

}

// see it
for (let i = 0; i < filterColor.length; i++) {
    filterColor[i].addEventListener("click", function () {
        console.log("sdjads");
        let classes = filterColor[i].getAttribute("class");
        // console.log(classes);
        let strArr = classes.split(" ");
        let color = strArr[1];
        let mainClasses = mainContainer.getAttribute("class");
        let mainCArr = mainClasses.split(" ");
        mainCArr[1] = color;
        mainClasses = mainCArr.join(" ");
        mainContainer.setAttribute("class", mainClasses);

    })
}

// adding task
plusBtn.addEventListener("click", function () {
    // let task = prompt("Enter Your Task");
    // let color = prompt("Color");
    // let taskContainer = document.createElement("div");
    // taskContainer.setAttribute("class", "input_text");
    // taskContainer.innerHTML = `
    //     <div class="ticket_desc_conatiner in">
    //     <div class="ticket_id">#ExampleId</div>
    //     <div class="ticket_desc">Example Text</div>
    //     </div>
    //     <div class="color_panel"></div>
    // `;
    // mainContainer.appendChild(taskContainer);
    // if (task != "" && color != "") {
    //     let taskContainer = document.createElement("div");
    //     taskContainer.setAttribute("class", "ticket_container");
    //     taskContainer.innerHTML = `
    //     <div class="ticket_color ${color}"></div>
    //     <div class="ticket_desc_conatiner">
    //         <div class="ticket_id">#ExampleId</div>
    //         <div class="ticket_desc">${task}</div>
    //     </div>
    // `;
    //     mainContainer.appendChild(taskContainer);
    // }
    modalContainer.style.display = "flex";  
})


taskBox.addEventListener("keydown",function (e) {
    if(e.key == "Enter" && taskBox.value != ""){
        let taskContainer = document.createElement("div");
        let task = taskBox.value;
        taskContainer.setAttribute("class", "ticket_container");
        let id = Math.random().toString(32).slice(2);
        taskContainer.innerHTML = `
        <div class="ticket_color ${iColor}"></div>
        <div class="ticket_desc_conatiner">
            <div class="ticket_id">${id}</div>
            <div class="ticket_desc">${task}</div>
        </div>
    `;
    mainContainer.appendChild(taskContainer);
    //clean up code
    
    let ticketObj  = {};
    ticketObj.task = task;
    ticketObj.color = iColor;
    ticketObj.id = id;

    allTasks.push(ticketObj);
    let strArr = JSON.stringify(allTasks);
    localStorage.setItem("allTasks",strArr);

    modalContainer.style.display = "none";
    taskBox.value = ""; 
    iColor = "black";
    addFunctionality(taskContainer); 
    }
})

// adding border to input task card color
for (let i = 0; i < modalColors.length; i++) {
    modalColors[i].addEventListener("click",function() {
        let color = modalColors[i].classList[1];
        iColor = color;

        for (let j = 0; j < modalColors.length; j++) {
            modalColors[j].classList.remove("border");
        }

        modalColors[i].classList.add("border");
    })
    
}

// adding new color to each task
function addFunctionality(taskContainer) {
    let ticketColor = taskContainer.querySelector(".ticket_color");
    ticketColor.addEventListener("click",function () {
        let cColor = ticketColor.classList[1];
        let idx = colors.indexOf(cColor);
        let newIdx = (idx + 1)%4;
        let newColor = colors[newIdx];
        ticketColor.classList.remove(cColor);
        ticketColor.classList.add(newColor);

    })
}

//  filtering colors
let prevColor = null;
for (let i = 0; i < filterContainers.length; i++) {
    filterContainers[i].addEventListener("click",function(){
        let child = filterContainers[i].children[0];
        let color = child.classList[1];
        if(prevColor == color){
            let ticketContainers = document.querySelectorAll(".ticket_container");
            for (let j = 0; j < ticketContainers.length; j++) {
                ticketContainers[j].style.display = "block";
            }
            prevColor = null;        
        }else{
            let ticketContainers = document.querySelectorAll(".ticket_container");
            for (let j = 0; j < ticketContainers.length; j++) {
                let ticketColor = ticketContainers[j].children[0];
                let myColor = ticketColor.classList[1];
                if(myColor == color){
                    ticketContainers[j].style.display = "block";
                }else{
                    ticketContainers[j].style.display = "none";
                }
            }
            prevColor = color;
        }
    })    
}

