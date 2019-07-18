 
class Services {
    constructor() {
        this.availableHeroes = []
    }
    getAvailableHeroes() {
        return this.availableHeroes
    }

    registerHero(hero){
        this.availableHeroes.push(hero.name)
    }

    endOfMission(){
        this.availableHeroes = []
    }
 }

 module.exports = Services