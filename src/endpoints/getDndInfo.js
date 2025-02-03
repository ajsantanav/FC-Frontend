const API_URL = "https://www.dnd5eapi.co/api";

const getClasses = async () => {
    const url = new URL(`${API_URL}/classes`);
    console.log(url)
    try {
        const response = await fetch(url);
        const classes = await response.json();
        console.log(classes)

        const classInfo = await Promise.all(
            classes.results.map(async (index) => {
                console.log(index.index)
                const classResponse = await fetch(`${url}/${index.index}`);
                const classData = await classResponse.json();
                
            })
        )
    }
    catch(err)
    {
        console.error(err);
    }
};

getClasses();