// FUNCIONES
// CREAR CARDS
export function createMovieCards(image, title, tagline, overview, id){
    return `<article class="articleCards flex flex-col gap-1 items-center w-[330px] min-h-[390px] rounded-2xl pt-3 px-4 pb-3 shadow-2xl bg-white border-2 border-[#d2ccff]">
                <img class= "imageCards h-[200px] object-cover rounded-t-2xl pb-2" src="${image}" alt="Cover image, movie ${title}">
                <h3 class="titleCards text-center font-bold text-xl w-full px-1">${title}</h3>
                <h4 class="taglineCards text-center font-medium italic pb-1">${tagline}</h4>
                <p class="overviewCards text-center text-sm line-clamp-4">${overview}</p>
                <a href="./details.html?id=${id}" class="font-bold text-[#6d38e0] bg-[#d2ccff] rounded-[10px] px-4 py-1 self-end mt-auto hover:bg-[#6d38e0] hover:text-white">+ Info</a>
            </article>`
}

// IMPRIMIR CARDS
export function printCards (array, idHTML) {
    let movieCards = ""
    for (let movie of array){
        movieCards += createMovieCards(movie.image, movie.title, movie.tagline, movie.overview, movie.id)
    }
    idHTML.innerHTML = movieCards
}

// FILTRAR POR NOMBRE INGRESADO
export function filterMovies (array, nameMovie){
    return array.filter (movie => movie.title.toLowerCase().includes(nameMovie.toLowerCase()))
}

// EN CASO DE NO COINCIDIR CON EL NOMBRE INGRESADO, DEVOLVEMOS UN MENSAJE
export function showEmptySearch(inputSearch){
    return `<P class="notFound max-w-[600px] text-center text-white bg-[#6d38e0] font-bold text-xl px-1 border border-[#6d38e0] rounded-xl py-3 px-6 shadow-xl shadow-gray-400">Sorry. We couldn't find movies with name: ${inputSearch.value}.</P>`
}

// IMPRIMIR EL MENSAJE
export function printShowEmptySearch(idHTML, inputSearch) {
    idHTML.innerHTML = showEmptySearch(inputSearch)
}

// PARA QUE SE QUITE EL MENSAJE PARA NUEVAS BUSQUEDAS
export function hidenEmptySearch(idHTML){
    idHTML.innerHTML = ""
}

// CREO UNA FUNCIÓN QUE ME COLOCA TODOS LOS GENEROS DE LAS PELÍCLUAS EN UN SOLO ARRAY
export function filterMoviesGenres(array) {
    let genresMovies = []
    for (let movie of array){
        genresMovies = genresMovies.concat(movie.genres)
                                    .filter((movie, index, array) => array.indexOf(movie) == index)
                                    .toSorted((movie1, movie2) => {
                                        if( movie1 < movie2 ){
                                            return -1
                                        }
                                        if( movie1 > movie2 ){
                                            return 1
                                        }
                                        return 0
                                    } )
    }
    return genresMovies
}

// CREO UNA FUNCIÓN PARA GENERAR CADA OPCIÓN DEL ELEMENTO SELECT
export function createSelect(genre){
    return `<option id="movieGenre" value="${genre}">${genre}</option>`
}

// FUNCION PARA FILTRAR POR GÉNERO. LE PASO EL ARRAY (MOVIES). CREO UNA VARIABLE (SELECTED) Y CREO UN ARRAY CON LA OPCIÓN SELECCIONADA. A ELLO LE APLICO EL MÉTODO MAP
// PARA CREAR EL ARRAY CON EL VALOR DE LA OPCIÓN SELECCIONADA.  
export function filterMoviesByGenre(array){
    const selected = Array.from(document.querySelectorAll("#selectGenre option:checked"))
                            .map(genre => genre.value)
    console.log(selected)
    if(selected.length == 0 || selected.includes("all") || selected.includes("selectedGenre")){ 
        return array
    } else {
        const genreSelected = array.filter(movie => selected.some(genre => movie.genres.includes(genre)))
        console.log(genreSelected)
        return genreSelected
    }
}





