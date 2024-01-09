// DETALLES PELÍCULAS
const detailMovie = document.getElementById("detailMovie")

const queryParams = new URLSearchParams( location.search  )
console.log(queryParams)

const idMovie = queryParams.get( `id`)

console.log(idMovie)

const movieDetail = movies.find( movie => movie.id == idMovie ) 
console.log(movieDetail)


detailMovie.innerHTML = `
                <div class="flex justify-center items-center w-full max-md:flex-wrap gap-12 pb-20">
                    <div>
                    <img class="rounded-xl shadow-xl shadow-gray-400 min-[768px]:w-full " src="${movieDetail.image}" alt="Cover image, movie ${movieDetail.title}">
                    </div>
                    <div class="w-[80vw] md:w-[50vw] md:max-w-[600px] border-r-2 border-[#d2ccff] px-6">
                    <h1 class="text-center font-bold text-3xl px-1">${movieDetail.title}</h1>
                    <h2 class="text-center font-medium text-xl italic pb-1">${movieDetail.tagline}</h2>
                    <p class="text-center font-medium text-l italic pb-1">${movieDetail.genres.join(" , ")}</p>
                    <p class="text-center text-l">${movieDetail.overview}</p>
                    </div>
                </div>
                <div class="flex gap-12 flex-wrap justify-center items-center px-6">
                    <div>
                        <table class="shadow-xl shadow-gray-300 rounded-xl">
                            <tbody class="h-[150px]">
                                <tr>
                                    <th class="bg-[#d2ccff] border-b-2 border-r-2 border-white rounded-tl-xl text-l text-left italic pl-2 pr-10 font-extrabold">Original Language</th>
                                    <td class="bg-[#d2ccff] border-b-2 border-white rounded-tr-xl text-l italic pl-2 pr-10">${movieDetail.original_language}</td>
                                </tr>
                                <tr>
                                    <th class="bg-[#F0EEFF] border-b-2 border-r-2 border-white text-l text-left italic pl-2 pr-10 font-extrabold">Release Date</th>
                                    <td class="bg-[#F0EEFF] border-b-2 border-white text-l italic pl-2 pr-10">${movieDetail.release_date}</td>
                                </tr>
                                <tr>
                                    <th class="bg-[#d2ccff] border-b-2 border-r-2 border-white text-l text-left italic pl-2 pr-10 font-extrabold">Runtime</th>
                                    <td class="bg-[#d2ccff] border-b-2 border-white text-l italic text-left pl-2 pr-10">${movieDetail.runtime}</td>
                                </tr>
                                <tr>
                                    <th class="bg-[#F0EEFF] border-r-2 border-white rounded-bl-xl text-l text-left italic pl-2 pr-10 font-extrabold">Status</th>
                                    <td class="bg-[#F0EEFF] rounded-br-xl text-l italic pl-2 pr-10">${movieDetail.status}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table class="shadow-xl shadow-gray-300 rounded-xl">
                            <tbody class="h-[150px]">
                                <tr>
                                    <th class="bg-[#d2ccff] border-b-2 border-r-2 border-white rounded-tl-xl text-l text-left italic pl-2 pr-10 font-extrabold">Vote Average</th>
                                    <td class="bg-[#d2ccff] border-b-2 border-white rounded-tr-xl text-l italic pl-2 pr-10">${movieDetail.vote_average.toFixed(2)}%</td>
                                </tr>
                                <tr>
                                    <th class="bg-[#F0EEFF] border-b-2 border-r-2 border-white text-l text-left italic pl-2 pr-10 font-extrabold">Budget</th>
                                    <td class="bg-[#F0EEFF] border-b-2 border-white text-l italic pl-2 pr-10">${movieDetail.budget.toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
                                </tr>
                                <tr>
                                    <th class="bg-[#d2ccff] border-r-2 border-white rounded-bl-xl text-l text-left italic pl-2 pr-10 font-extrabold">Revenue</th>
                                    <td class="bg-[#d2ccff] rounded-br-xl text-l italic pl-2 pr-10">${movieDetail.revenue.toLocaleString('en-US', {style:'currency', currency:'USD'})}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
`