// This file manages the 3x3 grid layout. It handles the placement of agents in the grid, updates the display based on user selections, and facilitates the clearing and reproduction of agents after each round.

const gridContainer = document.getElementById('grid-container');
const gridSize = 3;
let agents = [];

// Initialize the grid with empty cells
function initializeGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.position = `${i}-${j}`;
            gridContainer.appendChild(cell);
        }
    }
}

// Place agents in the grid
function placeAgents() {
    agents.forEach(agent => {
        const position = agent.position.split('-');
        const cell = document.querySelector(`[data-position="${position[0]}-${position[1]}"]`);
        if (cell) {
            cell.innerHTML = agent.render();
        }
    });
}

// Update the grid display
function updateGrid() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.innerHTML = ''; // Clear cell
    });
    placeAgents(); // Re-render agents
}

// Clear the grid for the next round
function clearGrid() {
    agents = []; // Reset agents
    updateGrid(); // Update display
}

// Add an agent to the grid
function addAgent(agent) {
    agents.push(agent);
    updateGrid();
}

// Example function to simulate agent reproduction
function reproduceAgents() {
    // Logic for reproduction and mutation
    // This would typically involve selecting agents based on user preferences
}

// Initialize the grid on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeGrid();
});