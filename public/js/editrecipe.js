const postId = document.querySelector('input[name="recipe_id"]').value;

const editForm = async function(event) {
  event.preventDefault();

  const  title= document.querySelector('input[name="title"]').value;
  const instructions = document.querySelector('textarea[name="instructions"]').value;
  const image = document.querySelector('input[name="image"]').value;
  const ingredients= document.querySelector('textarea[name="ingredients"]').value;

  await fetch(`/api/Recipe/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
        title,
        instructions,
        image,
        ingredients,
        
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  document.location.replace('/dashboard');
};

const deletebtn = async function() {
  await fetch(`/api/Recipe/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#editRecipe')
  .addEventListener('submit', editForm);
document
  .querySelector('#deletebtn')
  .addEventListener('click', deletebtn);
