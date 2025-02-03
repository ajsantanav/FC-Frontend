const API_URL = "https://www.dnd5eapi.co/api/";

const getClasses = async () => {
    const url = new URL(`${API_URL}classes`);
    console.log(url)
    try {
        const response = await fetch(url);
        const classes = await response.json();
        console.log(classes)
    }
    catch(err)
    {
        console.error(err);
    }
};

getClasses();