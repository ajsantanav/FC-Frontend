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
                const classResponse = await fetch(`${API_URL}/classes/${classItem.index}`);
                const details = await classResponse.json();
                
                if (!classResponse.ok) {
                    throw new Error(`Failed to fetch details for class: ${classItem.index}`);
                }

                return {
                    index: details.index,
                    name: details.name,
                    proficiencies: details.proficiencies,
                    subclasses: details.subclasses // Fixed typo here
                };
            })
        );

        classInfo.forEach((c) => console.log(`Class: ${c.name}, Subclasses:`, c.subclasses));

       
    }
    catch(err)
    {
        console.error(err);
    }
};

getClasses();