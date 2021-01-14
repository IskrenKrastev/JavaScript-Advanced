function scoreToHtml(input) {
    let html = [];
    html.push('<table>')
    html.push('    <tr><th>name</th><th>score</th></tr>')
    input = JSON.parse(input)

    function escapeHTML(str) {
        "use strict";
        str = str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        return str;
    }

    for (let line of input) {
        let values = Object.values(line);
        let [name, score] = values
        score = Number(score);

        // if (name.includes('&')) {
        //     while (name.includes('&')) {
        //         name = name.replace('&', '&amp;')
        //     }
        // }

        // if (name.includes('<')) {
        //     while (name.includes('<')) {
        //         name = name.replace('<', '&lt;')
        //     }
        // }

        // if (name.includes('>')) {
        //     while (name.includes('>')) {
        //         name = name.replace('>', '&gt;');
        //     }
        // }

        // if (name.includes('"')) {
        //     while (name.includes('"')) {
        //         name = name.replace('"', '&quot;')
        //     }
        // }

        // if (name.includes("'")) {
        //     while (name.includes("'")) {
        //         name = name.replace("'", '&apos;')
        //     }
        // }
        html.push(`    <tr><td>${escapeHTML(name)}</td><td>${score}</td></tr>`)
    }

    html.push('</table>')

    console.log(html.join('\n'))
}
scoreToHtml([{
    "name": "Pesho",
    "score": 479
}, {
    "name": "Gosho",
    "score": 205
}])