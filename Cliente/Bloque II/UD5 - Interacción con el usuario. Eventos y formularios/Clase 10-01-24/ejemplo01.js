document.getElementById("span").addEventListener("click", alertSpan1);
document.getElementById("span").addEventListener("mouseleave", alertSpan2);
document.getElementById("div").onclick = () => alert("Click en DIV");
document.getElementById("div").onmouseleave = function () {
    alert("Mouseleave en DIV");
};

function alertSpan1() {
    alert("Click en SPAN");
    event.stopPropagation();
}
function alertSpan2() {
    alert("Mouseleave en SPAN");
}