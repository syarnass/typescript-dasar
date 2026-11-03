describe('Array', () => {
  it('should same with javascript', function (){

    const names: string[] = ["syarifah","tzuyu","chae"]
    const values: number[] = [1,2,3]

    console.info(names)
    console.info(values)
  })

  it('should support readonly array', function(){
    // array yang tidak bisa diubah hanya bisa read only
    const hobbies : ReadonlyArray<string> = ["Membaca", "Menulis"]
  })

  it('should support tuple', function (){

    // tupple adalah array yang tidak bisa diubah dan sudah di deklarai kan diawal untuk tipe datanya
    const person : readonly [string, string, number] = ["Syarifah", "Nasriyah", 30]
    
    console.info(person)
  })
})
