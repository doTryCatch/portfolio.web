const CLI_MENU = {
  help: {
    heading: " the below written command are only valid here!!!",
    ls: "Use 'ls' to list the items of a particular working directories",
    cd: "Use 'cd' to change the current directory",
  },
};
const data = {
  portfolio: {
    about: {
      info:{"about.txt":""}
    
},
    skills: {"skill.txt":""},
    projects: {"projects.txt":""},
  },
};


const info={
  "about.txt": {
    name: "Your Name",
    age: 25,
    nationality: "Your Nationality",
    occupation: "Your Occupation",
    interests: ["Interest 1", "Interest 2", "Interest 3"],
  },
  "skill.txt": ["Language 1", "Language 2"],
  "project.txt": ["Language 1", "Language 2"]
}
module.exports = { CLI_MENU, data ,info};


