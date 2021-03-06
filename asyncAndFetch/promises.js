/* Promises */

const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
]

function createPost(post) {

    return new Promise(function(resolve, reject) {
        setTimeout(function() {  // setTimeout is async
            posts.push(post);
            // mimic error
            const error = true;
            if (!error) {
                resolve();  // triggers .then
            } else {
                reject('Error: something went wrong!');  // triggers .catch
            }
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
createPost({title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(function(error) {
        console.log(error);
    })


/* practice */

function divideFraction(numerator, denominator) {
    return new Promise(function(resolve, reject) {
        if (denominator === 0) {
            reject("Cannot divide by zero.")
        } else {
            resolve(numerator / denominator);
        }
    });
}

divideFraction(9, 9).then(function(answer) {
    console.log(answer);
}).catch(function(error) {
    console.log(error);
});
