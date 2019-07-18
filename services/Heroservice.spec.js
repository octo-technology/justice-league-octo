const HeroService = require('./heroService')


describe("test register heroes", () => {
    heroService = new HeroService()

    it("should get available heroes", () => {
        // GIVEN
        const expected = []

        // THEN
        expect(expected).toEqual(heroService.getHeroes())
    }),

    it("should add Batman to heroes", () => {
        // GIVEN
        let heroFromApi = {name: 'Batman'}
        const expected = [{name: 'Batman', location: 'Batcave', action: 'Standby'}]

        // WHEN
        heroService.registerHero(heroFromApi)

        // THEN
        expect(expected).toEqual(heroService.getHeroes())
    })
})


describe("sent hero to mission", () => {

    it("should delete a hero from the availableHero list when he is sent on mission", () => {
        // GIVEN
        heroService = new HeroService()
        const expected = [{name: 'Batman', location: 'Paris', action: 'prevent'}]
        const event = {type: 'flood', strength: '1', location: 'Paris'}
        heroService.registerHero({name: 'Batman'})

        // WHEN
        heroService.sendOnMission(event)

        // GIVEN
        expect(expected).toEqual(heroService.getHeroes())

    })

    it(" 2222 should delete a hero from the availableHero list when he is sent on mission", () => {
        // GIVEN
        heroService = new HeroService()
        const expected = [{name: 'Batman', location: 'Paris', action: 'prevent'},{name: 'Superman', location: 'Batcave', action: 'Standby'}]
        const event = {type: 'flood', strength: '1', location: 'Paris'}
        heroService.registerHero({name: 'Batman'})
        heroService.registerHero({name: 'Superman'})

        // WHEN
        heroService.sendOnMission(event)

        // GIVEN
        expect(expected).toEqual(heroService.getHeroes())

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
        expect(expected).toEqual(heroService.getHeroes())
    })
})
