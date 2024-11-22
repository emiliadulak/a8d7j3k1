// Funkcja do obliczeń
function calculate() {
    const restrictionDays = document.getElementById("restrictionDays").value;
    const resultElement = document.getElementById("result");
    resultElement.innerText = ""; // Czyszczenie poprzedniego wyniku

    // Walidacja wejścia
    if (!restrictionDays) {
        resultElement.innerText = "Proszę wprowadzić liczbę dni.";
        resultElement.style.color = "red";
        return;
    }
    if (restrictionDays <= 0 || isNaN(restrictionDays)) {
        resultElement.innerText = "Wartość musi być liczbą dodatnią większą od zera.";
        resultElement.style.color = "red";
        return;
    }

    // Przeliczanie dni pozbawienia wolności
    const imprisonmentDays = restrictionDays * 3;

    // Wyświetlanie wyniku
    resultElement.innerText = `${restrictionDays} dni ograniczenia wolności to równoważne ${imprisonmentDays} dni pozbawienia wolności.`;
    resultElement.style.color = "green";
}

// Obsługa klawisza Enter
document.getElementById("restrictionDays").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calculate();
    }
});