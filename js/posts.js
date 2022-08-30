
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(Data => dislayPosts(Data))
}
function dislayPosts(posts){
    const postsContainer = document.getElementById('posts-Container');
    for(const post of posts){
        console.log(post);
        const postsDiv = document.createElement('div');
        postsDiv.innerHTML = `
        <h5>userId-${post.userId}</h5>
        <h4>title-${post.title}</h4>
        `;
        postsContainer.appendChild(postsDiv);
    }
}

loadPosts();

