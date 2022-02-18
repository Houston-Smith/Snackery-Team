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

let bDays = ["08-02-2001", "10-2-1991", "09-09-1994"];

let logBDays = (bDays) => {
    for (let i = 0; i < bDays.length; i++){
        console.log(bDays[i]);
    }
}
logBDays(bDays)
