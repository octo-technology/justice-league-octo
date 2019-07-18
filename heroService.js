class HeroService {
    constructor() {
        this.availableHeroes = []
    }

    getAvailableHeroes() {
        return this.availableHeroes
    }

    registerHero(hero){
        this.availableHeroes.push(hero.name)
    }

    sendOnMission(hero){
        this.availableHeroes.filter(heroName => heroName !== hero)
    }

    endOfMission(){
        this.availableHeroes = []
    }
}

module.exports = HeroService
