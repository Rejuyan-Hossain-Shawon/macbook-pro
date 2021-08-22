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
    const extraMemoryCostNumber = parseFloat(extraMemoryCost.innerText);
    if (isAdding == false) {
        if (extraMemoryCostNumber == 90) {
            const newExtraMemoryCostNumber = extraMemoryCostNumber - 90;
            extraMemoryCost.innerText = newExtraMemoryCostNumber;

        }
    } else if (isAdding = true) {
        if (extraMemoryCostNumber < 90) {
            const newExtraMemoryCostNumber = extraMemoryCostNumber + 90;
            extraMemoryCost.innerText = newExtraMemoryCostNumber;
        }
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


// 256gb storage handling
document.getElementById("storage-button-256gb").addEventListener("click", function() {
    const extraStorageCost = document.getElementById("extra-storage-cost");
    const extraStorageCostNumber = parseFloat(extraStorageCost.innerText);
    if (extraStorageCostNumber == 100) {
        const newExtraStorageCost = extraStorageCostNumber - 100;
        extraStorageCost.innerText = newExtraStorageCost;

    } else if (extraStorageCostNumber == 180) {
        const newExtraStorageCost = extraStorageCostNumber - 180;
        extraStorageCost.innerText = newExtraStorageCost;

    }
    totalCostUpdate();

})

// 512 gb storage handling
document.getElementById("storage-button-512gb").addEventListener("click", function() {
    const extraStorageCost = document.getElementById("extra-storage-cost");
    const extraStorageCostNumber = parseFloat(extraStorageCost.innerText);
    if (extraStorageCostNumber == 180) {
        const newExtraStorageCost = extraStorageCostNumber - 80;
        extraStorageCost.innerText = newExtraStorageCost;

    } else if (extraStorageCostNumber == 0) {
        const newExtraStorageCost = extraStorageCostNumber + 100;
        extraStorageCost.innerText = newExtraStorageCost;

    }
    totalCostUpdate();

})

// 1tb storage handling
document.getElementById("storage-button-1tb").addEventListener("click", function() {
    const extraStorageCost = document.getElementById("extra-storage-cost");
    const extraStorageCostNumber = parseFloat(extraStorageCost.innerText);
    if (extraStorageCostNumber == 100) {
        const newExtraStorageCost = extraStorageCostNumber + 80;
        extraStorageCost.innerText = newExtraStorageCost;

    } else if (extraStorageCostNumber == 0) {
        const newExtraStorageCost = extraStorageCostNumber + 180;
        extraStorageCost.innerText = newExtraStorageCost;

    }
    totalCostUpdate();

})

/* 
delivery section btn handling
*/
function deliverySectionUpdate(isAdding) {
    const deliveryCost = document.getElementById("delivery-cost");
    const deliveryCostNumber = parseFloat(deliveryCost.innerText);
    if (deliveryCostNumber == 20 && isAdding == false) {
        const newDeliveryCost = deliveryCostNumber - 20;
        deliveryCost.innerText = newDeliveryCost;

    } else if (deliveryCostNumber == 0 && isAdding == true) {
        const newDeliveryCost = deliveryCostNumber + 20;
        deliveryCost.innerText = newDeliveryCost;

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