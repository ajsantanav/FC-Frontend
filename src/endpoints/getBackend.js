
export const getUser = async () => {
    const url = 'https://fc-backend-65yq.onrender.com/api/users';  
    try {
        const response = await fetch(url);
        const userInfo = await response.json();

        // Log the user info to see the response
        console.log(userInfo);
       
        const firstUser = userInfo[0];  
        const name = firstUser.name;
        const email = firstUser.email;
  
        return { name, email };
    } catch (err) {
        console.error("Error fetching user:", err);
    }
};

