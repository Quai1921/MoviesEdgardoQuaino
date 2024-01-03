let divContainerMovies = document.getElementById("container-movies")
console.log(divContainerMovies)

divContainerMovies.classList.add("flex", "flex-wrap", "gap-3", "justify-center", "px-12", "w-full", "py-8")


function createMovieCards(image, title, tagline, overview){
    return `<article class="articleCards">
    <img class= "imageCards" src="${image}" alt="Cover image, movie ${title}">
        <h3 class="titleCards">${title}</h3>
        <h4 class="taglineCards">${tagline}</h4>
    <p class="overviewCards">${overview}</p>
    </article>`
}

let movieCards = ""

for (let movie of movies){
    movieCards += createMovieCards(movie.image, movie.title, movie.tagline, movie.overview)
    // console.log(cards)
}

divContainerMovies.innerHTML = movieCards
console.log(divContainerMovies.innerHTML)

console.log(movies)


let articleCards = document.querySelectorAll(".articleCards")
for (const articleCard of articleCards) {
    articleCard.classList.add("flex", "flex-col", "items-center", "w-[330px]", "min-h-[380px]", "rounded-2xl", "px-2.5", "shadow-2xl","bg-white", "border-2", "border-[#d2ccff]")
}

let imageCards = document.querySelectorAll(".imageCards")
for (const imageCard of imageCards) {
    imageCard.classList.add("h-[200px]", "object-contain", "pt-2")
}

let titleCards = document.querySelectorAll(".titleCards")
for (const titleCard of titleCards) {
    titleCard.classList.add("text-center", "font-bold", "text-xl", "w-full", "px-1")
}

let taglineCards = document.querySelectorAll(".taglineCards")
for (const taglineCard of taglineCards) {
    taglineCard.classList.add("text-center", "font-medium", "italic", "pb-1")
}

let overviewCards = document.querySelectorAll(".overviewCards")
for (const overviewCard of overviewCards) {
    overviewCard.classList.add("text-center", "text-sm", "line-clamp-4",)
}


