// FUNCIONES. ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// CREAR CARDS. --------------------------------------------------------------------------------------------------------------------------------------------------------------
export function createMovieCards(image, title, tagline, overview, id){
    let moviesFavorites = JSON.parse(localStorage.getItem("moviesFavorites")) || []

    const isFavorite = moviesFavorites.includes(id)
    const favBackground = isFavorite ? "bg-[url('../assets/images/favred.png')]" : "bg-[url('../assets/images/favblack.png')]"

    // Recupro el localStorage y me fijo si el id de cada una de las películas está incluido. Si está en el localStorage, le pongo fondo rojo, si no está, fondo negro.
    
    return `<article id="cardsMovies" class="articleCards flex flex-col gap-1 items-center w-[330px] min-h-[460px] rounded-2xl pt-3 px-4 pb-3 shadow-2xl bg-white border-2 border-[#d2ccff]">
                <img class= "imageCards h-[200px] object-cover rounded-t-2xl pb-2" src="https://moviestack.onrender.com/static/${image}" alt="Cover image, movie ${title}">
                <h3 class="titleCards text-center font-bold text-xl w-full px-1">${title}</h3>
                <h4 class="taglineCards text-center font-medium italic pb-1">${tagline}</h4>
                <p class="overviewCards text-center text-sm line-clamp-4">${overview}</p>
                <div class="w-full flex justify-between items-center py-3 mt-auto">
                <div id="btnFav" class="${favBackground} bg-contain w-8 h-8 cursor-pointer" data-id="${id}">
                </div>
                <a href="./details.html?id=${id}" class="font-bold text-[#6d38e0] bg-[#d2ccff] rounded-[10px] px-4 py-1 mt-auto hover:bg-[#6d38e0] hover:text-white">+ Info</a>
                </div>
            </article>`
}



// IMPRIMIR CARDS. -----------------------------------------------------------------------------------------------------------------------------------------------------------
export function printCards (array, idHTML) {
    let movieCards = ""
    for (let movie of array){
        movieCards += createMovieCards(movie.image, movie.title, movie.tagline, movie.overview, movie.id)
    }
    idHTML.innerHTML = movieCards
}


// FILTRAR POR NOMBRE INGRESADO. ---------------------------------------------------------------------------------------------------------------------------------------------
export function filterMovies (array, nameMovie){
    return array.filter (movie => movie.title.toLowerCase().includes(nameMovie.toLowerCase()))
}


// EN CASO DE NO COINCIDIR CON EL NOMBRE INGRESADO, DEVOLVEMOS UN MENSAJE. ---------------------------------------------------------------------------------------------------
export function showEmptySearch(inputSearch){
    return `<p class="notFound max-w-[600px] text-center text-white bg-[#6d38e0] font-bold text-xl px-1 border border-[#6d38e0] rounded-xl py-3 px-6 shadow-xl shadow-gray-400">Sorry. We couldn't find movies with name: ${inputSearch.value}.</p>`
}


// IMPRIMIR EL MENSAJE. ------------------------------------------------------------------------------------------------------------------------------------------------------
export function printShowEmptySearch(idHTML, inputSearch) {
    idHTML.innerHTML = showEmptySearch(inputSearch)
}


// PARA QUE SE QUITE EL MENSAJE PARA NUEVAS BUSQUEDAS. -----------------------------------------------------------------------------------------------------------------------
export function hidenEmptySearch(idHTML){
    idHTML.innerHTML = ""
}


// CREO UNA FUNCIÓN QUE ME COLOCA TODOS LOS GENEROS DE LAS PELÍCLUAS EN UN SOLO ARRAY. ---------------------------------------------------------------------------------------
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


// CREO UNA FUNCIÓN PARA GENERAR CADA OPCIÓN DEL ELEMENTO SELECT. ------------------------------------------------------------------------------------------------------------
export function createSelect(genre){
    return `<option id="movieGenre" value="${genre}">${genre}</option>`
}


// FUNCION PARA FILTRAR POR GÉNERO. LE PASO EL ARRAY (MOVIES). CREO UNA VARIABLE (SELECTED) Y CREO UN ARRAY CON LA OPCIÓN SELECCIONADA.---------------------------------------
export function filterMoviesByGenre(array, optionSelect){
    const selected = optionSelect.value.split()
    console.log(selected)
    if(selected.length == 0 || selected.includes("all") || selected.includes("selectedGenre")){ 
        return array
    } else {
        const genreSelected = array.filter(movie => movie.genres.includes(optionSelect.value))
        console.log(genreSelected)
        return genreSelected
    }
}


// FUNCIÓN PARA GENERAR DETALLE DE CADA PELÍCULA. ---------------------------------------------------------------------------------------------------------------------------
export function generateDetailMovie (idHTML, movieDetail){
    return idHTML.innerHTML = `
                <div class="flex justify-center items-center w-full max-lg:flex-wrap gap-12 pb-20">
                    <div>
                        <img class="object-cover rounded-xl shadow-xl shadow-gray-400 w-[90vw] h-[30vh] sm:h-[40vh] lg:w-[35vw] lg:h-[40vh] lg:ml-10" src="https://moviestack.onrender.com/static/${movieDetail.image}"
                            alt="Cover image, movie ${movieDetail.title}">
                    </div>
                    <div class="flex flex-col justify-center items-center gap-20">
                        <div class="w-[80vw] md:w-[50vw] md:max-w-[600px] border-r-2 border-[#d2ccff] px-6">
                        <h1 class="text-center font-bold text-3xl px-1">${movieDetail.title}</h1>
                        <h2 class="text-center font-medium text-xl italic pb-1">${movieDetail.tagline}</h2>
                        <p class="text-center font-medium text-l italic pb-1">${movieDetail.genres.join(" , ")}</p>
                        <p class="text-center text-l">${movieDetail.overview}</p>
                        </div>

                        <div class="flex gap-12 flex-wrap justify-center items-center px-6">
                            <div>
                                <table class="shadow-xl shadow-gray-300 rounded-xl">
                                    <tbody class="h-[150px]">
                                        <tr>
                                            <th
                                                class="bg-[#d2ccff] border-b-2 border-r-2 border-white rounded-tl-xl text-l text-left italic pl-2 pr-10 font-semibold">
                                                Original Language</th>
                                            <td
                                                class="bg-[#d2ccff] border-b-2 border-white rounded-tr-xl text-l italic pl-2 pr-10 font-extrabold">
                                                ${movieDetail.original_language}</td>
                                        </tr>
                                        <tr>
                                            <th
                                                class="bg-[#F0EEFF] border-b-2 border-r-2 border-white text-l text-left italic pl-2 pr-10 font-semibold">
                                                Release Date</th>
                                            <td
                                                class="bg-[#F0EEFF] border-b-2 border-white text-l italic pl-2 pr-10 font-extrabold">
                                                ${movieDetail.release_date}</td>
                                        </tr>
                                        <tr>
                                            <th
                                                class="bg-[#d2ccff] border-b-2 border-r-2 border-white text-l text-left italic pl-2 pr-10 font-semibold">
                                                Runtime</th>
                                            <td
                                                class="bg-[#d2ccff] border-b-2 border-white text-l italic text-left pl-2 pr-10 font-extrabold">
                                                ${movieDetail.runtime} min</td>
                                        </tr>
                                        <tr>
                                            <th
                                                class="bg-[#F0EEFF] border-r-2 border-white rounded-bl-xl text-l text-left italic pl-2 pr-10 font-semibold">
                                                Status</th>
                                            <td class="bg-[#F0EEFF] rounded-br-xl text-l italic pl-2 pr-10 font-extrabold">
                                                ${movieDetail.status}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <table class="shadow-xl shadow-gray-300 rounded-xl">
                                    <tbody class="h-[150px]">
                                        <tr>
                                            <th class="bg-[#d2ccff] border-b-2 border-r-2 border-white rounded-tl-xl text-l text-left italic pl-2 pr-10 font-semibold">
                                                Vote Average</th>
                                            <td class="bg-[#d2ccff] border-b-2 border-white rounded-tr-xl text-l italic pl-2 pr-10 font-extrabold">
                                                                        ${movieDetail.vote_average.toFixed(2)}%</td>
                                        </tr>
                                        <tr>
                                            <th class="bg-[#F0EEFF] border-b-2 border-r-2 border-white text-l text-left italic pl-2 pr-10 font-semibold">
                                                Budget</th>
                                            <td class="bg-[#F0EEFF] border-b-2 border-white text-l italic pl-2 pr-10 font-extrabold">
                                                                        ${movieDetail.budget.toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
                                            </tr>
                                            <tr>
                                                <th class="bg-[#d2ccff] border-r-2 border-white rounded-bl-xl text-l text-left italic pl-2 pr-10 font-semibold">
                                                    Revenue</th>
                                                <td class="bg-[#d2ccff] rounded-br-xl text-l italic pl-2 pr-10 font-extrabold">
                                                    ${movieDetail.revenue.toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
                                                </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>`
}


export function createFavoritesCards(image, title, tagline, overview, id){
    let moviesFavorites = JSON.parse(localStorage.getItem("moviesFavorites")) || []

    const isFavorite = moviesFavorites.includes(id)
    // console.log(isFavorite)
    const favBackground = isFavorite ?"bg-[url('../assets/images/favred.png')]" :"bg-[url('../assets/images/favblack.png')]"
    // console.log(favBackground)
    if(isFavorite){
        return `<article id="cardsMovies" class="articleCards flex flex-col gap-1 items-center w-[330px] min-h-[460px] rounded-2xl pt-3 px-4 pb-3 shadow-2xl bg-white border-2 border-[#d2ccff]">
                <img class="imageCards h-[200px] object-cover rounded-t-2xl pb-2" src="https://moviestack.onrender.com/static/${image}" alt="Cover image, movie ${title}">
                <h3 class="titleCards text-center font-bold text-xl w-full px-1">${title}</h3>
                <h4 class="taglineCards text-center font-medium italic pb-1">${tagline}</h4>
                <p class="overviewCards text-center text-sm line-clamp-4">${overview}</p>
                <div class="w-full flex justify-between items-center py-3 mt-auto">
                <div id="btnFav" class="btnFav ${favBackground} bg-contain w-8 h-8 cursor-pointer" data-id="${id}">
                </div>
                <a href="./details.html?id=${id}" class="font-bold text-[#6d38e0] bg-[#d2ccff] rounded-[10px] px-4 py-1 mt-auto hover:bg-[#6d38e0] hover:text-white">+ Info</a>
                </div>
            </article>`
            
    } else {
        return ``
    }
}


export function printFavoriteCards(array, idHTML) {
    let favoriteCards = ""
    for (let movie of array){
        favoriteCards += createFavoritesCards(movie.image, movie.title, movie.tagline, movie.overview, movie.id)
    }
    idHTML.innerHTML = favoriteCards
}


