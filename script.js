function convertCoordinates() {
    const inputCoordinates = document.getElementById('inputCoordinates').value;
    const outputCoordinates = document.getElementById('outputCoordinates');

    // Rozdělí vstupní souřadnice na řádky
    const lines = inputCoordinates.split('\n');
    let output = '';

    // Pro každý řádek provede převod a přidá výsledek
    for (const line of lines) {
        const match = line.match(/[NS]\s?(\d+)°\s?(\d+\.\d+)\s?[EW]\s?(\d+)°\s?(\d+\.\d+)/);
        if (match) {
            const latitude = parseFloat(match[1]) + parseFloat(match[2]) / 60;
            const longitude = parseFloat(match[3]) + parseFloat(match[4]) / 60;
            output += `${latitude.toFixed(7)}, ${longitude.toFixed(7)}\n`;
        }
    }

    outputCoordinates.value = output.trim();
}

function resetCoordinates() {
    document.getElementById('inputCoordinates').value = '';
    document.getElementById('outputCoordinates').value = '';
}
