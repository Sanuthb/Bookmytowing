const toggle_menu = document.querySelector(".menu");
const dropdown_menu = document.querySelector(".dropdown_menu");
const close_button = document.getElementById('close_btn');
const a_close_buttons = document.querySelectorAll('.a_close_button');

toggle_menu.onclick = function () {
    dropdown_menu.classList.add("open_dropdown_menu")
}
close_button.onclick = function () {
    dropdown_menu.classList.remove("open_dropdown_menu")
}

a_close_buttons.forEach(button => {
  button.addEventListener('click', function() {
    dropdown_menu.classList.remove("open_dropdown_menu");
  });
});

let valuedisplays=document.querySelectorAll(".numbers");
let interval=5000;

valuedisplays.forEach((valuedisplay)=>{
    let startvalue=0;
    let endvalue=parseInt(valuedisplay.getAttribute('data-val'));
    let duration=Math.floor((interval/endvalue));
    console.log(duration)
    let counter=setInterval(function(){
        startvalue+=1;
        valuedisplay.textContent=startvalue
        if(startvalue == endvalue){
            clearInterval(counter);
        }
    },duration)
})

document.addEventListener('scroll',()=>{
    const navbar=document.querySelector('.navbar');
    if(window.scrollY > 0){
      navbar.classList.add("scrollnavbar");
    }
    else{
        navbar.classList.remove("scrollnavbar");
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const services = [
        {
          title: "Car Towing",
          description: "Car towing safely relocates immobilized vehicles using specialized equipment. Trust our team for reliable, efficient service.",
          image: "imgs/p.png",
        },
        {
          title: "Roadside Assistance",
          description: "Accident insurance offers financial protection for injuries and damages resulting from covered accidents, including medical expenses and lost income.",
          image: "imgs/accident.png",
        },
        {
          title: "Vehicle Recovery",
          description: "Car fire insurance provides financial coverage for damages caused by fires to vehicles, including repair or replacement costs for the vehicle and its contents.",
          image: "imgs/fire.png",
        },
        {
            title: "Flatbed Twoing",
            description: "Motorcycle towing safely transports disabled bikes using specialized equipment. Trust our team for efficient and reliable service.",
            image: "imgs/motocycle.png",
          },
          {
            title: "lifting service",
            description: "Flood insurance coverage for vehicles protects against water damage caused by floods, covering repair or replacement costs if the vehicle is affected.",
            image: "imgs/flood.png",
          },
          {
            title: "vehicle breakdown",
            description: "Hail damage coverage for vehicles safeguards against dents and destruction caused by hailstorms.",
            image: "imgs/hail.png",
          },
          {
            title: "Battery Jump Start",
            description: "A dead battery can bring your day to a standstill. Our quick and reliable battery jump start service ensures you get back on the road swiftly.",
            image: "imgs/hail.png",
          },
          {
            title: "Bike Towing",
            description: "When your motorcycle encounters a breakdown or you find yourself stranded on the road, our Bike Towing service is your reliable partner.",
            image: "imgs/motocycle.png",
          },
          {
            title: "Truck Towing",
            description: "For larger vehicles like trucks, our specialized truck towing services are tailored to handle the unique needs of heavy-duty vehicles.",
            image: "imgs/p.png",
          }
      ];
      
    const serviceRow = document.getElementById("serviceRow");

    services.forEach(service => {
      const col = document.createElement("div");
      col.classList.add("col");

      const img = document.createElement("img");
      img.src = service.image;
      img.alt = "";

      const serviceContent = document.createElement("div");
      serviceContent.classList.add("service-content");

      const serviceTitle = document.createElement("div");
      serviceTitle.classList.add("service-title");
      serviceTitle.textContent = service.title;

      const serviceDesc = document.createElement("div");
      serviceDesc.classList.add("service-desc");
      serviceDesc.textContent = service.description;

      serviceContent.appendChild(img);
      serviceContent.appendChild(serviceTitle);
      serviceContent.appendChild(serviceDesc);

      col.appendChild(serviceContent);
      serviceRow.appendChild(col);
    });
  });
//for social media opening link
  function openSocialMedia(url) {
    window.location.href = url;
  }

