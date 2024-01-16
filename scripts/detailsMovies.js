import { generateDetailMovie } from "./functions.js"


// LLAMADA A LA API PARA GENERAR LOS DETALLES DE CADA PELÍCLULA. -------------------------------------------------------------------------------------------------------------
const callMovieDetails = fetch("https://moviestack.onrender.com/api/movies", {
    method: "GET",
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
})
    .then(response => response.json())
    .then(data => {
        const moviesCompleteList = data.movies
        const detailMovie = document.getElementById("detailMovie")
        console.log(detailMovie)
        const queryParams = new URLSearchParams( location.search  )
        console.log(queryParams)
        const idMovie = queryParams.get( `id`)
        console.log(idMovie)
        const individualMovie = moviesCompleteList.find( movie => movie.id == idMovie ) 
        console.log(individualMovie)
        generateDetailMovie(detailMovie, individualMovie)
    })
    .catch(error => console.log(error))





// // DETALLES PELÍCULAS. ----------------------------------------------------------------------------------------------------------------------------------------------------

// const detailMovie = document.getElementById("detailMovie")
// console.log(detailMovie)

// const queryParams = new URLSearchParams( location.search  )
// console.log(queryParams)

// const idMovie = queryParams.get( `id`)

// console.log(idMovie)


// detailMovie.innerHTML = `
//                 <div class="flex justify-center items-center w-full max-md:flex-wrap gap-12 pb-20">
//                     <div>
//                     <img class="rounded-xl shadow-xl shadow-gray-400 min-[768px]:w-full " src="${movieDetail.image}" alt="Cover image, movie ${movieDetail.title}">
//                     </div>
//                     <div class="w-[80vw] md:w-[50vw] md:max-w-[600px] border-r-2 border-[#d2ccff] px-6">
//                     <h1 class="text-center font-bold text-3xl px-1">${movieDetail.title}</h1>
//                     <h2 class="text-center font-medium text-xl italic pb-1">${movieDetail.tagline}</h2>
//                     <p class="text-center font-medium text-l italic pb-1">${movieDetail.genres.join(" , ")}</p>
//                     <p class="text-center text-l">${movieDetail.overview}</p>
//                     </div>
//                 </div>
//                 <div class="flex gap-12 flex-wrap justify-center items-center px-6">
//                     <div>
//                         <table class="shadow-xl shadow-gray-300 rounded-xl">
//                             <tbody class="h-[150px]">
//                                 <tr>
//                                     <th class="bg-[#d2ccff] border-b-2 border-r-2 border-white rounded-tl-xl text-l text-left italic pl-2 pr-10 font-semibold">Original Language</th>
//                                     <td class="bg-[#d2ccff] border-b-2 border-white rounded-tr-xl text-l italic pl-2 pr-10 font-extrabold">${movieDetail.original_language}</td>
//                                 </tr>
//                                 <tr>
//                                     <th class="bg-[#F0EEFF] border-b-2 border-r-2 border-white text-l text-left italic pl-2 pr-10 font-semibold">Release Date</th>
//                                     <td class="bg-[#F0EEFF] border-b-2 border-white text-l italic pl-2 pr-10 font-extrabold">${movieDetail.release_date}</td>
//                                 </tr>
//                                 <tr>
//                                     <th class="bg-[#d2ccff] border-b-2 border-r-2 border-white text-l text-left italic pl-2 pr-10 font-semibold">Runtime</th>
//                                     <td class="bg-[#d2ccff] border-b-2 border-white text-l italic text-left pl-2 pr-10 font-extrabold">${movieDetail.runtime} min</td>
//                                 </tr>
//                                 <tr>
//                                     <th class="bg-[#F0EEFF] border-r-2 border-white rounded-bl-xl text-l text-left italic pl-2 pr-10 font-semibold">Status</th>
//                                     <td class="bg-[#F0EEFF] rounded-br-xl text-l italic pl-2 pr-10 font-extrabold">${movieDetail.status}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     <div>
//                         <table class="shadow-xl shadow-gray-300 rounded-xl">
//                             <tbody class="h-[150px]">
//                                 <tr>
//                                     <th class="bg-[#d2ccff] border-b-2 border-r-2 border-white rounded-tl-xl text-l text-left italic pl-2 pr-10 font-semibold">Vote Average</th>
//                                     <td class="bg-[#d2ccff] border-b-2 border-white rounded-tr-xl text-l italic pl-2 pr-10 font-extrabold">${movieDetail.vote_average.toFixed(2)}%</td>
//                                 </tr>
//                                 <tr>
//                                     <th class="bg-[#F0EEFF] border-b-2 border-r-2 border-white text-l text-left italic pl-2 pr-10 font-semibold">Budget</th>
//                                     <td class="bg-[#F0EEFF] border-b-2 border-white text-l italic pl-2 pr-10 font-extrabold">${movieDetail.budget.toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
//                                 </tr>
//                                 <tr>
//                                     <th class="bg-[#d2ccff] border-r-2 border-white rounded-bl-xl text-l text-left italic pl-2 pr-10 font-semibold">Revenue</th>
//                                     <td class="bg-[#d2ccff] rounded-br-xl text-l italic pl-2 pr-10 font-extrabold">${movieDetail.revenue.toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
// `


// PRÁCTICA EXPLAIN CODE
// const numeros = [19, 24, 8, 3,13, 7, 26, 34]
// console.log(numeros)

// function pares(array){
//     return array.filter(item => item % 2 == 0)
// }

// let numerosPares = pares(numeros)

// console.log(numerosPares)

// function numPorCinco (array){
//     return array.map(item => item *5)
// }

// const numMultiplicados = numPorCinco (numerosPares)
// console.log(numMultiplicados)

// console.log(numPorCinco (numerosPares))

// const masChico = Math.min(...numMultiplicados)
// console.log(masChico);

// const masGrande = Math.max(...numMultiplicados)
// console.log(masGrande);

// function ordenar(numMultiplicados){
//     return numMultiplicados.toSorted((a,b) => b-a)
// }

// let muerasa= ordenar(numMultiplicados)

// console.log(muerasa[0]);
// console.log(muerasa[muerasa.length -1]);

