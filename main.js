const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const gridItem = document.querySelector(".gridItem")
const buttons = document.querySelector(".buttons")


window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu)
    displayMenuButtons()
})



function displayMenuItems(item){
    let displayMenu = item.map(function(dtn){
        return `<div class="flex">
            <div class="flex2">
                <div><img src=${dtn.img} alt=${dtn.title}></div>
                <div>
                    <div class="flex3">
                        <h3>${dtn.title}</h3>
                        <h4>${dtn.price}</h4>
                    </div>
                    <p>
                       ${dtn.desc}
                    </p>
                </div>
            </div>
        </div>`
    })
    displayMenu = displayMenu.join("")
    gridItem.innerHTML = displayMenu
}

function displayMenuButtons (){
    const btnCategory = menu.reduce(function(btnC,item){
        if(!btnC.includes(item.category)){
            btnC.push(item.category)
        }
        return btnC
    },["all"])
    let Btns = btnCategory.map(function(btn){
        return` <button class="btn" data-ctn=${btn}>${btn}</button>`
    }).join("")
    buttons.innerHTML = Btns
    const btn = buttons.querySelectorAll(".btn")
    btn.forEach(function(item){
        item.addEventListener("click", function(e){
            let category = e.currentTarget.dataset.ctn
            let displayCategory = menu.filter(function(dtC){
                if(dtC.category === category){
                    return dtC
                }
            })
            if(category === "all"){
                displayMenuItems(menu)
            }else{
                displayMenuItems(displayCategory)
            }
        })
    })
}