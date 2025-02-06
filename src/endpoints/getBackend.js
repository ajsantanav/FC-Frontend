
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
        const id = firstUser._id;

  
        return { name, email, id };
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

        const users = await response.json(); 

        if (!users || users.length === 0) {
          return []; 
        }

        const firstUser = users[0];  
        const characters = firstUser.characters; 

 
        return characters;

    } catch (err) {
        console.error("Error fetching characters:", err);
        return null; 
    }
};

