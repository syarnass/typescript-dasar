describe('Array', () => {
    it('should same with javascript', function () {
        const names = ["syarifah", "tzuyu", "chae"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', function () {
        // array yang tidak bisa diubah hanya bisa read only
        const hobbies = ["Membaca", "Menulis"];
    });
    it('should support tuple', function () {
        // tupple adalah array yang tidak bisa diubah dan sudah di deklarai kan diawal untuk tipe datanya
        const person = ["Syarifah", "Nasriyah", 30];
        console.info(person);
    });
});
export {};
//# sourceMappingURL=array.test.js.map