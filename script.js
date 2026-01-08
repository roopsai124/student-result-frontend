const backendURL = "http://localhost:3000";

function addResult() {
    const name = document.getElementById("name").value;
    const marks = document.getElementById("marks").value;

    fetch(`${backendURL}/add-result`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, marks })
    })
    .then(res => res.json())
    .then(() => {
        loadResults();
    });
}

function loadResults() {
    fetch(`${backendURL}/results`)
        .then(res => res.json())
        .then(data => {
            const table = document.getElementById("resultTable");
            table.innerHTML = "";
            data.forEach(s => {
                table.innerHTML += `
                    <tr>
                        <td>${s.name}</td>
                        <td>${s.marks}</td>
                        <td>${s.grade}</td>
                    </tr>
                `;
            });
        });
}

loadResults();
