const HeroService = require('./heroService')
const heroService = new HeroService()

class EventService {
    constructor() {}

    handleEvent(event) {
        if(event.type === "End Of Mission") {
            heroService.endOfMission()
        }
    }
}

module.exports = EventService
