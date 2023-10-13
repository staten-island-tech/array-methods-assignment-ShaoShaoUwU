const champions = [
    {
        Name: "Lux",
        Title: "The Lady Of Luminosity",
        Human: true,
        relations: ["Garen", "J4", "Sylas"],
        region: "Demacia",
    },
    {
        Name: "Ahri",
        Title: "The Nine Tailed Fox",
        Human: false,
        relations: ["Yasuo", "Sett", "Xayah", "Rakan",],
        region: "Ionia",
    },
    {
        Name: "Seraphine",
        Title: "The Starry Eyed Songstress",
        Human: true,
        relations: ["Skarner", "Caitlyn", "Bao"],
        region: "Piltover",
    },
    {
        Name: "Evelynn",
        Title: "Agony's Embrace",
        Human: false,
        relations: ["Vayne", "Tamn Kench"],
        region: "Runeterra",
    },
    {
        Name: "Zeri",
        Title: "The Spark Of Zaun",
        Human: true,
        relations: ["Ekko", "Blitzcrank", "Jinx"],
        region: "Zaun",
    },


]
// const numbers = [1, 2, 3, 4, 5];


champions.forEach((champion) => {
    console.log(champion.Name);
    champion.relations.forEach((relation) => {
        console.log(relation);
    });
});
const Human = champions.filter((champion) => champion.Human);
console.log(Human); 
// numbers.forEach((number, index) => console.log(number, index));

// students.forEach((students)=> console.log(students.firstName));

// const graduated = students.filter((student)=> student.graduated);
// console.log(graduated); 

// const current = students.filter((student)=> student.graduated !== true);
// console.log(current); 

