// WRITE
const myData = {
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@gmail.com",
}

const my_lib = new EasyHTTP('http://jsonplaceholder.typicode.com/');

my_lib.get('users')
.then(data => console.log('GET', data))
.catch(error => error);

my_lib.get('users/1')
.then(data => console.log('GET', data))
.catch(error => error);

my_lib.post('users', myData)
.then(data => console.log('POST', data))
.catch(error => console.log(error));

myData.email = "j.doe@gmail.com"

my_lib.put('posts/1', myData)
.then(data => console.log('PUT', data))
.catch(error => console.log(error));

my_lib.delete('posts/1')
.then(data => console.log('DELETE', data))
.catch(error => console.log(error));
