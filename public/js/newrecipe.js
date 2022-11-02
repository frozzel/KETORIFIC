const newRecipe = async function (event) {
    event.preventDefault();


    const title = document.querySelector('input[name="title"]').value;
    const instructions = document.querySelector('textarea[name="instructions"]').value;
    const ingredients = document.querySelector('textarea[name="ingredients"]').value;
    const image = document.querySelector('input[name="image"]').value;

    await fetch(`/api/Recipe`, {
        method: `POST`,
        body: JSON.stringify({
            title,
            ingredients,
            instructions,
            image,
    
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.assign('/dashboard');
    }

    document.querySelector('#newRecipeForm').addEventListener("submit", newRecipe);