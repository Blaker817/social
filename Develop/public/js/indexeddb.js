let db
const dbOpenRequest = indexedDB.open("expenses", 1)

dbOpenRequest.addEventListener("upgradeneeded", (e) => {
    const db = e.target.result
    db.createObjectStore("transaction", { autoIncrement: true })
})

dbOpenRequest.addEventListener("success", (e) => {
    db = e.target.result
    // upload 
})
