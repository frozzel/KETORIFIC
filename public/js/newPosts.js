const newPost = async function(event){
    event.preventDefault();


const  title= document.querySelector('input[name="title"]').value;
const image = document.querySelector('input[name="image"]').value;
const description= document.querySelector('textarea[name="description"]').value;



 await fetch(`/api/Posts`, {
    method: `POST`,
    body: JSON.stringify({
        title,
        description,
        image,
    }),
    headers: { 'Content-Type': 'application/json' },
});
document.location.replace('/dashboard');
}


document.querySelector('#newPostForm').addEventListener("submit", newPost);


