class EventService {
    constructor(heroService) {
        this.heroService = heroService
    }

    handleEvent(event) {
        if(event.type === "End Of Mission") {
            this.heroService.freeHeroes()
        } else {
            this.heroService.sendOnMission(event)
        }
    }

    getInterventionPlan() {
        return this.heroService.getHeroes()
    }
}

module.exports = EventService
