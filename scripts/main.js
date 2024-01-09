import { printCards, filterMovies, printShowEmptySearch, hidenEmptySearch, filterMoviesGenres, createSelect, filterMoviesByGenre  } from "./functions.js"

const divContainerMovies = document.getElementById("container-movies")

// FILTRO POR NOMBRE INGRESADO
const inputSearch = document.getElementById("search")

const emptySearch = document.getElementById("showEmptySearch")

// FILTRO POR CATEGORIA
// CAPTURO EL ID DEL ELEMENTO DONDE SE IMPRIMIRÁ EL SELECT
const selectGenre = document.getElementById("selectGenre")


const genresMovies = filterMoviesGenres(movies)

// IMPRIMO CON MÉTODO REDUCE. TOMO LA CONSTANTE CREADA PARA MOSTRAR TODOS LOS GÉNEROS Y LE APLICO REDUCE, QUE VA A TENER UN ACUMULADOR Y LA ITERACIÓN 
// POR CADA VALOR (GÉNERO) DEL ARRAY QUE CREÉ. LUEGO AL ACUMULADOR LE PASO LA FUNCIÓN PARA CREAR CADA OPCIÓN, PARA CREAR CADA VALOR REQUERIDO.
selectGenre.innerHTML += genresMovies.reduce((template, genre) => template += createSelect(genre), "")

// OTRA MANERA DE IMPRIMIR LAS OPCIONES:
// function printSelectedInput (array, idHTML) {
//     const genresMovies = filterMoviesGenres(array)
//     for (let genre of genresMovies){
//         idHTML.innerHTML  += createSelect(genre)
//     }
// }
// printSelectedInput(movies, selectGenre)

printCards(movies, divContainerMovies)


// EVENTO BUSCAR POR NOMBRE. SE AGREGA LA FUNCIÓN FILTRAR POR GÉNERO, PASÁNDOLE COMO ARGUMENTO LAS PELÍCULAS FILTRADAS POR NOMBRE E IMPRIMO
// SOLO LAS FILTRADAS POR GÉNERO
inputSearch.addEventListener("input", e => {
    const filteredMovies = filterMovies(movies, inputSearch.value)
    const moviesByGenre = filterMoviesByGenre(filteredMovies, selectGenre)
    if(filteredMovies.length == 0 || moviesByGenre.length == 0){
        printShowEmptySearch(emptySearch, inputSearch)
    } else {
        hidenEmptySearch(emptySearch)
        printCards(moviesByGenre, divContainerMovies)
    }
})


// EVENTO FILTRAR POR GÉNERO. AGREGO LA FUNCIÓN DE FILTRAR POR NOMBRE.
selectGenre.addEventListener("change", e => {
    const filteredMovies = filterMovies(movies, inputSearch.value)
    const genreSelected = filterMoviesByGenre(filteredMovies, selectGenre)
    printCards(genreSelected, divContainerMovies )
    if (filteredMovies.length > 0 && genreSelected.length == 0) {
        printShowEmptySearch(emptySearch, inputSearch);
    } else {
        hidenEmptySearch(emptySearch);
    }
})


divContainerMovies.classList.add("flex", "flex-wrap", "gap-3", "justify-center", "px-12", "w-full", "py-8")

