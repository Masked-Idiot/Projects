def cool_button(event):
    output = document.querySelector("#output")
    thingy = document.createElement("p")
    thingy.innerHTML = "this is a certified cool thingy"
    output.appendChild(thingy)