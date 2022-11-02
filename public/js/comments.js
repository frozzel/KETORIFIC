const commentForm = async function(event) {
    event.preventDefault();
  
    const posts_id = document.querySelector('input[name="posts_id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  
    if (body) {
      await fetch('/api/Comments', {
        method: 'POST',
        body: JSON.stringify({
          posts_id,
          body
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document.querySelector('#newcomment').addEventListener('submit', commentForm);