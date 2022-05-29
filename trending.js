  //TMDB API KEY ="ebf1371389bb3b49d8a6287ef80796e7"

const api = "ebf1371389bb3b49d8a6287ef80796e7";

async function movies(){
    let url = `https://api.themoviedb.org/4/list/1?api_key=${api}`;

    try{
        let res = await fetch(url);

        let data = await res.json();
        append(data.results);
        console.log(data.results);
    }catch(err){
        console.log('err',err);
    }
}

function append(data){
    data.forEach(function(ele){
        let div =document.createElement("div");

        // let img = document.createElement("img");
        // img.src = ele.poster_path;
    
        let h3 = document.createElement("h3");
        h3.innerText = `Movie Name - ${ele.title}`;
       

        let rlsDate = document.createElement("p");
        rlsDate.innerText = `Realease Date - ${ele.release_date}`;
        

        let imdbID = document.createElement("p");
        imdbID.innerText = `Rating - ${ele.vote_average}`;

        let popularity = document.createElement("p");
        popularity.innerText = `Popularity - ${ele.popularity}`;
       

        div.append( h3, rlsDate, imdbID, popularity);
        document.getElementById("container").append(div);
    })
}