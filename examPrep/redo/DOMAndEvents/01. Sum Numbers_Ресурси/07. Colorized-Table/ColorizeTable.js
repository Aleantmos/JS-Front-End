function colorize() {
    const trEvenRows = document.querySelectorAll('tr:nth-child(even)');

    for (const row of trEvenRows) {
        row.style.backgroundColor = 'Teal';
    }

}