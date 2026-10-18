const params = new URLSearchParams(window.location.search);
const score = params.get("score");

document.getElementById("finalScore").innerHTML = score + "/10"