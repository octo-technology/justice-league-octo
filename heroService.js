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
        this.availableHeroes = this.availableHeroes.filter(heroName => heroName !== hero.name)
    }

    freeHeroes(){
        this.availableHeroes = []
    }
}

module.exports = HeroService
