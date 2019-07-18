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