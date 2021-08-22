///* common used function  */

// total calculation update

function totalCostUpdate() {
    const extraMemoryCostNumber = textToNumber("extra-memory-cost");
    const extraStorageCostNumber = textToNumber("extra-storage-cost");
    const deliveryCostNumber = textToNumber("delivery-cost");
    const totalCost = extraMemoryCostNumber + extraStorageCostNumber + deliveryCostNumber;
    document.getElementById("total-cost").innerText = totalCost + 1299;
    document.getElementById("total-price").innerText = totalCost + 1299;

}
// element catch and convert it to number

function textToNumber(id) {

    const cost = document.getElementById(id);

    const costNumber = parseFloat(cost.innerText);
    return costNumber;


}
/* // memory section btn handleing */

// memory section update with two button
function memorySectionUpdate(isAdding) {
    const extraMemoryCost = document.getElementById("extra-memory-cost");
    if (isAdding == true) {
        extraMemoryCost.innerText = 180;
    } else {
        extraMemoryCost.innerText = 0;
    }
    totalCostUpdate();
}

// 8gb button handling
document.getElementById("memory-button-8gb").addEventListener("click", function() {
    memorySectionUpdate(false);
})

// // 16gb btn handling
document.getElementById("memory-button-16gb").addEventListener("click", function() {
        memorySectionUpdate(true);
    })
    /* 
    storage section handling
    */
function storageSectionUpdate(id) {
    const extraStorageCost = document.getElementById("extra-storage-cost");

    if (id == "256gb") {
        extraStorageCost.innerText = 0;
    } else if (id == "512gb") {
        extraStorageCost.innerText = 100;
    } else if (id == "1tb") {
        extraStorageCost.innerText = 180;
    }

    totalCostUpdate();

}
// 256gb storage handling
document.getElementById("storage-button-256gb").addEventListener("click", function() {
    storageSectionUpdate("256gb");

})

// 512 gb storage handling
document.getElementById("storage-button-512gb").addEventListener("click", function() {

    storageSectionUpdate("512gb");

})

// 1tb storage handling
document.getElementById("storage-button-1tb").addEventListener("click", function() {
    storageSectionUpdate("1tb");

})

/* 
delivery section btn handling
*/
function deliverySectionUpdate(isAdding) {
    const deliveryCost = document.getElementById("delivery-cost");
    if (isAdding == false) {
        deliveryCost.innerText = 0;
    } else {
        deliveryCost.innerText = 20;
    }
    totalCostUpdate();

}

// 25 aug delivery
document.getElementById("delivery-25-button").addEventListener("click", function() {
    deliverySectionUpdate(false);

})

// 21 aug delivery
document.getElementById("delivery-21-button").addEventListener("click", function() {
    deliverySectionUpdate(true);

})

/* 
apply promo code button handling

*/

document.getElementById("promo-button").addEventListener("click", function() {
    const promoCode = document.getElementById("promo-code").value;
    if (promoCode.toLowerCase() == "stevekaku") {
        const totalPriceNumber = textToNumber("total-price");
        const offer = totalPriceNumber / 20;
        const newTotalPrice = totalPriceNumber - offer;
        document.getElementById("total-price").innerText = newTotalPrice;
    } else {
        console.log(alert("Your promo Code not correct"));
    }
    document.getElementById("promo-code").value = "";

})