// This file initializes the simulation, sets up event listeners for user interactions, and manages the overall flow of the simulation.

document.addEventListener('DOMContentLoaded', () => {
    const gridElement = document.getElementById('grid');
    const agents = [];
    const agentCount = 9; // 3x3 grid

    // Initialize agents
    for (let i = 0; i < agentCount; i++) {
        agents.push(new Agent(i));
    }

    // Render agents in the grid
    function renderGrid() {
        gridElement.innerHTML = '';
        agents.forEach(agent => {
            const agentElement = document.createElement('div');
            agentElement.className = 'agent';
            agentElement.innerText = agent.getContent();
            agentElement.addEventListener('click', () => {
                agent.interact();
                renderGrid();
            });
            gridElement.appendChild(agentElement);
        });
    }

    // Start the simulation
    function startSimulation() {
        renderGrid();
        // Additional logic for simulation flow can be added here
    }

    // Event listener for user preferences (e.g., buttons for evolution)
    document.getElementById('evolve-button').addEventListener('click', () => {
        evolveAgents();
        renderGrid();
    });

    function evolveAgents() {
        // Logic to evolve agents based on user preferences
        Evolution.evolve(agents);
    }

    startSimulation();
});