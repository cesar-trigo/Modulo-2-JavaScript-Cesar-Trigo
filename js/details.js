let details = document.getElementById("details")



fetch('https://mh-amazing.herokuapp.com/amazing')
    .then( data => data.json() )
    .then( res => {
    eventos = res.events;
    ditails(eventos)
    inprecionDitails(eventsFilter) 
    })

function ditails(eventos) {
let idEvent = location.search.slice(4)
let eventsFilter = eventos.filter(eventos => idEvent == eventos.id)

eventsFilter.forEach(event => {
    if (event.assistance === undefined) {
        details.innerHTML =
            `
            <div class="row g-0 rounded-5" style="height: 100%;">
            <div class="col-md-6 rounded-5">
                <img src="${event.image}" class="imgDitails col-md-12 rounded-4" alt="${event.name}"
                    style="height:100%; width: 100%;">
            </div>
            <div class="col-5">
                <div class="card-body">
                    <p class="card-text">${event.name}</p>
                    <p class="card-text"><span>date :</span> ${event.date}</p>
                    <p class="card-text"><span>description :</span>${event.description}</p>
                    <p class="card-text"><span>category :</span>${event.category}</p>
                    <p class="card-text"><span>place :</span>${event.place}</p>
                    <p class="card-text"><span>capacity :</span>${event.capacity}</p>
                    <p class="card-text"><span>estimate:</span>${event.estimate}</p>
                    <p class="card-text"><span>price :</span>${event.price}</p>
                </div>
            </div>
            </div>
    `
    } else {
        details.innerHTML =
            `
            <div class="row g-0 rounded-5" style="height: 100%;">
            <div class="col-md-6 rounded-5">
                <img src="${event.image}" class="col-md-12 rounded-4" alt="${event.name}"
                    style="height:100%; width: 100%;">
            </div>
            <div class="col-5">
                <div class="card-body">
                    <p class="card-text">${event.name}</p>
                    <p class="card-text"><span>date :</span> ${event.date}</p>
                    <p class="card-text"><span>description :</span>${event.description}</p>
                    <p class="card-text"><span>category :</span>${event.category}</p>
                    <p class="card-text"><span>place :</span>${event.place}</p>
                    <p class="card-text"><span>capacity :</span>${event.capacity}</p>
                    <p class="card-text"><span>assistance:</span>${event.assistance}</p>
                    <p class="card-text"><span>price :</span>${event.price}</p>
                </div>
            </div>
            </div>
            `
    }
});
}











