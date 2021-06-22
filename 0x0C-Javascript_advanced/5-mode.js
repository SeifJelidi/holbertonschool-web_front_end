function changeMode (size, weight, transform, background, color) {
    let body = document.getElementsByTagName("body")[0];
        body.style.fontSize = size;
        body.style.fontWeight = weight;
        body.style.textTransform = transform;
        body.style.backgroundColor = background;
        body.style.color = color;
    }
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    let paragraph = document.createElement("paragraph");
        paragraph.innerText = "Welcome Holberton!";
        document.body.appendChild(paragraph);

    let spbtn = document.createElement("button");
    spbtn.setAttribute("id", "spbtn");
    spbtn.innerText = "Spooky";
    document.body.appendChild(spbtn);
    document.getElementById("spbtn").onclick = spooky;

    let dabtn = document.createElement("button");
        dabtn.setAttribute("id", "dabtn");
        dark_btn.innerText = "Dark mode";
        document.body.appendChild(dabtn);
        document.getElementById("dabtn").onclick = darkmode;

    let scrbtn = document.createElement("button");
        scrbtn.setAttribute("id", "scrbtn");
        scrbtn.innerText = "Scream mode";
        document.body.appendChild(scrbtn);
        document.getElementById("scrbtn").onclick = screamMode;
}
main();
