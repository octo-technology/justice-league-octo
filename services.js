 
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
 }
 module.exports = Services