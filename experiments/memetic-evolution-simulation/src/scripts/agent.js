class Agent {
    constructor(id) {
        this.id = id;
        this.performanceMetrics = {
            creativity: Math.random(),
            interaction: Math.random(),
            entertainmentValue: Math.random()
        };
        this.content = this.generateContent();
    }

    generateContent() {
        const contentTypes = ['art', 'music', 'story', 'dance', 'joke'];
        const randomType = contentTypes[Math.floor(Math.random() * contentTypes.length)];
        return `This is a ${randomType} created by Agent ${this.id}`;
    }

    interact(otherAgent) {
        const interactionOutcome = Math.random();
        if (interactionOutcome < 0.5) {
            this.performanceMetrics.interaction += 0.1;
            otherAgent.performanceMetrics.interaction += 0.1;
        } else {
            this.performanceMetrics.interaction -= 0.1;
            otherAgent.performanceMetrics.interaction -= 0.1;
        }
    }

    evolve(userFeedback) {
        if (userFeedback === 'like') {
            this.performanceMetrics.creativity += 0.1;
            this.performanceMetrics.entertainmentValue += 0.1;
        } else if (userFeedback === 'dislike') {
            this.performanceMetrics.creativity -= 0.1;
            this.performanceMetrics.entertainmentValue -= 0.1;
        }
        this.content = this.generateContent();
    }
}