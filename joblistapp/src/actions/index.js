
const storageData = JSON.parse(localStorage.getItem("jobs")) || []

export const addJob = (values) => {
    storageData.push(values)
    localStorage.setItem("jobs", JSON.stringify(storageData))
    // const jobs = localStorage.getItem("Jobs")
}