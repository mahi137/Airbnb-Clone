const storedLocation = JSON.parse(localStorage.getItem("Location"));
const storedCheckIn = localStorage.getItem("CheckIn");
const storedCheckOut = localStorage.getItem("CheckOut");
const storedGuest = JSON.parse(localStorage.getItem("Guest"));
let data;

// let userLocation;

let userLoc = {};
window.onload = () => {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
          userLoc.latitude = position.coords.latitude;
          userLoc.longitude = position.coords.longitude;
          setDistance();
      });
  }else{
      console.log('no-geolocation');
  }
}
const search_details=document.getElementById("search-details");
search_details?search_details.innerText=storedLocation +"| "+ storedCheckOut +"| "+ storedGuest:null;
// console.log(document.getElementsByClassName("container"))
async function getDetails(location, checkin, checkout, guest) {
  const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkin}&checkout=${checkout}&adults=${guest}&children=0&infants=0&pets=0&page=1&currency=USD`;
  const options = {
    method: "GET",
    headers: { 
      // eb6e65e43cmsh225112c58b81b4bp1d6494jsn510d9e153b5d
      "X-RapidAPI-Key": "eb6e65e43cmsh225112c58b81b4bp1d6494jsn510d9e153b5d",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    data = result.results;
      // console.log(data)
      localStorage.setItem("room-data",JSON.stringify(data));
      getCards(data);
  } catch (error) {
    console.error(error);
  }
}
    // adding details to search bar
   

    // creating room cards
   let map_details=[];
   const dt=[
    {
      
      "id": "934685981042581769",
      "url": "https://www.airbnb.com/rooms/934685981042581769",
      "deeplink": "https://www.airbnb.com/rooms/934685981042581769?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 19,
      "name": "Cottages at Virupapuragaddi HFR",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 2,
      "city": "Virupapuragaddi",
      "images": [
        "https://a0.muscache.com/im/pictures/0b48ba47-2a15-41c3-bea2-7e18182183ea.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/af233911-5713-4119-996c-9eca5ed5ea64.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/cc4615ed-6a8e-4a1a-b47b-d7a9c6585f65.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/716a7ef2-abc4-45ab-823c-02b867813f85.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/691d973b-eb23-4b3d-a8cd-6e3aa7e2dfb5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2e8fc783-e7c0-4318-a376-efecaf3c41a5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/12369c4c-c0f0-4805-9415-669441fcc95e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0d4741b9-c579-42a5-993f-3db21d791b16.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/28a4f32f-fb2b-45ad-a24e-d9babdd7fd24.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3aa9b274-c09b-41f2-9198-b3a89ad23c2e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/aa1ff8e9-1dc0-449c-9156-45c8e4a8c403.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b9a1e1fc-3d84-4d04-8478-63a109084036.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b1209ae0-937e-45c6-9596-476014540f42.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/85ab1d92-6566-4f3d-af10-14c86991d615.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3f34c094-dcf2-448e-b285-fea4941781e0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6d173bdc-5cba-428f-8eb1-62886d211359.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.34448372280958,
      "lng": 76.47006631695301,
      "persons": 2,
      "reviewsCount": 0,
      "type": "Entire guesthouse",
      "userId": 226713108,
      "address": "Virupapuragaddi, Karnataka, India",
      "amenityIds": [
        32,
        4,
        40,
        9,
        11,
        12
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 14,
        "currency": "USD",
        "total": 14,
        "priceItems": [
          {
            "title": "$11 x 1 night",
            "amount": 11
          },
          {
            "title": "Airbnb service fee",
            "amount": 2
          },
          {
            "title": "Taxes",
            "amount": 1
          }
        ]
      }
    },
    {
      "id": "40501852",
      "url": "https://www.airbnb.com/rooms/40501852",
      "deeplink": "https://www.airbnb.com/rooms/40501852?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 20,
      "name": "Baba Cafe, Tents near Anjinadrihill, Sanapur Lake.",
      "bathrooms": 2,
      "bedrooms": 4,
      "beds": 2,
      "city": "Hampi",
      "images": [
        "https://a0.muscache.com/im/pictures/7f41440c-e060-4599-8294-4b0192b6ad09.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/280b42e7-04ca-4942-b232-a03671fe1913.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6005dd1b-0a59-4dc8-84fc-6515f38fa336.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c92f5c28-39c2-4f9a-a61a-9f44aa3be0d3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d749e7bf-d99b-4dcb-af0e-cb9b17a07c12.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ec5e3531-60b0-4efb-9d95-8fea9661f93f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/cb167efe-5a02-4d32-a698-70213e7ad3c8.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3cd51d58-a46a-46e5-a142-6cfec869633f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e05bf4d7-29fe-4ac8-96dd-51bef3fa3183.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a225e141-954f-4aaa-acd6-371cc81c21ce.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/87f12790-2a04-4164-b42a-7e41d66195a0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c8508c9e-8594-427b-a40a-61493ac18c9d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0868faf1-607c-4e81-81a0-3635a6d93fdb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d8390fa5-c052-400e-8ec7-59edc367fb06.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0884e073-82bf-44f2-b7fd-a6c9bc56391d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a052ada1-82e1-45e0-bbb3-1333871dcebe.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c9ad2357-7c82-49f0-a3c5-2a71a2232313.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/25f9f35a-2765-432c-bb01-8816986570b5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/48853702-a262-4044-b98e-9d613bfcbe8a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e2a3a4d6-2a6e-4f94-bb19-6d73ea64f01b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/aa979051-67c5-47f6-8723-9b5d0a7aaca6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c69c3bd0-f9ba-4d22-a102-d88687719d04.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6553b51d-f5e6-4ca6-8feb-5b07ba7d1b10.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e2706d85-25a8-41e3-93e3-cb7fec7b3d8b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5ade7bb6-8289-4b49-82cc-b066ed1a5cf3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/46185829-2d39-446c-81d5-62def8e91813.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7949d179-57c8-4a58-a207-9959e5ecf1ae.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5829a008-35d8-4557-9a6e-5de438cb81d1.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e69a7b03-c8e0-4a7a-9af0-6ccbf2ae7417.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/382bf25c-5416-4ae6-8221-c67520b1cfb6.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.35236,
      "lng": 76.46663,
      "persons": 10,
      "reviewsCount": 0,
      "type": "Private room in tent",
      "userId": 226713108,
      "address": "Hampi, Karnataka, India",
      "amenityIds": [
        32,
        4,
        40,
        9,
        11,
        12
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 13,
        "currency": "USD",
        "total": 13,
        "priceItems": [
          {
            "title": "$10 x 1 night",
            "amount": 10
          },
          {
            "title": "Airbnb service fee",
            "amount": 2
          },
          {
            "title": "Taxes",
            "amount": 1
          }
        ]
      }
    },
    {
      "id": "39078991",
      "url": "https://www.airbnb.com/rooms/39078991",
      "deeplink": "https://www.airbnb.com/rooms/39078991?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 21,
      "name": "Lodge Rooms at Hampi. Kaddirampura. Guest house",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Kadirampura",
      "images": [
        "https://a0.muscache.com/im/pictures/b8ffdc09-e0b0-48a6-9161-15d9007e7a76.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/9576daf4-6524-4a1a-a5b0-53c950902121.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/650441b3-aab6-4068-a171-fc6039989209.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/51cff95e-d561-4229-82ab-2e82cb9e8984.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/751b2879-6307-4dad-8102-4d76a6cf0fc3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4f61ae2c-45d0-4bae-a8a4-2cc6a43ea669.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0bb3211c-6535-4905-8655-fbc3c3f3e670.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0b51225d-42fe-4755-8f44-fc73bf7b1107.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0f94d0fe-5f52-4f56-ab33-18d161d59074.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/97ac7857-0b8d-47b6-9ec6-454b02c2f411.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/cf521b9a-8746-47ba-b658-12e238996634.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/54994eeb-a2da-4684-ac4a-35afacf7c675.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/c88f85a9-afb1-4c6d-8637-982165707f23.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2ab682cc-0293-4314-a44d-5960e38db774.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2f4c453f-c1eb-45f9-ae82-3cb5b693edf9.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5112979d-40af-42b4-b89b-d9e0b5716ca8.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.31087,
      "lng": 76.45025,
      "persons": 2,
      "reviewsCount": 1,
      "type": "Private room in nature lodge",
      "userId": 226713108,
      "address": "Kadirampura, Karnataka, India",
      "amenityIds": [
        4,
        39,
        40,
        9,
        57
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 15,
        "currency": "USD",
        "total": 15,
        "priceItems": [
          {
            "title": "$12 x 1 night",
            "amount": 12
          },
          {
            "title": "Airbnb service fee",
            "amount": 2
          },
          {
            "title": "Taxes",
            "amount": 1
          }
        ]
      }
    },
    {
      "id": "878647347597565868",
      "url": "https://www.airbnb.com/rooms/878647347597565868",
      "deeplink": "https://www.airbnb.com/rooms/878647347597565868?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 22,
      "name": "Peeper Castle",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 1,
      "city": "Hosapete",
      "images": [
        "https://a0.muscache.com/im/pictures/8ccd25c1-b9a3-4569-8010-6aea2d16afb6.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5697628c-1a7b-4d66-bce2-d519588a2650.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a99788c6-54a2-4f92-9d06-b157fdf84b33.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/8fbe1543-48dd-491e-ae1e-abb3577fb824.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/99b3997d-c745-4fe4-828f-6b7d5df82e05.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/291a40a4-0015-40bc-9625-212e0c73bfab.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/264512b7-bdee-4cad-8f4a-2273a0336099.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/24c02869-243f-4d5c-a771-589b5a7abb29.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a07dc241-ec40-4ff5-bf9c-6c2ef2d0d809.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/81f1f3b7-4110-4dc0-bc7b-e46e98b1cb00.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1e94c0dc-4144-45df-a6d2-dde8dcca814c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/11b02329-8f90-412d-8761-03900a80908f.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b89835c5-3f01-4ab6-824c-00c4ad3b7e24.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e8900399-f145-49bd-8f00-032b9c89a3ca.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f5ba013a-affd-471a-9b27-bf19410c13e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/25987d66-3fd9-4e74-a45d-fa1808e4f15e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0bb57adf-87b3-4bd2-93f0-be34a68587bb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/9d92fbd3-9e9e-4129-ab4a-c0586215b2f3.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ceddf81e-4397-40e4-a8af-914de215177a.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 15.28499,
      "lng": 76.42364,
      "persons": 3,
      "reviewsCount": 0,
      "type": "Entire cabin",
      "userId": 433672737,
      "address": "Hosapete, Karnataka, India",
      "amenityIds": [
        4,
        132,
        5,
        133,
        7,
        8,
        9,
        394,
        522,
        139,
        12,
        527,
        528,
        145,
        657,
        280,
        665,
        30,
        672,
        34,
        37,
        39,
        167,
        40,
        41,
        45,
        46,
        686,
        47,
        179,
        57,
        185,
        61,
        65,
        71,
        73,
        74,
        77,
        79,
        210,
        211,
        85,
        86,
        91,
        93,
        227,
        611,
        100,
        101,
        232,
        364,
        510
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 76,
        "currency": "USD",
        "total": 76,
        "priceItems": [
          {
            "title": "$59 x 1 night",
            "amount": 59
          },
          {
            "title": "Airbnb service fee",
            "amount": 10
          },
          {
            "title": "Taxes",
            "amount": 7
          }
        ]
      }
    },
    {
      "id": "46518699",
      "url": "https://www.airbnb.com/rooms/46518699",
      "deeplink": "https://www.airbnb.com/rooms/46518699?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 23,
      "name": "RMR Ac stay 1",
      "bathrooms": 2,
      "bedrooms": 2,
      "beds": 2,
      "city": "Hosapete",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/8f05ab78-a4de-4c3e-804d-a8103b9ee264.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/4b200ff8-3f18-4ce6-8e19-177fac92f5ad.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/788e24d1-eea4-43dd-a21c-a61d01c53f03.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/ce6a1e4e-8f4a-4e6f-b639-6ee2f2e48706.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/7f89f5be-8a36-4813-a942-21297eae3031.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/7f14fda9-edd4-4496-a355-37a1e96899e6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/ce6eafc5-5138-4256-b61e-07b24d280fff.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/bc670a90-c3d9-4f28-906e-6ae88fd7b891.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/e9bcdd95-3442-4bb6-88ab-e44119d049da.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/54454c8a-f5f8-44ac-ae33-978e40cf1f03.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/367a5d75-b26e-45a9-a8cb-79e0fc22eb84.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/5337a47c-3f4b-4a42-86a3-565bdc3473a6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/dafc6d79-04b7-4aab-ba40-d65d19dcf37b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/967830c2-e7bb-43b9-8f89-a88097471f4c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/467f34d0-d860-4ce8-96db-78f7709ee9cb.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/149352f9-6c0c-4ec3-a434-d3714d4b9867.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/8cbcc3ed-cd38-427a-a6c2-209cb94f1533.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/18c17a02-ec6e-43c8-9d66-4096beedc7cd.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/669acb5c-ece9-4ac0-a8b1-f31ca3aef843.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/a9b3a834-4cc0-4dfd-8c8c-d3dade888a55.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/f84c86af-2f05-42b1-8081-4f7e001bd9e5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-22537705/original/ff1c584b-77de-4fd6-a65e-4a9e9f95faf7.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.27662,
      "lng": 76.38653,
      "persons": 4,
      "reviewsCount": 6,
      "rating": 4,
      "type": "Entire serviced apartment",
      "userId": 139642238,
      "address": "Hosapete, Karnataka, India",
      "amenityIds": [
        1,
        129,
        4,
        5,
        103,
        40,
        104,
        9,
        41,
        11,
        12,
        44,
        77,
        46,
        47,
        16,
        23,
        31
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 36,
        "currency": "USD",
        "total": 36,
        "priceItems": [
          {
            "title": "$30 x 1 night",
            "amount": 30
          },
          {
            "title": "Cleaning fee",
            "amount": 2
          },
          {
            "title": "Taxes",
            "amount": 4
          }
        ]
      }
    },
    {
      "id": "828390075955885194",
      "url": "https://www.airbnb.com/rooms/828390075955885194",
      "deeplink": "https://www.airbnb.com/rooms/828390075955885194?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 24,
      "name": "Brise stables Hampi",
      "bathrooms": 7.5,
      "bedrooms": 5,
      "beds": 6,
      "city": "Hosapete",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-828390075955885194/original/7bb90741-4337-4017-9d8d-fd3e1e91e112.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/2f6732a7-d72d-48cf-9388-95d255b84a47.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4e499487-2213-4bec-8402-d481f3a1894c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0c7400ac-50d3-4633-9a61-697dbb7e0bb4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ab2ac150-5613-415b-8bdc-08bb0dc55c8e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/70fa1d79-8c5e-4e87-abe5-b7f95552ed8b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/5e04ee37-1fdf-477c-afcd-4ef23531e760.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5fd5ffd5-1662-4c9b-b6b3-b837b45af9c9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/7792e6c3-7fd3-457e-8c4e-25953993324d.png?im_w=720",
        "https://a0.muscache.com/im/pictures/a263c8f9-70b5-4935-82f3-db54f328670b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/4c7750d2-0754-4564-a399-c61bae6b20d6.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/80e3cc2f-ff99-4bf9-9f7f-5d6d034c7a63.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/396a506c-b022-4af4-b0b4-bfabc3963e9e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/bba81e6f-61e1-4bc3-af13-74a5b24601b3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4bea9bdd-45a4-4e4c-b141-87fdf3cc9e98.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2c922982-84d0-4cdb-bb7f-1ecdabbe1e91.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/3bcc87ca-d991-4b38-8670-b4d2261b9602.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-53553616/original/d72421a4-4f49-445d-b2a3-136478d81c4a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/da38e752-b9ff-460c-a174-37044786fd47.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/8bd97e8c-7076-4099-af8b-977df0e3c151.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6524ebb6-e80b-44af-a299-c32829b0dae0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/709cab8b-f41a-4bff-862b-cc21e7d071cf.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5c79729a-d34e-42de-a170-8f6c45502e48.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1a76c24e-4a47-44f2-8f75-99387f7b19f5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/ca840471-54a8-40a3-85ed-5a03fcefbbe3.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/99845d73-8862-418f-9aa2-51d05f86a68c.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/97314220-83a2-44a6-947c-ab8fbea78fcb.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-828390075955885194/original/15528587-93e6-4d93-9b28-9e7fbfefa8b5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-828390075955885194/original/b9a86926-4aea-4f90-aa0e-af8c898e5d05.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ceddf81e-4397-40e4-a8af-914de215177a.jpg?aki_policy=profile_x_medium",
      "isSuperhost": true,
      "rareFind": false,
      "lat": 15.28282,
      "lng": 76.41873,
      "persons": 15,
      "reviewsCount": 0,
      "type": "Castle",
      "userId": 433672737,
      "address": "Hosapete, Karnataka, India",
      "amenityIds": [
        4,
        132,
        392,
        9,
        137,
        394,
        139,
        12,
        527,
        528,
        657,
        146,
        665,
        667,
        30,
        415,
        671,
        32,
        672,
        34,
        40,
        41,
        42,
        44,
        45,
        46,
        47,
        51,
        55,
        56,
        57,
        185,
        315,
        61,
        66,
        71,
        73,
        74,
        75,
        77,
        79,
        211,
        85,
        86,
        91,
        93,
        96,
        98,
        100,
        101,
        103,
        104,
        236
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 489,
        "currency": "USD",
        "total": 489,
        "priceItems": [
          {
            "title": "$363 x 1 night",
            "amount": 363
          },
          {
            "title": "Airbnb service fee",
            "amount": 61
          },
          {
            "title": "Taxes",
            "amount": 65
          }
        ]
      }
    },
    {
      "id": "814091780262179069",
      "url": "https://www.airbnb.com/rooms/814091780262179069",
      "deeplink": "https://www.airbnb.com/rooms/814091780262179069?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 25,
      "name": "Hampi home for friends",
      "bathrooms": 1,
      "bedrooms": 1,
      "beds": 4,
      "city": "Nimbapura",
      "images": [
        "https://a0.muscache.com/im/pictures/6781c169-2d0d-463b-99d6-784c18bb0f74.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b300c2de-baa5-49a3-b19b-354998ddd54b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/45d655c1-5800-451f-b51e-5978531f39a7.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a1bb8fb1-c325-4c99-aa63-79a1862043b9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5d6dbdf3-77b9-4b3a-8395-d74a1e920f26.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2948e11d-1e5f-4fd7-b723-be4ab4a5afc7.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/da727ba0-fb2d-422d-a1c0-b5708d0b69f5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7493a3cd-dca2-4a79-80ca-873109aba373.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/83bac383-0c13-4a32-9935-2423f211e0f0.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e785f058-ddc6-459f-8478-eabe1576d978.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/8a0d61dd-5383-412a-ab9b-6387b0aa02ae.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.35262,
      "lng": 76.49243,
      "persons": 3,
      "reviewsCount": 2,
      "type": "Entire home",
      "userId": 465509399,
      "address": "Nimbapura, Karnataka, India",
      "amenityIds": [
        179
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 70,
        "currency": "USD",
        "total": 70,
        "priceItems": [
          {
            "title": "$54 x 1 night",
            "amount": 54
          },
          {
            "title": "Airbnb service fee",
            "amount": 9
          },
          {
            "title": "Taxes",
            "amount": 7
          }
        ]
      }
    },
    {
      "id": "37129921",
      "url": "https://www.airbnb.com/rooms/37129921",
      "deeplink": "https://www.airbnb.com/rooms/37129921?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 26,
      "name": "RMR stay 1",
      "bathrooms": 2,
      "bedrooms": 2,
      "beds": 3,
      "city": "Hosapete",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/02421eac-cc79-45c2-bbab-36f4de0b2b60.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/f50d2311-90a6-4cd5-bb53-ff21283e1663.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/c62eb2db-9861-4f5a-a048-3307f771648a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b1d5efe7-079b-403a-946a-185a99a182bf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b1d5efe7-079b-403a-946a-185a99a182bf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/bffc2f48-ffa1-481a-9163-648505e2faf0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/fe10aa3e-fbab-4cc2-b7f8-083eb19a11cb.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8a2ceeef-6112-4417-b511-f5fc899f0ef2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/956832f1-2057-4a27-a5ba-9f3c8130e9d0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b5ec1642-9207-4957-a7c6-036d19dbefa2.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8ffcd4a4-a4e1-46b8-9b15-c531729e5e48.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/40208a18-d849-4633-a647-b5dedbd0aa15.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/e5fd2a4f-9903-45ac-af4c-f0538551f67e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8add0023-8de5-4573-a3d1-6295f470b109.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/4344ed51-aa0b-42fd-b010-4850e16fe15f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/8bfa8790-460e-4296-b9b4-150b47fb4f7e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/a690f757-6522-45c0-81a9-f90ea254452d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/c6488d76-bad0-4975-a369-f669a36b5f9e.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/86b8232f-4b7b-4eb7-80ae-55add39c9f2c.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/b0430dd7-61dc-4cdf-899b-fdee7b28ad2d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/7e93f4c9-edb3-4575-bbbd-e16ca6dd206f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/17d65210-f750-4309-8acb-2c90fc8cb3cf.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-37129921/original/4d2f6a2b-c535-44f8-8351-f3b5deb434d8.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.27666,
      "lng": 76.386,
      "persons": 4,
      "reviewsCount": 6,
      "rating": 3.67,
      "type": "Entire rental unit",
      "userId": 139642238,
      "address": "Hosapete, Karnataka, India",
      "amenityIds": [
        32,
        1,
        129,
        4,
        103,
        40,
        104,
        9,
        41,
        11,
        12,
        44,
        77,
        47,
        51,
        54,
        23,
        31
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_MODERATE",
      "price": {
        "rate": 40,
        "currency": "USD",
        "total": 40,
        "priceItems": [
          {
            "title": "$36 x 1 night",
            "amount": 36
          },
          {
            "title": "Taxes",
            "amount": 4
          }
        ]
      }
    },
    {
      "id": "715584534153186171",
      "url": "https://www.airbnb.com/rooms/715584534153186171",
      "deeplink": "https://www.airbnb.com/rooms/715584534153186171?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 27,
      "name": "Bamboo cottage with own bathroom and balcony",
      "bathrooms": 1.5,
      "bedrooms": 1,
      "beds": 1,
      "city": "Sanapur",
      "images": [
        "https://a0.muscache.com/im/pictures/9c131d1f-33e2-4620-a24e-448906d7bd96.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/123d05a4-00b0-46e0-a0d2-5f2d50e98408.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/29eaf340-770d-4f3b-82c1-7010df1b4dc1.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f2fb7558-e237-49fd-abfa-0fb7a4ff091a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/13e34842-9ed3-4ebc-a38e-a1819abb1d57.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a3557658-9763-4bba-99a9-fb2bb9cd26bf.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/66522559-8239-4e55-9bad-042345991b0a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/718bed3d-4594-45df-933d-067e21e89f59.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b89e9322-a2e0-4d1b-82d5-a7f2b6a9a088.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5d79dd42-bbaf-4ae4-bd60-f81997ba023e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4f5b775b-2978-4f1a-9937-d610bb7aa810.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2a528c68-f406-4a41-ac5e-8e5d5a43db46.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/be0ed552-bfe0-4718-8f0a-8b809b53be99.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2c9812aa-6a04-4abb-88ca-9b158e74b36d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/32ff23ac-6234-4ccf-8265-f9ddae4f6ac5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e66ec341-7bdb-414a-a196-3f42f3b6a9b5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/551dde22-97f1-4a81-9248-8aaceb073363.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/5d76e557-85c1-4880-b8a9-6502cf2a4ea7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/f72de833-c926-43d4-b7ac-a8e572884b9b.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.350205002201614,
      "lng": 76.43268511381407,
      "persons": 2,
      "reviewsCount": 1,
      "type": "Private room in nature lodge",
      "userId": 434603321,
      "address": "Sanapur, Karnataka, India",
      "amenityIds": [
        1,
        179,
        4,
        40,
        280,
        9,
        42,
        219,
        12,
        510
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 32,
        "currency": "USD",
        "total": 32,
        "priceItems": [
          {
            "title": "$25 x 1 night",
            "amount": 25
          },
          {
            "title": "Airbnb service fee",
            "amount": 4
          },
          {
            "title": "Taxes",
            "amount": 3
          }
        ]
      }
    },
    {
      "id": "796757894408185167",
      "url": "https://www.airbnb.com/rooms/796757894408185167",
      "deeplink": "https://www.airbnb.com/rooms/796757894408185167?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 28,
      "name": "Agri fun tent 2",
      "bathrooms": 2,
      "bedrooms": 1,
      "beds": 1,
      "city": "Gudioblapura",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/c332e632-6d71-4198-839c-409f991f6509.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/0a82711e-865f-47d1-a9aa-c20001524fab.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/5592ecac-4d23-40fb-b375-0479bb3aeaea.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/a7dc21af-c1b0-49dd-bbe2-7d0340863c35.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/01f59f2c-01af-44fb-8396-c27e8377f61f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/15e0f4df-ec0f-4f65-965b-0d224ef3a71b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/9ed3ebb3-02af-4143-bd52-b94cda70a60a.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/682cd8b6-1630-4b36-aa53-6300caeca9e5.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/76b5a3d3-bce5-412f-a8a0-a35e21d9e08f.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-795954558852833474/original/9e8c57c2-2144-4ab5-9428-ed65cea2b71b.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/53f53684-95dd-43c7-86cd-96d86dfcbe57.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/6fd94257-6c12-4222-83eb-b4b568c3a901.jpg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/699b1030-3ce7-4e35-b544-b3fc4e963886.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.305775642447136,
      "lng": 76.41500692683732,
      "persons": 2,
      "reviewsCount": 0,
      "type": "Private room in tent",
      "userId": 139642238,
      "address": "Gudioblapura, Karnataka, India",
      "amenityIds": [
        179,
        9,
        219
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 61,
        "currency": "USD",
        "total": 61,
        "priceItems": [
          {
            "title": "$54 x 1 night",
            "amount": 54
          },
          {
            "title": "Taxes",
            "amount": 7
          }
        ]
      }
    },
    {
      "id": "731459981571960102",
      "url": "https://www.airbnb.com/rooms/731459981571960102",
      "deeplink": "https://www.airbnb.com/rooms/731459981571960102?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 29,
      "name": "Spacious tent with mountain view",
      "bathrooms": 1.5,
      "bedrooms": 1,
      "beds": 1,
      "city": "Sanapur",
      "images": [
        "https://a0.muscache.com/im/pictures/933c5db9-1a0a-44c0-8f3d-d1571b3f746a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/326bf40c-6e2b-4272-88e1-7be8cd6186a9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/26e01989-0b12-4696-9699-79e30e4db77d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/20de342c-27a5-4082-9aa3-880166b6955a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1f36b9ae-eb16-47a4-8149-6d75ffe90bf9.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/035d9003-2c44-4cf5-b3ec-4813f96acd93.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/61c47d44-ec86-4d7b-90af-2377898eefcd.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a207a7bf-a634-40e1-97d8-54d818690f6b.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/1192438e-d857-440e-9a12-305f2170dbb5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d48191a8-52a5-418d-bde7-bdfa372fd306.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-731441235960593143/original/17ca3b27-b729-4f99-8535-fa74a1a79e90.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.35067,
      "lng": 76.43159,
      "persons": 2,
      "reviewsCount": 1,
      "type": "Private room in nature lodge",
      "userId": 434603321,
      "address": "Sanapur, Karnataka, India",
      "amenityIds": [
        179,
        39,
        9,
        11,
        219,
        12
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 19,
        "currency": "USD",
        "total": 19,
        "priceItems": [
          {
            "title": "$15 x 1 night",
            "amount": 15
          },
          {
            "title": "Airbnb service fee",
            "amount": 2
          },
          {
            "title": "Taxes",
            "amount": 2
          }
        ]
      }
    },
    {
      "id": "713598527143341928",
      "url": "https://www.airbnb.com/rooms/713598527143341928",
      "deeplink": "https://www.airbnb.com/rooms/713598527143341928?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 30,
      "name": "Bamboo cottages with own bathroom and balcony",
      "bathrooms": 1.5,
      "bedrooms": 1,
      "beds": 1,
      "city": "Sanapur",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-713598527143341928/original/9b5b2eed-c0bf-46e9-93a9-44d92a40b6b0.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/9c131d1f-33e2-4620-a24e-448906d7bd96.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/123d05a4-00b0-46e0-a0d2-5f2d50e98408.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/29eaf340-770d-4f3b-82c1-7010df1b4dc1.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f2fb7558-e237-49fd-abfa-0fb7a4ff091a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/13e34842-9ed3-4ebc-a38e-a1819abb1d57.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a3557658-9763-4bba-99a9-fb2bb9cd26bf.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/66522559-8239-4e55-9bad-042345991b0a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/718bed3d-4594-45df-933d-067e21e89f59.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b89e9322-a2e0-4d1b-82d5-a7f2b6a9a088.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5d79dd42-bbaf-4ae4-bd60-f81997ba023e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4f5b775b-2978-4f1a-9937-d610bb7aa810.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2a528c68-f406-4a41-ac5e-8e5d5a43db46.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/be0ed552-bfe0-4718-8f0a-8b809b53be99.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2c9812aa-6a04-4abb-88ca-9b158e74b36d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/32ff23ac-6234-4ccf-8265-f9ddae4f6ac5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e66ec341-7bdb-414a-a196-3f42f3b6a9b5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-713598527143341928/original/cd1109bf-6d4b-43a9-8def-c7b28fc9985d.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-713598527143341928/original/6412b743-c280-476c-9880-6ce426176178.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.350268603161718,
      "lng": 76.4328895881772,
      "persons": 2,
      "reviewsCount": 0,
      "type": "Private room in nature lodge",
      "userId": 434603321,
      "address": "Sanapur, Karnataka, India",
      "amenityIds": [
        4,
        100,
        85,
        40,
        9,
        42,
        12
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 32,
        "currency": "USD",
        "total": 32,
        "priceItems": [
          {
            "title": "$25 x 1 night",
            "amount": 25
          },
          {
            "title": "Airbnb service fee",
            "amount": 4
          },
          {
            "title": "Taxes",
            "amount": 3
          }
        ]
      }
    },
    {
      "id": "713610952665036978",
      "url": "https://www.airbnb.com/rooms/713610952665036978",
      "deeplink": "https://www.airbnb.com/rooms/713610952665036978?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
      "position": 31,
      "name": "Bamboo cottage with own bathroom and balcony",
      "bathrooms": 1.5,
      "bedrooms": 1,
      "beds": 1,
      "city": "Sanapur",
      "images": [
        "https://a0.muscache.com/im/pictures/9c131d1f-33e2-4620-a24e-448906d7bd96.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/123d05a4-00b0-46e0-a0d2-5f2d50e98408.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/29eaf340-770d-4f3b-82c1-7010df1b4dc1.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/f2fb7558-e237-49fd-abfa-0fb7a4ff091a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/13e34842-9ed3-4ebc-a38e-a1819abb1d57.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/a3557658-9763-4bba-99a9-fb2bb9cd26bf.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/66522559-8239-4e55-9bad-042345991b0a.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/718bed3d-4594-45df-933d-067e21e89f59.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/b89e9322-a2e0-4d1b-82d5-a7f2b6a9a088.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/5d79dd42-bbaf-4ae4-bd60-f81997ba023e.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/4f5b775b-2978-4f1a-9937-d610bb7aa810.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2a528c68-f406-4a41-ac5e-8e5d5a43db46.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/be0ed552-bfe0-4718-8f0a-8b809b53be99.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/2c9812aa-6a04-4abb-88ca-9b158e74b36d.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/32ff23ac-6234-4ccf-8265-f9ddae4f6ac5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/e66ec341-7bdb-414a-a196-3f42f3b6a9b5.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/551dde22-97f1-4a81-9248-8aaceb073363.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/5d76e557-85c1-4880-b8a9-6502cf2a4ea7.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-713610952665036978/original/f72de833-c926-43d4-b7ac-a8e572884b9b.jpeg?im_w=720"
      ],
      "hostThumbnail": "https://a0.muscache.com/im/pictures/user/add6f7a6-f199-435e-8c3d-5d5c639c8080.jpg?aki_policy=profile_x_medium",
      "isSuperhost": false,
      "rareFind": false,
      "lat": 15.3502614902243,
      "lng": 76.43289763480425,
      "persons": 2,
      "reviewsCount": 0,
      "type": "Private room in nature lodge",
      "userId": 434603321,
      "address": "Sanapur, Karnataka, India",
      "amenityIds": [
        4,
        40,
        9,
        42,
        12
      ],
      "previewAmenities": [],
      "cancelPolicy": "CANCEL_FLEXIBLE",
      "price": {
        "rate": 32,
        "currency": "USD",
        "total": 32,
        "priceItems": [
          {
            "title": "$25 x 1 night",
            "amount": 25
          },
          {
            "title": "Airbnb service fee",
            "amount": 4
          },
          {
            "title": "Taxes",
            "amount": 3
          }
        ]
      }
    },
    
  ]
  // localStorage.setItem("room-data",JSON.stringify(dt));
      // console.log(dt)
      // getCards(dt);
    
      function getCards(data){
        const room_container=document.querySelector(".left-col");
        const n=data.length;
        let p=document.createElement("p");
        p.innerText=`${n}+ stays in ${data[0].city}`
        room_container?room_container.appendChild(p):null;
        // let a_id=0;
        for (let room=0;room<n;room++){
            const house=document.createElement("div");
            house.setAttribute("class","house");
            const freebies= data[room].previewAmenities.join(" ");
             let rating;
             if(data[room].rating !==undefined){
              rating=data[room].rating;
             }else{rating='none'}
            house.innerHTML=`
            <div class="house-img">
                        <div><p id="distince"><p/></div>
                        <a href="house.html" id=${room} onclick="Store(this.id)"><img src=${data[room].images[0]} alt=""></a>
                    </div>
                    <div class="house-info">
                        <div class="house-title">
                            <p>${data[room].name}</p>
                            <h3>${data[room].type}</h3>
                        </div>
                        <i class="ri-heart-line"></i>
                        <div class="house-offerings">
                            <p id="offering">${data[room].persons} guests · Entire Home · ${data[room].beds} beds · ${data[room].bathrooms} bath</p>
                        <p>${freebies}</p>
                        </div>
                        <p id="house-rating">${rating} <i class="ri-star-fill"></i> (${data[room].reviewsCount} reviews)</p>
                        <div class="house-price">
                            <h4>${data[room].price.currency} ${data[room].price.rate}<span>/ night</span></h4>
                        </div>
                    </div>
                    `;
                    const house_redirect=house.querySelector(".house-img a")
                    house_redirect.addEventListener("click",(e)=>{  
                      e.preventDefault();    
                     window.location.href="house.html";
                     
                      });
                    // a_id++;
            // adding cost breakdown 
            const house_title=house.querySelector(".house-title")
          
            const p=document.createElement("p");
            p.style.color='red';
            p.style.fontWeight='600';
           if(data[room].isSuperhost && data[room].rareFind){
              p.innerText="Superhost, Rare Find"
              house_title.appendChild(p);
           }else if (data[room].isSuperhost){
            p.innerText="Superhost"
              house_title.appendChild(p);
           }else if(data[room].rareFind){
              p.innerText="Rare Find";
              house_title.appendChild(p);
           }
           
           const btn=document.createElement("button");
           btn.innerText='cost breakdown'
          btn.addEventListener("click",()=>{CostBreak(data[room])});
          house_title?house_title.appendChild(btn):null;

          map_details.push({latitude:data[room].lat,lagtitude:data[room].lng},);
          room_container?room_container.appendChild(house):null;
            
        }
    }
    function Store(id){
      localStorage.setItem("id",`${id}`)
      // houseFullDetails(data[id]);
    }
    getDetails(storedLocation, storedCheckIn, storedCheckOut, storedGuest);
    
    function CostBreak(listing,id) {
        // Calculate additional fees and total cost
        const additionalFees = listing.price * 0.10; // Assuming additional fees are 10% of base price
        const totalCost = listing.price + additionalFees;
    
        // Create a modal dialog box
        const modal = document.createElement("div");
        modal.setAttribute("id",id);
        modal.style.display = "block";
        modal.style.width = "300px";
        modal.style.height = "200px";
        modal.style.backgroundColor = "#fff";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.padding = "20px";
        modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    
        // Add booking cost breakdown to the modal
        let fees=0;
        
        for(let i=1;i<listing.price.priceItems.length;i++){
          if(listing.price.priceItems[i]){
            fees+=listing.price.priceItems[i].amount;
          }
        }
        modal.innerHTML = `
            <h2>Booking Cost Breakdown</h2>
            <p>Base Rate: ${listing.price.priceItems[0].amount}</p>
            <p>Additional Fees: ${fees}</p>
            <p>Total Cost: ${listing.price.rate}</p>
        `;
        
        // Add a close button to the modal
        const closeButton = document.createElement("button");
        closeButton.innerText = "Close";
        closeButton.addEventListener("click", () => modal.style.display = "none");
        modal.appendChild(closeButton);
    
        // Add the modal to the body
        document.body.appendChild(modal);
    }
    
    function houseFullDetails(data){
      // window.location.href='house.html';
      const container=document.querySelector(".container");
      const house_header=document.createElement("div");
      house_header.setAttribute("class","house-title");
      house_header.innerHTML=`
      <h1>${data.type}</h1>
      <div class="row">
          <div>
              <span><i class="ri-star-fill"></i> ${data.rating}</span>
              <span> &middot; ${data.reviewsCount} Reviews</span>
          </div>
          <div>
              <p>Location: ${data.address}</p>
              <p><img src="images/share.png" alt="">Share  <img src="images/heart.png" alt=""> Like</p>
          </div>
      </div>
      `;
      container?.appendChild(house_header);
      const gallery=document.createElement("div");
      gallery.setAttribute("class", "gallery");
      gallery.innerHTML=`
      <div class="gallery-img-1"><img src="${data.images[0]}"></div>
                <div><img src="${data.images[1]}"></div>
                <div><img src="${data.images[2]}"></div>
                <div><img src="${data.images[3]}"></div>
                <div><img src="${data.images[4]}"></div>
      `;
      container?.appendChild(gallery);
      const house_room=document.createElement("div");
      house_room.setAttribute("class","house-room-details");
      house_room.innerHTML=`
      <div class="room-details">
                    <div class="house-fdetails">
                        <div>
                        <h1 id="room-host-d">Entire rental unit hosted by</h1>
                        <p id="room-has">${data.persons} guest &nbsp; &nbsp; ${data.beds} beds &nbsp; &nbsp; ${data.bathrooms} bathroom</p>
                        </div>
                        <img src="${data.hostThumbnail}" id="house-host"alt="">
                    </div>
                    <hr>
                    <div class="house-policies">
                        <h2>${data.name}</h2>
                        <p class="about-room">${data.type}</p>
                        <h2 id="room-policy">${data.cancelPolicy}</h2>
                    </div>
                    <div class="wt-this-f">
                        <h1>what this place offers</h1>
                        <p>air</p>
                        <p>wifi</p>
                        <p>sdfs</p>
                    </div>
                </div>
                <div class="room-pay">
                    <div class="rp-review">
                        <p>${data.price.currency} ${data.price.rate}/night</p>
                        <p>${data.rating} <i class="ri-star-fill"></i> (${data.reviewsCount}Reviews)</p>
                    </div>
                    <form>
                        <label for="checkin">check in</label>
                        <input type="date">
                        <label for="checkout">check out</label>
                        <input type="date">
                        <label for="guest">Guests</label>
                        <input type="text" placeholder="ex: '2' Guests">
                        <button >Reserve</button>
                    </form>
                    <div class="room-pay-fees">
                        <div class="cleaning-fee">
                            <p>Rate</p>
                            <p id="clean-fee">${data.price.priceItems[0].amount}</p>
                        </div>
                        <div class="service-fees">
                            <p>Service fee</p>
                            <p id="service-fee">${data.price.priceItems[1].amount}</p>
                        </div>
                        <div class="taxes">
                            <p>Occupancy taxes and fees</p>
                            <p id="tax-fee">${data.price.priceItems[2].amount}</p>
                        </div>
                        <hr>
                        <div class="total-pay">
                            <p>Total</p>
                            <p id="total-fee">${data.price.total}</p>
                        </div>
                    </div>
                </div>
      `;
      container?.appendChild(house_room);
    }

    let map = L.map('map').setView([20.5937, 78.9629],5);
    mapLink =
      '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
      }).addTo(map);
    for (let i = 0; i < map_details.length; i++) {
      marker = new L.marker([map_details[i].latitude,map_details[i].lagtitude])
        // .bindPopup(locations[i][0])
        .addTo(map);
    }
    function getDistance(source,destination) {
      // return distance in meters
      var lon1 = toRadian(source[1]),
          lat1 = toRadian(source[0]),
          lon2 = toRadian(destination[1]),
          lat2 = toRadian(destination[0]);
  
      var deltaLat = lat2 - lat1;
      var deltaLon = lon2 - lon1;
  
      var a = Math.pow(Math.sin(deltaLat/2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon/2), 2);
      var c = 2 * Math.asin(Math.sqrt(a));
      var EARTH_RADIUS = 6371;
      return Math.round(c * EARTH_RADIUS * 1000);
  }
  function toRadian(degree) {
      return degree*Math.PI/180;
  }
  
  function setDistance() {
      let i = 0;
      document.querySelectorAll('#distance').forEach((ele)=>{
          var distance = getDistance([userLoc.latitude, userLoc.longitude], [map_details[i].latitude,map_details[i].lagtitude]);
          ele.innerText = `Distance from you : ${distance} km`;
          i++;
      })
  }
  