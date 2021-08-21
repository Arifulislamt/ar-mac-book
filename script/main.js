// extra mamory button 
const mamButton1 = document.getElementById("mamory-btn1");
const mamButton2 = document.getElementById("mamory-btn2");
// mamory cost 
const mamoryCost = document.getElementById("mamory-cost");

// extra mamory cost update 
mamButton1.addEventListener('click', function(){
    mamoryCost.innerText = '0';
    updateTotalPrice()
})
mamButton2.addEventListener('click', function(){
    mamoryCost.innerText = '180';
    updateTotalPrice()
})


// extra storage button
const storageBtn1 = document.getElementById("storage-btn1"); 
const storageBtn2 = document.getElementById("storage-btn2"); 
const storageBtn3 = document.getElementById("storage-btn3");
// storage cost 
const storageCost = document.getElementById("storag-cost"); 

// extra storage cost update
storageBtn1.addEventListener('click', function(){
    storageCost.innerText = '0';
    updateTotalPrice()
})
storageBtn2.addEventListener('click', function(){
    storageCost.innerText = '100';
    updateTotalPrice()
})
storageBtn3.addEventListener('click', function(){
    storageCost.innerText = '180';
    updateTotalPrice()
})


// delivery button 
const deliveryBtn1 = document.getElementById("delivery-btn1");
const deliveryBtn2 = document.getElementById("delivery-btn2");
// deliveryCost 
const deliveryCost = document.getElementById("delivery-cost");

// update delivery cost 
deliveryBtn1.addEventListener('click', function(){
    deliveryCost.innerText = '0';
    updateTotalPrice()
})
deliveryBtn2.addEventListener('click', function(){
    deliveryCost.innerText = '20';
    updateTotalPrice()
})

// bast and total price 
const bastPrice = document.getElementById("best-price");
const totalPrice = document.getElementById("total-price");
const total = document.getElementById("total");

// update total price 
function updateTotalPrice(){
    const bastProductPrice = parseInt(bastPrice.innerText);
    const productDeliveryCost = parseInt(deliveryCost.innerText);
    const productStorageCost =parseInt(storageCost.innerText);
    const productMamoryCost = parseInt(mamoryCost.innerText);
    const grandTotal = bastProductPrice + productDeliveryCost + productStorageCost + productMamoryCost;
    totalPrice.innerText = grandTotal;
    total.innerText = grandTotal;
}

// kupon
document.getElementById("apply-kupon").addEventListener('click', function(){
    const kuponInput = document.getElementById("input-kupon");
    const totalPriceText = document.getElementById("total-price").innerText;
    if(kuponInput.value == 'stevekaku'){
        const discount = parseInt(totalPriceText)-totalPriceText * 20 / 100;
        document.getElementById('total').innerText = discount
        kuponInput.value = '';
    }
    else{
        
    }
}) 

