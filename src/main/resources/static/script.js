async function addLead() {
    const data = {
        name: name.value,
        phone: phone.value,
        location: location.value,
        budget: budget.value,
        status: status.value,
        temperature: temperature.value,
        assignedTo: assignedTo.value
    };

    await fetch("/api/leads", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    loadLeads();
}

async function loadLeads() {
    const res = await fetch("/api/leads");
    const data = await res.json();

    count.innerText = data.length;

    leads.innerHTML = data.map(l => `
        <div class="lead-card">
            <h3>${l.name}</h3>
            <p><b>Phone:</b> ${l.phone}</p>
            <p><b>Status:</b> ${l.status}</p>
            <p><b>Location:</b> ${l.location || "-"}</p>
            <p><b>Budget:</b> ${l.budget || "-"}</p>
            <p><b>Temperature:</b> ${l.temperature || "-"}</p>
            <p><b>Assigned:</b> ${l.assignedTo || "-"}</p>

            <button onclick="deleteLead(${l.id})">Delete</button>
        </div>
    `).join("");
}

async function deleteLead(id) {
    await fetch("/api/leads/" + id, { method: "DELETE" });
    loadLeads();
}

async function addVisit() {
    const data = {
        leadName: visitLead.value,
        propertyName: property.value,
        visitDate: date.value,
        visitTime: time.value
    };

    await fetch("/api/visits", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    loadVisits();
}

async function loadVisits() {
    const res = await fetch("/api/visits");
    const data = await res.json();

    visits.innerHTML = data.map(v => `
        <div class="lead-card">
            <h3>${v.leadName}</h3>
            <p>${v.propertyName}</p>
            <p>${v.visitDate} ${v.visitTime}</p>
        </div>
    `).join("");
}

loadLeads();
loadVisits();