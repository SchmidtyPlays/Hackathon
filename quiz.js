let score = 0;

function onSubmit() {
    if (document.getElementById("a3").checked == true) {
        score += 1;
    }
    if (document.getElementById("b1").checked == true) {
        score += 1;
    }

    window.location.href = `finalPage.html?score=${encodeURIComponent(score)}`
}