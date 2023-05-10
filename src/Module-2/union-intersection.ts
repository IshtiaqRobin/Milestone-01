// | or use korle union type
// & and use korle intersection type

type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// };

// intersection type
type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
};

// enum type

// enum Level {
//     junior = "junior",
//     mid = "mid",
//     senior = "senior"
// }

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: "junior" | "mid" | "senior";
};

// union type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Robin",
    expertise: "Javascript",
    experience: 6
};

const developer: NextLevelDeveloper = {
    name: "Robin",
    expertise: "Typescript",
    experience: 2,
    leadershipExperience: 1,
    level: "senior"
};


