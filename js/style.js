var collection = [
    {
        img:"images/micro1.png",
        h2:"AG-9029 Deluxe Microwave Oven",
        p:"12,000",
    },
    {
        img:"images/micro2.png",
        h2:"AG-9039 Deluxe Microwave Oven",
        p:"12,000",
    },
    {
        img:"images/micro3.png",
        h2:"AG-9031 Deluxe Microwave Oven",
        p:"12,000",
    },
    {
        img:"images/micro4.png",
        h2:"AG-9028 Deluxe Microwave Oven",
        p:"12,000",
    },
    {
        img:"images/iron1.png",
        h2:"AG-9021 Deluxe Microwave Oven",
        p:"12,000",
    },
    {
        img:"images/iron2.png",
        h2:"AG-9102 Deluxe Microwave Oven",
        p:"12,000",
    },
    {
        img:"images/micro7.png",
        h2:"AG-9209 Deluxe Microwave Oven",
        p:"12,000",
    },
    {
        img:"images/micro8.png",
        h2:"AG-9019 Deluxe Microwave Oven",
        p:"12,000",
    },
]


for(let i=0; i<collection.length;i++){
    document.getElementById("cid").innerHTML+=`
    <div class="col-sm-3 card border-0 mt-3">
    <div class="card">    
                <img src="${collection[i].img}" class="img-fluid">
            <div class="card-body text-center">
                <h5>${collection[i].h2}</h5>
                <p class="text-danger">Rs.${collection[i].p}</p>
                <div class="text-center">
            <a href="#">
                <button class="btn btn-info text-white" onClick="loadContact()" id="cardbutton">Add to Cart</button>
            </a>
            </div>
            </div>
            </div>
    </div>
    `
}
