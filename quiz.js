let score = 0;

function onSubmit() {
    if (document.getElementById("a3").checked == true) {
        score += 1;
    }
    if (document.getElementById("b3").checked == true) {
        score += 1;
    }
    if (document.getElementById("c4").checked == true) {
        score += 1;
    }
    if (document.getElementById("d1").checked == true) {
        score += 1;
    }
    if (document.getElementById("e3").checked == true) {
        score += 1;
    }
    if (document.getElementById("f1").checked == true) {
        score += 1;
    }

    window.location.href = `finalPage.html?score=${encodeURIComponent(score)}`
}