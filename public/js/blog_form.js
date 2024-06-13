const { response } = require("express");


const blogFormSubmitHandler = async (event) => {
    event.preventDefault();

    const blogForm = document.getElementById('blogForm');
    
    const formData = new FormData(blogForm);
    const blogData = {
        title: formData.get('title'),
        author: formData.get('author'),
        text_body: formData.get('content'),
        category: formData.get('category')
    };

    try {
        const response = await fetch('/api/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        });

        if(response.ok) {
            const result = await response.json();
            console.log('Blog post created', result);
            blogForm.reset();
        }
        else {
            console.error('Error creating blog post', response.statusText);
        }
    } catch (err) {
        console.error('Error:', err);
    };

    // const title = document.querySelector('#title').value.trim();
    // const author = document.querySelector('#author').value.trim();
    // const text_body = document.querySelector('#content').value.trim();
    // const category = document.querySelector('#category').value();

    // let category_id;

    // switch (category) {
    //     case 'HTML':
    //         category_id = 1;
    //         break;
    //     case 'JavaScript':
    //         category_id = 2;
    //         break;
    //     case 'CSS':
    //         category_id = 3;
    //     case 'Node.js':
    //         category_id = 4;
    //         break;
    // };

//     if (title && text_body) {
//         const response = await fetch('/api/blog_form', {
//             method: 'POST',
//             body: JSON.stringify({title, author, text_body, category_id }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/');
//         } else {
//             alert('Failed to save blog post.');
//         }
//     }
};

document
    .querySelector('.blog-post-form')
    .addEventListener('submit', blogFormSubmitHandler);


