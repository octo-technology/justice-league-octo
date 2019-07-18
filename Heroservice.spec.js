const HeroService = require('./Heroservice')


describe("test register heroes", () => {
    heroService = new HeroService()

    it("should get available heroes", () => {
        // GIVEN
        const expected = []

        // THEN
        expect(expected).toEqual(heroService.getAvailableHeroes())
    }),

    it("should add Batman to available heroes", () => {
        // GIVEN
        let heroFromApi = {name: 'Batman'}
        const expected = ['Batman']

        // WHEN
        heroService.registerHero(heroFromApi)

        // THEN
        expect(expected).toEqual(heroService.getAvailableHeroes())
    })
})


describe("sent hero to mission", () => {
    heroService = new HeroService()

    it("should delete a hero from the availableHero list when he is sent on mission", () => {
        // GIVEN
        const hero = {name: 'Batman'}
        heroService.registerHero(hero)
        const expected = []

        // WHEN
        heroService.sendOnMission(hero)

        // THEN
        expect(expected).toEqual(heroService.getAvailableHeroes())
    })
})

describe("end of mission", () => {
    heroService = new HeroService()

    it("should free all heroes", () => {
        // GIVEN
        heroService.registerHero({name: 'Batman'})
        heroService.registerHero({name: 'Superman'})
        const expected = []

        // WHEN
        heroService.freeHeroes()

        // THEN
        expect(expected).toEqual(heroService.getAvailableHeroes())
    })
})
