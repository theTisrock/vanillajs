/* Callback functions */


const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
]


// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000)
// }


// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`
//         })
//         document.body.innerHTML = output;
//     }, 1000)
// }

// call createPost then getPost to simulate slow, async fetching operation
// ideally, the newly created post should be included in the getPost request
// createPost({title: 'Post Three', body: 'This is post three'});  // takes 3 seconds to execute

// getPosts();  // takes 1 second to execute

// post 3 is missing from display because it wasn't fetched at the moment of rendering

function createPost(post, callback, bonusCallBack) {
    setTimeout(function() {  // setTimeout is async
        posts.push(post);
        callback();
        bonusCallBack();
    }, 2000)
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

function bonusCallBack() {
        console.log("This is the bonus call back just for practice");
}

// inject the callback 
createPost({title: 'Post Three', body: 'This is post three'}, getPosts, bonusCallBack);


/* notes
    Callbacks can exist in sync and async contexts.
    Callbacks are used similarly to decorators in that they functions are injected because they extend
    the functionality of some parent function.
*/


