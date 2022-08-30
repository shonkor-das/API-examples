
function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(Data => displayComments(Data))
}

function displayComments(comments){
    const commentsContainer = document.getElementById('comments-Container');
    for(const comment of comments){
        console.log(comment);
        const CommentDiv =  document.createElement('div');
        CommentDiv.innerHTML = `
        <h4>postId-${comment.postId}</h4>
        <h5>name-${comment.name}</h5>
        <p>email-${comment.email}</p>
        `;
        commentsContainer.appendChild(CommentDiv);
    }
}
loadComments();