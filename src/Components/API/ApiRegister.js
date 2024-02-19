

const postData = ({form})=>{

    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8087/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add other headers here if needed
          },
          mode: 'cors',
          credentials: 'same-origin',
          body: JSON.stringify(form)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        // Handle successful response here
      } catch (error) {
        console.error('Error:', error);
        // Handle the error (e.g., display an error message to the user)
      }
    }
  
fetchData()
  

}

export default postData;