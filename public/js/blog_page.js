console.log("blog_page.js is running...");

const deletePostHandler = async (id) => {
    try {
        const response = await fetch(`/api/blog_delete/${id}`, {
            method: 'DELETE',
        });

        console.log("Response status: ", response.status);
        if (response.ok) {
            console.log(`Blog ${id} deleted`);
            window.location.href = '/';
        }
    } catch (err) {
        console.log('Blog was not deleted', err);
    }
};

document.getElementById('delete').addEventListener('click',
    (event) => {
        console.log(event.target);
        const blogPostId = event.target.dataset.blogId;
        if (blogPostId) {
            console.log("we deleted it, woo hoo!")
            deletePostHandler(blogPostId);
        } else {
            console.log("We did not delete it, sorry");
        }
    });