document.querySelectorAll("ul > li").forEach((i) => {
  i.onclick = () => {
    i.classList.toggle("active");
  };
});
document.querySelectorAll("li").forEach((i) => {
  a = document.createElement("p");
  i.appendChild(a);
  a.innerHTML = "<p></p><p>" + i.getAttribute("finished") + "</p>";
  a.children[0].style =
    `  
    transform: scaleX(` +
    i.getAttribute("finished") +
    `);`
    if (parseInt(i.getAttribute("finished")) <= 40) {
      a.children[0].style.backgroundColor = "rgba(180, 0, 0, 1)";
    }
    if (40 <= parseInt(i.getAttribute("finished")) && parseInt(i.getAttribute("finished")) <= 60) {
      a.children[0].style.backgroundColor = "rgba(255, 153, 0, 1)";
    }
    if (60 <= parseInt(i.getAttribute("finished")) && parseInt(i.getAttribute("finished")) <= 80) {
      a.children[0].style.backgroundColor = "rgba(255, 247, 0, 1)";
    }
    if (80 <= parseInt(i.getAttribute("finished")) && parseInt(i.getAttribute("finished")) <= 90) {
      a.children[0].style.backgroundColor = "rgba(188, 212, 0, 1)";
    }
    if (90 <= parseInt(i.getAttribute("finished")) && parseInt(i.getAttribute("finished")) <= 100) {
      a.children[0].style.backgroundColor = "rgba(0, 240, 0, 1)";
    }
});
