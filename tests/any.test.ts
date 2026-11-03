describe('Any', () => { 
    it('should support in typescript',function(){


        const person: any = {
            id: 1,
            name: 'Syarifah',
            address: "23"
        }

        person.age=24
        person.address='Indonesia'

        console.info(person)
    })
 })