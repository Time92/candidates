document.addEventListener('DOMContentLoaded', function () {
    fetchCandidates();
});

async function fetchCandidates() {
    try {
        const response = await fetch('/candidates');  // Assuming Python server is running on localhost:5000
        const candidates = await response.json();

        const candidatesList = document.getElementById('candidates-list');
        candidates.forEach(candidate => {
            const candidateCard = createCandidateCard(candidate);
            candidatesList.appendChild(candidateCard);
        });
    } catch (error) {
        console.error('Error fetching candidates:', error);
    }
}

function createCandidateCard(candidate) {
    const card = document.createElement('div');
    card.classList.add('candidate-card');

    const name = document.createElement('div');
    name.classList.add('candidate-name');
    name.textContent = `Name: ${candidate.name}`;
    card.appendChild(name);

    const role = document.createElement('div');
    role.textContent = `Role: ${candidate.role}`;
    card.appendChild(role);

    const party = document.createElement('div');
    party.classList.add('party-affiliation');
    party.textContent = `Party: ${candidate.party}`;
    card.appendChild(party);

    return card;
}
