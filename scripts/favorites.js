import { printFavoriteCards} from "./functions.js"

let moviesFavorites = JSON.parse(localStorage.getItem("moviesFavorites")) || []
// console.log(moviesFavorites)



fetch("https://moviestack.onrender.com/api/movies", {
    method: "GET",
    headers: {
        "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
    }
})
    .then(response => response.json())
    .then (data => {
        const moviesCompleteList = data.movies
        console.log(moviesCompleteList);

        // const listFavoriteMovies = moviesCompleteList.filter(movies => moviesFavorites.includes(movies.id))
        // console.log(listFavoriteMovies);
        

        const listFavMovies = document.getElementById("listFavMovies")

        printFavoriteCards(moviesCompleteList, listFavMovies)
        localStorage.setItem("moviesFavorites", JSON.stringify(moviesFavorites))
        
        const quantityMovies = document.getElementById("quantityMovies")
        
        moviesFavorites.length > 0 ?quantityMovies.textContent = `You have added ${moviesFavorites.length} movies to favorites.` :quantityMovies.textContent = `You don't have any movies added to favorites yet.` 
        // if(moviesFavorites.length != 0){
        //     quantityMovies.textContent =  `You have added ${moviesFavorites.length} movies to favorites.`
        // } 

        listFavMovies.addEventListener("click", e =>{
            const isFavorite = e.target.dataset.id
            console.log(isFavorite)
            if(isFavorite){

                Swal.fire({
                    title: `<p class="alertTitle">Are you sure?</p>`,
                    text: `You won't be able to revert this!`,
                    icon: `warning`,
                    toast: true,
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Yes, delete it!"

                }).then((result) => {
                    if (result.isConfirmed) {
                        const favoriteRemove = moviesFavorites.findIndex(item => item === isFavorite)
                        if(favoriteRemove != -1){
                            Swal.fire({
                                title: `<p class="alertTitle">Deleted!</p>`,
                                text: "Your movie has been deleted.",
                                toast: true,
                                icon: "success"
                            });
                            const favorite = e.target.classList
                            favorite.remove("bg-[url('../assets/images/favred.png')]")
                            favorite.add("bg-[url('../assets/images/favblack.png')]")
                            moviesFavorites.splice(favoriteRemove, 1)

                            localStorage.setItem("moviesFavorites", JSON.stringify(moviesFavorites))
                    
                            moviesFavorites.length > 0 ?quantityMovies.textContent = `You have added ${moviesFavorites.length} movies to favorites.` :quantityMovies.textContent = `You don't have any movies added to favorites yet.`
                    
                            printFavoriteCards(moviesCompleteList, listFavMovies)
                        }
                    }
                })
            console.log(moviesFavorites)
            }
        })
    })
    .catch(error => console.log(error))






