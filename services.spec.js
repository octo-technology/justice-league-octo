 const Services = require('./services')

describe("test register heroes", () => {
    services = new Services ()

    it("should get available heroes",() =>{
        // GIVEN
        const expected = []

        // THEN
        expect(expected).toEqual(services.getAvailableHeroes())
    }),

    it("should add Batman to available heroes",() =>{
        // GIVEN
        let heroFromApi = {name: 'Batman'}
        const expected = ['Batman']

        // WHEN
        services.registerHero(heroFromApi)
        
        // THEN
        expect(expected).toEqual(services.getAvailableHeroes())
    }) 
})

describe("test end of mission", () => {
    services = new Services ()

    it("should free all heroes",() =>{
        // GIVEN
        const expected = []
        services.registerHero({name: 'Batman'})
        services.registerHero({name: 'Superman'})

        // WHEN
        services.endOfMission()

        // THEN
        expect(expected).toEqual(services.getAvailableHeroes())
    })
})