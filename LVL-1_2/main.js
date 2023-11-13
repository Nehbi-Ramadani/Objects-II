let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: '178cm',
    profil: function() {
    return `
    <h2>${this.vorname} ${this.nachname}</h2>
    <p>Alter: ${this.alter} Jahre</p>
    <p>Famielienstand: ${this.familienstand} </p>
    <p>Größe: ${this.groesse} </p>
    `;
    }
};

document.getElementById(`person`).innerHTML = person.profil();
