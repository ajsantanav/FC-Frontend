
export const getUser = async () => {
    const url = 'https://fc-backend-65yq.onrender.com/api/users';  
    try {
        const response = await fetch(url);
        const userInfo = await response.json();

        // Log the user info to see the response
        // console.log(userInfo);
       
        const firstUser = userInfo[0];  
        const name = firstUser.name;
        const email = firstUser.email;
  
        return { name, email };
    } catch (err) {
        console.error("Error fetching user:", err);
    }
};



export const getCharacter = async () => {
    const url = 'https://fc-backend-65yq.onrender.com/api/users';  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error ${response.status}: ${errorText || response.statusText}`);
        }

        const users = await response.json(); // Get the array of users

        if (!users || users.length === 0) {
          return []; // Handle the case where there are no users
        }

        const firstUser = users[0];  // Get the first user (index 0)
        const characters = firstUser.characters; // Access the 'characters' array

        // console.log("Characters:", characters); // Log the characters array for debugging

        // Return the characters array directly.  No need to create an object unless you need to add other properties.
        return characters;

    } catch (err) {
        console.error("Error fetching characters:", err);
        return null; // Or throw the error if you want to handle it further up
    }
};

