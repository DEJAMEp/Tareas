//Ejercicio 1
/*var peliculafavorita = {
    nombre: "venom 2",·
    año: "2021",
    director: "Andy Serkis",
    actores_principales:  ["Tom Hardy","Michelle williams"],
    duracion: "1h 37m",
    genero: "Acción/Ciencia ficción"
}
document.write(peliculafavorita.nombre + "<br>" + peliculafavorita.año  + "<br>" + peliculafavorita.director + "<br>" + peliculafavorita.actores_principales  + "<br>" + peliculafavorita.duracion  + "<br>" + peliculafavorita.genero)*/
//Ejercicio 2
var peliculafavorita = {
    nombre: "venom 2",
    año: "2021",
    director: "Andy Serkis",
    actores_principales:  ["Tom Hardy","Michelle williams"],
    duracion: "1h 37m",
    genero: "Acción/Ciencia ficción"
}
peliculafavorita.pais = "EEUU";
peliculafavorita.idima = "Ingles";
peliculafavorita.clasification = "PG-13";
delete peliculafavorita.genero;

peliculafavorita.forEach(element => document.write(element + "<br>"));