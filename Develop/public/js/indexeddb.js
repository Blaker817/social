let db
const dbOpenRequest = indexedDB.open("expenses", 1)

dbOpenRequest.addEventListener("upgradeneeded", (e) => {
    const db = e.target.result
    db.createObjectStore("expense", { autoIncrement: true })
})

dbOpenRequest.addEventListener("success", (e) => {
    db = e.target.result
    console.log("success")
    sendToDb()
})
function sendToDb() {
    const expense = db.transaction("expense", "readwrite")
    const expenseObjectStore = expense.objectStore("expense")
    const records = expenseObjectStore.getAll()
    records.onsuccess = () => {
        if (records.result.length) {
            fetch("/api/transaction/bulk", {
                method: "POST",
                body: JSON.stringify(records.result),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((newTransactions) => {
                    transactions = 
                    [...transactions, ...newTransactions]
                    populateTotal();
                    populateTable();
                    populateChart();
                    const expense = db.transaction("expense", "readwrite")
                    const expenseObjectStore =
                        expense.objectStore("expense");
                    expenseObjectStore.clear();
                    //alert
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
}
function saveRecord(record) {
    const expense = db.transaction("expense", "readwrite")
    const expenseObjectStore = expense.objectStore("expense")
    expenseObjectStore.add(record)
}