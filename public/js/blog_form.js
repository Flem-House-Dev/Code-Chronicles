// const { response } = require("express");
console.log("blog_form.js is running...");


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
        const response = await fetch('/api/blog_form', {
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
};

document
    .querySelector('.blog-post-form')
    .addEventListener('submit', blogFormSubmitHandler);


