import { printCards, filterMovies, printShowEmptySearch, hidenEmptySearch, filterMoviesGenres, createSelect, filterMoviesByGenre} from "./functions.js"




// LLAMANDO A LA API. ------------------------------------------------------------------------------------------------------------------------------

fetch("https://moviestack.onrender.com/api/movies?limit=5&offset=1", {
    method: "GET",
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
})
    .then(response => response.json())
    
    .then(data => {
        const moviesCompleteList = data.movies
        console.log(moviesCompleteList);
        
        
        const inputSearch = document.getElementById("search")

        const emptySearch = document.getElementById("showEmptySearch")

        const selectGenre = document.getElementById("selectGenre")

        const divContainerMovies = document.getElementById("container-movies")

        divContainerMovies.classList.add("flex", "flex-wrap", "gap-3", "justify-center", "px-12", "w-full", "py-8")

        const genresMovies = filterMoviesGenres(moviesCompleteList)
        selectGenre.innerHTML += genresMovies.reduce((template, genre) => template += createSelect(genre), "")

        inputSearch.addEventListener("input", e => {
            const filteredMovies = filterMovies(moviesCompleteList, inputSearch.value)
            const moviesByGenre = filterMoviesByGenre(filteredMovies, selectGenre) 
            if (moviesByGenre.length == 0) {                                                       //filteredMovies.length == 0 || 
                printShowEmptySearch(emptySearch, inputSearch)
            } else {
                hidenEmptySearch(emptySearch)
                printCards(moviesByGenre, divContainerMovies)
            }
        })

        selectGenre.addEventListener("change", e => {
            const filteredMovies = filterMovies(moviesCompleteList, inputSearch.value)
            const genreSelected = filterMoviesByGenre(filteredMovies, selectGenre)
            printCards(genreSelected, divContainerMovies)
            if (filteredMovies.length > 0 && genreSelected.length == 0) {
                printShowEmptySearch(emptySearch, inputSearch)
            } else {
                hidenEmptySearch(emptySearch)
            }
        })

        printCards(moviesCompleteList, divContainerMovies)


        let moviesFavorites = JSON.parse(localStorage.getItem("moviesFavorites")) || []
        // console.log(moviesFavorites)
        
        divContainerMovies.addEventListener("click", e =>{
            const isFavorite = e.target.dataset.id
            console.log(isFavorite)
            if(isFavorite){
                const favoriteRemove = moviesFavorites.findIndex(item => item == isFavorite)

                if(favoriteRemove != -1){
                    e.target.classList.remove("bg-[url('../assets/images/favred.png')]")
                    e.target.classList.add("bg-[url('../assets/images/favblack.png')]")
                    moviesFavorites.splice(favoriteRemove, 1)
                    localStorage.setItem("moviesFavorites", JSON.stringify(moviesFavorites))

                } else {
                    e.target.classList.remove("bg-[url('../assets/images/favblack.png')]")
                    e.target.classList.add("bg-[url('../assets/images/favred.png')]")
                    moviesFavorites.push(isFavorite)
                    localStorage.setItem("moviesFavorites", JSON.stringify(moviesFavorites))
                }
            console.log(moviesFavorites)
            }
                // Capturar el id del dataset.id [ X ]
                // Si ese id está en el array de favoritos, lo saco [ X ]
                // Si no está en el array de favoritos lo agrego [ X ]
                // En amboos casos siempre actualizo el localStorage [ X ]
                // Imprimo las cards [ X ]
        })
    })
    .catch(error => console.log(error))



// const divContainerMovies = document.getElementById("container-movies")

// FILTRO POR NOMBRE INGRESADO -----------------------------------------------------------------------------------------------------------------------

// const inputSearch = document.getElementById("search")

// const emptySearch = document.getElementById("showEmptySearch")

// FILTRO POR CATEGORIA ------------------------------------------------------------------------------------------------------------------------------
// CAPTURO EL ID DEL ELEMENTO DONDE SE IMPRIMIRÁ EL SELECT

// const selectGenre = document.getElementById("selectGenre")

// const genresMovies = filterMoviesGenres(movies)


// IMPRIMO CON MÉTODO REDUCE. ------------------------------------------------------------------------------------------------------------------------
// TOMO LA CONSTANTE CREADA PARA MOSTRAR TODOS LOS GÉNEROS Y LE APLICO REDUCE, QUE VA A TENER UN ACUMULADOR Y LA ITERACIÓN 
// POR CADA VALOR (GÉNERO) DEL ARRAY QUE CREÉ. LUEGO AL ACUMULADOR LE PASO LA FUNCIÓN PARA CREAR CADA OPCIÓN, PARA CREAR CADA VALOR REQUERIDO.

// selectGenre.innerHTML += genresMovies.reduce((template, genre) => template += createSelect(genre), "")

// OTRA MANERA DE IMPRIMIR LAS OPCIONES. -------------------------------------------------------------------------------------------------------------

// function printSelectedInput (array, idHTML) {
//     const genresMovies = filterMoviesGenres(array)
//     for (let genre of genresMovies){
//         idHTML.innerHTML  += createSelect(genre)
//     }
// }
// printSelectedInput(movies, selectGenre)

// printCards(movies, divContainerMovies) 


// EVENTO BUSCAR POR NOMBRE. 
// SE AGREGA LA FUNCIÓN FILTRAR POR GÉNERO, PASÁNDOLE COMO ARGUMENTO LAS PELÍCULAS FILTRADAS POR NOMBRE E IMPRIMO- ----------------------------------
// SOLO LAS FILTRADAS POR GÉNERO. -------------------------------------------------------------------------------------------------------------------

// inputSearch.addEventListener("input", e => {
//     const filteredMovies = filterMovies(movies, inputSearch.value)
//     const moviesByGenre = filterMoviesByGenre(filteredMovies, selectGenre)
//     if (filteredMovies.length == 0 || moviesByGenre.length == 0) {
//         printShowEmptySearch(emptySearch, inputSearch)
//     } else {
//         hidenEmptySearch(emptySearch)
//         printCards(moviesByGenre, divContainerMovies)
//     }
// })


// EVENTO FILTRAR POR GÉNERO. AGREGO LA FUNCIÓN DE FILTRAR POR NOMBRE. ------------------------------------------------------------------------------

// selectGenre.addEventListener("change", e => {
//     const filteredMovies = filterMovies(movies, inputSearch.value)
//     const genreSelected = filterMoviesByGenre(filteredMovies, selectGenre)
//     printCards(genreSelected, divContainerMovies)
//     if (filteredMovies.length > 0 && genreSelected.length == 0) {
//         printShowEmptySearch(emptySearch, inputSearch)
//     } else {
//         hidenEmptySearch(emptySearch)
//     }
// })


// divContainerMovies.classList.add("flex", "flex-wrap", "gap-3", "justify-center", "px-12", "w-full", "py-8")