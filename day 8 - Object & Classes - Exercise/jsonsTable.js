function jsonsTable(input) {

    let html = [];
    html.push('<table>')

    input.forEach(line => {
        let person = JSON.parse(line);
        html.push('    <tr>')
        for (let value of Object.values(person)) {
            html.push(`        <td>${value}</td>`)
        }
        html.push('    </tr>')
    });

    html.push('</table>')
    console.log(html.join('\n'));
}
jsonsTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);