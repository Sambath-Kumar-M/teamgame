// ===== TEAM DATA =====
let teams = [
    {
        name: "Team Bark Rangers",
        score: 18,
        members: ["Alice", "Ben", "Carla", "Derek", "Emily", "Frank", "Grace", "Hank"]
    },
    {
        name: "Team Paw Patrol",
        score: 25,
        members: ["Mila", "John", "Ravi", "Sana", "Leo", "Megan", "Arun", "Tara"]
    },
    {
        name: "Team Hot Dogs",
        score: 10,
        members: ["Team member 1", "Team member 2", "Member 3", "Member 4", "Member 5", "Member 6", "Member 7", "Member 8"]
    },
    {
        name: "Team Fluffy Force",
        score: 12,
        members: ["A", "B", "C", "D", "E", "F", "G", "H"]
    },
    {
        name: "Team Wag Masters",
        score: 30,
        members: ["U1", "U2", "U3", "U4", "U5", "U6", "U7", "U8"]
    },
    {
        name: "Team Chew Crew",
        score: 20,
        members: ["K1", "K2", "K3", "K4", "K5", "K6", "K7", "K8"]
    },
];

// ===== RENDER TEAMS =====
function updateTeams() {
    let container = document.getElementById("team-container");
    container.innerHTML = "";

    // Sort teams by score (highest first)
    teams.sort((a, b) => b.score - a.score);

    teams.forEach(team => {
        let div = document.createElement("div");
        div.className = "team-box";
        div.innerHTML = `
            <div class="team-title">🐾 ${team.name}</div>
            <div class="score">Score: ${team.score}</div>
            <div class="members"><strong>Members:</strong> ${team.members.join(", ")}</div>
        `;
        container.appendChild(div);
    });
}

updateTeams();
