function jsonToHTMLTable(input) {

    let html = '<table>';

    html += `<tr>`
    html += Object.keys(input[0]).map(x => `<th>${x}</th>`).join('')
    html += `</tr>`;


    for (let line of input) {

        let values = Object.values(line);
        html += '<tr>';
        html += values.map(x => `<td>${x}</td>`).join('');
        html += '</tr>';

    }
    html += '</table>;'

    return html;
}
console.log(jsonToHTMLTable([{
        "Name": "Pesho <div>-a",
        "Age": 20,
        "City": "Sofia"
    }, {
        "Name": "Gosho",
        "Age": 18,
        "City": "Plovdiv"
    }, {
        "Name": "Angel",
        "Age": 18,
        "City": "Veliko Tarnovo"
    }]

));