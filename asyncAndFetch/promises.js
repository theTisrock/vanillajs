/* Promises */

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
]

function createPost(post) {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {  // setTimeout is async
            posts.push(post);
            resolve();
        }, 2000)
    });
}

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

// inject the callback 
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
