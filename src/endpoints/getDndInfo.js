const API_URL = "https://www.dnd5eapi.co/api";

const getClasses = async () => {
    const url = `${API_URL}/classes`;
    console.log(url)
    try {
        const response = await fetch(url);
        const classes = await response.json();
        console.log(classes)

        const classInfo = await Promise.all(
            classes.results.map(async (index) => {
                console.log(index.index)
                const classResponse = await fetch(`${API_URL}/classes/${index.index}`);
                const details = await classResponse.json();
                

                return {
                    index: details.index,
                    name: details.name,
                    proficiencies: details.proficiencies.map(prof => prof.name),
                    subclasses: details.subclasses.map(sub => sub.name)
                };
            })
        );

        classInfo.forEach((c) =>
            console.log(`Class: ${c.name}, Proficiencies:`, c.proficiencies, `Subclasses:`, c.subclasses)
        );
       
    }
    catch(err) {
        console.error("Error fetching D&D classes:", err);   
    }
};

getClasses();