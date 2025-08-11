// This file contains the logic for the evolutionary process. It manages the selection of agents based on user input, handles the reproduction and mutation of agents, and updates the grid for the next round.

class Evolution {
    constructor(grid) {
        this.grid = grid;
        this.agents = grid.getAgents();
    }

    selectAgents(userPreferences) {
        // Select agents based on user preferences
        return this.agents.filter(agent => userPreferences.includes(agent.id));
    }

    reproduce(selectedAgents) {
        const offspring = [];
        selectedAgents.forEach(agent => {
            const child = agent.reproduce();
            offspring.push(child);
        });
        return offspring;
    }

    mutate(offspring) {
        offspring.forEach(child => {
            if (Math.random() < 0.1) { // 10% chance to mutate
                child.mutate();
            }
        });
    }

    updateGrid(offspring) {
        this.grid.clear();
        this.grid.addAgents(offspring);
        this.grid.render();
    }

    runEvolution(userPreferences) {
        const selectedAgents = this.selectAgents(userPreferences);
        const offspring = this.reproduce(selectedAgents);
        this.mutate(offspring);
        this.updateGrid(offspring);
    }
}

// Export the Evolution class for use in other modules
export default Evolution;