const APIController = (function() {
    
    const clientId = '0b04d9e88b6842b382d5138df8689a71';
    const clientSecret = 'd1e2faa46fda43d1b007b8c15b2a7e4a';

    // private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });

        const data = await result.json();
        return data.access_token;
    }
    const _getArtist = async (name) => {
        const token= await _getToken();
        const query = name;
        const result = await fetch(`https://api.spotify.com/v1/search/?q=${query}&type=artist`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
        
        const data = await result.json();
        
        return data.artists.items[0];
        
    }
    return {
        getToken() {
            return _getToken();
        },
        getArtist(name){
            
            return _getArtist(name);
        }
    }
});

const search = document.getElementById("searchartist");
const input = document.getElementById("artist");

search.addEventListener("submit",(e)=>{
    e.preventDefault();
    const val = input.value;
    const artist =  new APIController().getArtist(val);
    artist.then((e)=>{
        console.log(e);
        const follower = document.getElementById("followers");
        const genre = document.getElementById("genres");
        const name = document.getElementById("name");
        const pic = document.getElementById("pic");
        name.innerText = e.name;
        follower.innerText = `${parseInt(e.followers.total)} followers`
        e.genres.forEach((e)=>{
            const node = document.createElement("span");
            node.classList ="badge bg-success text-white mr-2";
            node.innerText =e;
            genre.appendChild(node);
        });

        picurl = e.images[1].url;
        pic.src=picurl;
        console.log(e.images[1].url);
    });
});