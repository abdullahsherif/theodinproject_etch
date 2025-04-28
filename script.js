// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const P = document.createElement("p");
P.classList.add("content");
P.textContent = "hey im red";

const h3 = document.createElement("h3");
h3.classList.add("content");
h3.textContent = "I'm a blue h3!";

const div = document.createElement("div");
div.classList.add("content");
div.style.border = "black";
div.style.backgroundColor = "pink";
div.style.border = "thick solid black";

const div2 = document.createElement("h1");
div2.classList.add("content");
div2.textContent = "I'm in a div";

div.appendChild(div2);

container.appendChild(P);0
container.appendChild(h3);
container.appendChild(content);
container.appendChild(div);