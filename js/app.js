function extraMemoryCost(id, price) {

    const extraMemoryCost = document.getElementById(id);

    const extraMemoryCostNumber = parseFloat(extraMemoryCost.innerText);
    const newExtraMemoryCostNumber = extraMemoryCostNumber + price;
    extraMemoryCost.innerText = newExtraMemoryCostNumber;

    // toatal-cost
    const totalCost = document.getElementById("total-cost");
    const previousTotalCostNumber = parseFloat(totalCost.innerText);
    const newTotalCost = previousTotalCostNumber + newExtraMemoryCostNumber;
    totalCost.innerText = newTotalCost;



}


// memory section btn handleing


// 8gb button handleing
document.getElementById("memory-button-8gb").addEventListener("click", function() {

    // const extraMemoryCost = document.getElementById("extra-memory-cost");

    // const extraMemoryCostNumber = parseFloat(extraMemoryCost.innerText);
    // const newExtraMemoryCostNumber = extraMemoryCostNumber + 0;
    // extraMemoryCost.innerText = newExtraMemoryCostNumber;
    extraMemoryCost("extra-memory-cost", 0);



})

// 16gb btn handling

document.getElementById("memory-button-16gb").addEventListener("click", function() {
    extraMemoryCost("extra-memory-cost", 90);


})


/* 
storage button handling

*/
// 256gb
document.getElementById("storage-button-256gb").addEventListener("click", function() {
    extraMemoryCost("extra-storage-cost", 0);
})
document.getElementById("storage-button-512gb").addEventListener("click", function() {
    extraMemoryCost("extra-storage-cost", 100);
})