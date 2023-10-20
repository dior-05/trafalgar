let logo = document.querySelector(".logo")
logo.src = header_data.logoImg

let list = document.querySelector(".list")
let list_item = ''
header_data.nav.forEach((item) => {
    list_item += `
    <li>${item}</li>
    
    `
})
list.innerHTML = list_item


let wrapper_one = document.querySelector(".wrapper_one")
wrapper_one.innerHTML = `
<div class="content">
<h1>${main_data.title}</h1>
<p>${main_data.text}</p>
<button>${main_data.but}</button>
</div>
`;


let collection_title = document.querySelector(".collection_title").textContent = banner1.bgText
 let banner_one_content = document.querySelector(".banner_one_content")
let html = ''
banner1.content_wparrep.forEach((item) => {
    html += `
    <div class="wrapper_banner_one">
        <img class="banner_one_img" src="${item.images}" alt="srgsegew">
        <h4 class="banner_one_title">${item.title}</h4>
        <p class="banner_one_text">${item.text}</p>
    </div>  
    `
})
banner_one_content.innerHTML = html;


document.querySelector(".hed").textContent = banner2_data.description
document.querySelector(".het").textContent = banner2_data.Text
let choose = document.querySelector(".choose")
let car = ''
banner2_data.banner_card.forEach((item) => {
    car += `
    <div class="choose_content">
    <img class="choose_img" src="${item.bigimg}" alt="">
    <h3 class="choose_title">${item.title}</h3>
    <p class="choose_text">${item.teks}</p>
</div>
    
   `
})
choose.innerHTML = car;


document.querySelector(".theme").textContent = banner3_data.title
document.querySelector(".banner3_btn").textContent = banner3_data.btn
let banner3_wrapper = document.querySelector(".banner3_wrapper")
let print = ''
banner3_data.end_card.forEach((item) => {
    print += `
    <div class="banner3_content">
          <h1 class="number">${item.number}</h1>
          <h3 class="h_3">${item.title}</h3>
          <p class="pi">${item.text}</p>
     </div>
    `
})
banner3_wrapper.innerHTML = print


document.querySelector(".foot_img").src = footer_data.img
document.querySelector(".logotipe_img").src = footer_data.imge
let foot_list = document.querySelector(".foot_list")
let as = ''
footer_data.nav.forEach((item)=>{
    as += `
    <li class="list_item">${item} </li>
    
    `
})
foot_list.innerHTML = as


