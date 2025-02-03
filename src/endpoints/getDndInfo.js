const API_URL = "https://www.dnd5eapi.co/api";

const getClasses = async () => {
    const url = `${API_URL}/classes`;
    // console.log(url)
    try {
        const response = await fetch(url);
        const classes = await response.json();
        // console.log(classes)

        const classInfo = await Promise.all(
            classes.results.map(async (index) => {
                // console.log(index.index)
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

        // classInfo.forEach((c) =>
        //     console.log(`Class: ${c.name}, Proficiencies:`, c.proficiencies, `Subclasses:`, c.subclasses)
        // );
       
    }
    catch(err) {
        console.error("Error fetching D&D classes:", err);   
    }
};

const getMonsters = async () => {
    const url = `${API_URL}/monsters`;
    console.log(url)
    try {
        const response = await fetch(url);
        const monsterData = await response.json();
        console.log(monsterData)

        const monsterInfo = await Promise.all(
            monsterData.results.map(async (index) => {
                console.log(index.index)
                const monsterResponse = await fetch(`${API_URL}/monsters/${index.index}`);
                const details = await monsterResponse.json();
                

                return {
                    index: details.index,
                    name: details.name,
                    alignment: details.alignment,
                    size: details.size,
                    hit_points: details.hit_points,
                    armor_class: details.armor_class,
                    strength: details.strength,
                    dexterity: details.dexterity,
                    constitution: details.constitution,
                    intelligence: details.intelligence,
                    wisdom: details.wisdom,
                    charisma: details.charisma,
                    image: details.image
                };
            })
        );

        monsterInfo.forEach((m) =>
            console.log(
                `Monster: ${m.name}, Size: ${m.size}, Alignment: ${m.alignment}, HP: ${m.hit_points}, Image: ${m.image ? m.image : 'No image available'}`
            )
        );
       
    }
    catch(err) {
        console.error("Error fetching D&D classes:", err);   
    }
};

getMonsters();