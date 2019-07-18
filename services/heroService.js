class HeroService {
    constructor() {
        this.heroes = []
    }

    getHeroes() {
        return this.heroes
    }

    registerHero(hero){
        const heroTemplate = {name: hero.name, location: 'Batcave', action: 'Standby'}
        this.heroes.push(heroTemplate)
    }

    sendOnMission(event){
        let heroFound = false
        this.heroes = this.heroes.map(hero => {
            if (hero.action === 'Standby' && !heroFound) {
                hero.action = 'prevent'
                hero.location = event.location
                heroFound = true
            }
            return hero
        })
    }

    freeHeroes(){
        this.heroes = []
    }
}

module.exports = HeroService
