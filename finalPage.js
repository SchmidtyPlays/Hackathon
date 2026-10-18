const params = new URLSearchParams(window.location.search);
const score = params.get("score");

document.getElementById("finalScore").innerHTML = score + "/6"

if (score == 6) {
    document.getElementById("title").innerHTML = "Good Job! You can now exit."
}