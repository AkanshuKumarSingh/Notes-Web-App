let filterColor = document.querySelectorAll(".filter");
let mainContainer = document.querySelector(".main-container");

for (let i = 0; i < array.length; i++) {
    filterColor[i].addEventListener("click",function (){
        
        let classes = filterColor[i].getAttribute("class");
        let strArr = classes.split(" ");
        let color = strArr[1];
        let mainClasses = mainContainer.getAttribute("class");
        let mainCArr = classes.split(" ");
        mainCArr[1] = color;
        mainClasses = mainCArr.join(" ");
        mainContainer.setAttribute("class",mainClasses);
    });
}

