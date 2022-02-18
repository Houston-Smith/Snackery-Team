const snackeryForLyfe = [
    {
        firstName: "Houston",
        lastName: "Smith",
    },
    {
        firstName: "Lee",
        lastName: "Jennings",
    },
    {
        firstName: "Luke",
        lastName: "Slater",
    }
]

const listNames = () => {
 for (let i = 0; i < snackeryForLyfe.length; i++) {
    console.log(`${snackeryForLyfe[i].firstName} ${snackeryForLyfe[i].lastName} is a member of The Snackery!`)
    }
}

listNames()