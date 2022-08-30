
function loadAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(Data => displayAlbums(Data))
    
}

function displayAlbums(albums){
    const albumsContainer = document.getElementById('albums-Container');
    for(const album of albums){
        console.log(album);
        const albumDiv = document.createElement('div');
        albumDiv.innerHTML = `
        <h5>id-${album.id}</h5>
        <h4>title-${album.title}</h4>
        `;
        albumsContainer.appendChild(albumDiv);
    }
}
loadAlbums();