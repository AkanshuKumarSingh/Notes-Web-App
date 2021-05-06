let filterColor = document.querySelectorAll(".filter");
let mainContainer = document.querySelector(".main-container");
let plusBtn = document.querySelector(".plus");

for (let i = 0; i < filterColor.length; i++) {
    filterColor[i].addEventListener("click", function () {
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

plusBtn.addEventListener("click", function () {
    // let task = prompt("Enter Your Task");
    // let color = prompt("Color");
    let taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "input_text");
    taskContainer.innerHTML = `
        <div class="ticket_desc_conatiner in">
        <div class="ticket_id">#ExampleId</div>
        <div class="ticket_desc">Example Text</div>
        </div>
        <div class="color_panel"></div>
    `;
    mainContainer.appendChild(taskContainer);
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

})
