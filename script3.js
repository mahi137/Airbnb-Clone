window.addEventListener("DOMContentLoaded", () => {
    const id = JSON.parse(localStorage.getItem("id"));
    const data = JSON.parse(localStorage.getItem("room-data"));
    const container = document.querySelector(".container");

    const map_pg=document.querySelector(".map");
    // map_pg.setAttribute("class","map");
    map_pg.innerHTML=`
            <a href="https://www.google.com/maps/dir//${data[id].lat},${data[id].lng}/@${data[id].lat},${data[id].lng},15z?entry=ttu" target="_blank"><button>Get Directions</button></a>;
            <iframe src="https://maps.google.com/maps?q=${data[id].lat}, ${data[id].lng}&z=15&output=embed" frameborder="0"></iframe>
    `;
    // main.appendChild(map_pg);
    let rating;
             if(data[id].rating !==undefined){
              rating=data[id].rating;
             }else{rating='none'}
    const house_header = document.createElement("div");
    house_header.setAttribute("class", "house-title");
    house_header.innerHTML = `
      <h1>${data[id].type}</h1>
      <div class="row">
        <div>
          <span><i class="ri-star-fill"></i> ${rating}</span>
          <span> &middot; ${data[id].reviewsCount} Reviews</span>
        </div>
        <div>
          <p>Location: ${data[id].address}</p>
          <p><img src="images/share.png" alt="">Share  <img src="images/heart.png" alt=""> Like</p>
        </div>
      </div>
    `;
    container.appendChild(house_header);
  
    const gallery = document.createElement("div");
    gallery.setAttribute("class", "gallery");
    gallery.innerHTML = `
      <div class="gallery-img-1"><img src="${data[id].images[0]}"></div>
      <div><img src="${data[id].images[1]}"></div>
      <div><img src="${data[id].images[2]}"></div>
      <div><img src="${data[id].images[3]}"></div>
      <div><img src="${data[id].images[4]}"></div>
    `;
    container.appendChild(gallery);
  
    const house_room = document.createElement("div");
    house_room.setAttribute("class", "house-room-details");
  
    let service_fee, taxes_fee, bathroom;
  
    if (data[id].price.priceItems[1]) {
      service_fee = data[id].price.priceItems[1].amount;
    } else {
      service_fee = 'none';
    }
  
    if (data[id].price.priceItems[2]) {
      taxes_fee = data[id].price.priceItems[2].amount;
    } else {
      taxes_fee = 'none';
    }
  
    if (data[id].bathrooms !== undefined) {
      bathroom = data[id].bathrooms;
    } else {bathroom = '1';}
  
house_room.innerHTML = `
      <div class="room-details">
        <div class="house-fdetails">
          <div>
            <h1 id="room-host-d">Entire rental unit hosted by</h1>
            <p id="room-has">${data[id].persons} guest &nbsp; &nbsp; ${data[id].beds} beds &nbsp; &nbsp; ${bathroom} bathroom</p>
          </div>
          <img src="${data[id].hostThumbnail}" id="house-host" alt="">
        </div>
        <hr>
        <div class="house-policies">
          <h2>${data[id].name}</h2>
          <p class="about-room">${data[id].type}</p>
          <h2 id="room-policy">${data[id].cancelPolicy}</h2>
        </div>
        <div class="wt-this-f">
          
        </div>
      </div>
      <div class="room-pay">
        <div class="rp-review">
          <p>${data[id].price.currency} ${data[id].price.rate}/night</p>
          <p>${rating} <i class="ri-star-fill"></i> (${data[id].reviewsCount} Reviews)</p>
        </div>
        <form>
          <label for="checkin">check in</label>
          <input type="date">
          <label for="checkout">check out</label>
          <input type="date">
          <label for="guest">Guests</label>
          <input type="text" placeholder="ex: '2' Guests">
          <button>Reserve</button>
        </form>
        <div class="room-pay-fees">
          <div class="cleaning-fee">
            <p>Rate</p>
            <p id="clean-fee">${data[id].price.priceItems[0].amount}</p>
          </div>
          <div class="service-fees">
            <p>Service fee</p>
            <p id="service-fee">${service_fee}</p>
          </div>
          <div class="taxes">
          <p>Occupancy taxes and fees</p>
          <p id="tax-fee">${taxes_fee}</p>
      </div>
      <hr>
      <div class="total-pay">
          <p>Total</p>
          <p id="total-fee">${data[id].price.total}</p>
      </div>
  </div>
</div>
`;

    getOffers(data[id].previewAmenities)
    function getOffers(offers){
    const tag = house_room.querySelector(".wt-this-f");
    const h1=document.createElement('h1');
    h1.innerText="what this place offers";
    tag.appendChild(h1)
    if (data[id].previewAmenities.length !==0) {
    const n = data[id].previewAmenities.length;
    for (let i = 0; i < n; i++) {
      const p = document.createElement("p");
      p.innerText = `${data[id].previewAmenities[i]}`;
      tag.appendChild(p);
    }
    } else {
    tag.innerHTML = '';
    tag.innerHTML = `
      <h1>what this place offers</h1>
      <p>Wifi</p>
      <p>Clean room</p>
      <p>TV</p>
    `;
    }
    }
    

container?.appendChild(house_room);
});