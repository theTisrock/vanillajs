const li = document.createElement('li');

li.className = 'colllection-item';
li.id = 'new-item';
li.setAttribute('title', 'New Item');

// create text node and append
li.appendChild(document.createTextNode('Hello Word'));

// let items = document.querySelectorAll('li'); // experiment to see if I can add an li to the list


// Create new link element
const link = document.createElement('a');
link.href = '#';
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';

// note: nothing will change until this link gets inserted into the li element

li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);

/* takeaways:
An obvious work flow for adding DOM elements is to...

-first create the element (via createElement() function)
-add the attributes that are needed to said element: class, attributes, hrefs, content, etc.
-find that location at which you wish to place the element. In this case we used the approach of finding the elements' parent
    and simply appending the new element as a child. 
*/