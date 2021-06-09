document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button")
    let btnText = document.createTextNode("Click HERE!");
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function (){
        alert("click me");

    })

    document.getElementById("newBtn").addEventListener("clcik", function() {
        let message = document.getElementById("textbox").nodeValue;
        alert(message)
    })

    document.getElementById("colorDiv").onmouseover = function() {
        let target = event.target
        target.style.backgroundColor = "green"
    }

    document.getElementById("colorDiv").onmouseout = function () {
        let target = event.target
        target.style.backgroundColor = '';
    }

    let item4 = document.getElementById("item4")
    let paragraph = document.createElement("p")
    paragraph.textContent = "Text changes colors when clicked"
    item4.appendChild(paragraph)

    paragraph.addEventListener("click", function (randomColors) {
        let ranColors = "#" + Math.floor(math.random) ().toString(16);
        return ranColors

        paragraph.style.color = randomColors();
    })
})