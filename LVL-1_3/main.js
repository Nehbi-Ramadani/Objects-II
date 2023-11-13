let personFunction = {
    fullName: function () {
        return this.vorname + " " + this.nachname;
    }
};
let personObjekt = {
    vorname: "Anton",
    nachname: "Nüssler"
};

console.log(personFunction.fullName.call(personObjekt))

