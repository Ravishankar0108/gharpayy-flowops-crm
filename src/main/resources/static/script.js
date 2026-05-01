async function addLead() {
    const leadName = document.getElementById("name").value;
    const leadPhone = document.getElementById("phone").value;
    const leadLocation = document.getElementById("location").value;
    const leadBudget = document.getElementById("budget").value;
    const leadStatus = document.getElementById("status").value;
    const leadTemperature = document.getElementById("temperature").value;
    const leadAssignedTo = document.getElementById("assignedTo").value;

    if (!leadName || !leadPhone) {
        alert("Please enter name and phone");
        return;
    }

    const data = {
        name: leadName,
        phone: leadPhone,
        location: leadLocation,
        budget: leadBudget,
        status: leadStatus,
        temperature: leadTemperature,
        assignedTo: leadAssignedTo
    };

    await fetch("/api/leads", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("location").value = "";
    document.getElementById("budget").value = "";
    document.getElementById("assignedTo").value = "";

    loadLeads();
}

async function loadLeads() {
    const res = await fetch("/api/leads");
    const data = await res.json();

    document.getElementById("count").innerText = data.length;

    document.getElementById("leads").innerHTML = data.map(l => `
        <div class="lead-card">
            <h3>${l.name || "-"}</h3>
            <p><b>Phone:</b> ${l.phone || "-"}</p>
            <p><b>Status:</b> ${l.status || "-"}</p>
            <p><b>Location:</b> ${l.location || "-"}</p>
            <p><b>Budget:</b> ${l.budget || "-"}</p>
            <p><b>Temperature:</b> ${l.temperature || "-"}</p>
            <p><b>Assigned:</b> ${l.assignedTo || "-"}</p>
            <button class="delete-btn" onclick="deleteLead(${l.id})">Delete</button>
        </div>
    `).join("");
}

async function deleteLead(id) {
    await fetch("/api/leads/" + id, { method: "DELETE" });
    loadLeads();
}

async function addVisit() {
    const visitLeadName = document.getElementById("visitLead").value;
    const visitProperty = document.getElementById("property").value;
    const visitDate = document.getElementById("date").value;
    const visitTime = document.getElementById("time").value;

    if (!visitLeadName || !visitProperty || !visitDate || !visitTime) {
        alert("Please fill all visit details");
        return;
    }

    const data = {
        leadName: visitLeadName,
        propertyName: visitProperty,
        visitDate: visitDate,
        visitTime: visitTime
    };

    await fetch("/api/visits", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    document.getElementById("visitLead").value = "";
    document.getElementById("property").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";

    loadVisits();
}

async function loadVisits() {
    const res = await fetch("/api/visits");
    const data = await res.json();

    document.getElementById("visits").innerHTML = data.map(v => `
        <div class="lead-card">
            <h3>${v.leadName || "-"}</h3>
            <p><b>Property:</b> ${v.propertyName || "-"}</p>
            <p><b>Date:</b> ${v.visitDate || "-"}</p>
            <p><b>Time:</b> ${v.visitTime || "-"}</p>
            <button class="delete-btn" onclick="deleteVisit(${v.id})">Delete Visit</button>
        </div>
    `).join("");
}

async function deleteVisit(id) {
    await fetch("/api/visits/" + id, { method: "DELETE" });
    loadVisits();
}

loadLeads();
loadVisits();
