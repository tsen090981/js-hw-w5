let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
];

const ticketCardArea = document.querySelector(".ticketCard-area");
const searchArea = document.querySelector(".search-area");
const cantFindArea = document.querySelector(".cantFind-area");
const totalNum = document.querySelector(".totalNum");
const addTicketBtn = document.querySelector(".addTicket-btn");
const regionSearch = document.querySelector("#regionSearch");

const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");

const alertMessage = document.querySelectorAll(".alert-message");


//依 data 重新渲染畫面
function init() {
    let str = "";
    data.forEach(function(item,index){
    let content = 
        `
        <li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                            <img src="${item.imgUrl}" alt="">
                        </a>
                        <div class="ticketCard-region">${item.area}</div>
                        <div class="ticketCard-rate">${item.rate}</div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                            <h2 class="ticketCard-title">${item.name}</h2>
                            <p class="ticketCard-text">${item.description}</p>
                        </div>
                        <div class="ticketCard-info">
                            <p class="ticketCard-num">
                                <span class="material-symbols-rounded material-symbols-rounded-fill">
                                    error
                                </span>剩下最後 ${item.group} 組
                            </p>
                            <p class="ticketCard-price">
                                TWD<span id="ticketCard-price">${item.price}</span>
                            </p>
                        </div>
                    </div>
                </li>
        `;
        str += content;
    });
    ticketCardArea.innerHTML = str;
}

//清空alert html
function innerHtmlClean(){
    for (let i = 0; i < 7; i++) {
        alertMessage[i].innerHTML = "";
    };
};

init();

//篩選器邏輯
searchArea.addEventListener("change",function(e){
    cantFindArea.classList.add("display-none");
    let tatalCount = 0;
    let str = "";
    data.forEach(function(item,index){
        if(e.target.value == ""){
            let content = 
            `
            <li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                        <img src="${item.imgUrl}" alt="">
                    </a>
                    <div class="ticketCard-region">${item.area}</div>
                    <div class="ticketCard-rate">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                    <div>
                        <h2 class="ticketCard-title">${item.name}</h2>
                        <p class="ticketCard-text">${item.description}</p>
                    </div>
                    <div class="ticketCard-info">
                        <p class="ticketCard-num">
                            <span class="material-symbols-rounded material-symbols-rounded-fill">
                                error
                            </span>剩下最後 ${item.group} 組
                        </p>
                        <p class="ticketCard-price">
                            TWD<span id="ticketCard-price">${item.price}</span>
                        </p>
                    </div>
                </div>
            </li>
            `;
            str += content;
            ticketCardArea.innerHTML = str;
            tatalCount += 1;
            totalNum.textContent = `本次搜尋共 ${tatalCount} 筆資料`; 
        }else if(e.target.value == item.area){
            let content = 
            `
            <li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                        <img src="${item.imgUrl}" alt="">
                    </a>
                    <div class="ticketCard-region">${item.area}</div>
                    <div class="ticketCard-rate">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                    <div>
                        <h2 class="ticketCard-title">${item.name}</h2>
                        <p class="ticketCard-text">${item.description}</p>
                    </div>
                    <div class="ticketCard-info">
                        <p class="ticketCard-num">
                            <span class="material-symbols-rounded material-symbols-rounded-fill">
                                error
                            </span>剩下最後 ${item.group} 組
                        </p>
                        <p class="ticketCard-price">
                            TWD<span id="ticketCard-price">${item.price}</span>
                        </p>
                    </div>
                </div>
            </li>
            `;
            str += content;
            ticketCardArea.innerHTML = str;
            tatalCount += 1;
            totalNum.textContent = `本次搜尋共 ${tatalCount} 筆資料`;
        };
    });
    if(str == ""){
        ticketCardArea.innerHTML = str;
        cantFindArea.classList.remove("display-none");
        console.log(cantFindArea.classList);
        totalNum.textContent = `本次搜尋共 ${tatalCount} 筆資料`; 
    };
});


addTicketBtn.addEventListener("click",function(e){
    if(ticketName.value == "" || ticketImgUrl.value == "" || ticketRegion.value == "" || ticketDescription.value == "" || ticketNum.value == "" || ticketPrice.value == "" || ticketRate.value == ""){
        innerHtmlClean();
        if(ticketName.value == ""){
            alertMessage[0].innerHTML = 
            `
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `;
        };
        if(ticketImgUrl.value == ""){
            alertMessage[1].innerHTML = 
            `
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `;
        };
        if(ticketRegion.value == ""){
            alertMessage[2].innerHTML = 
            `
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `;
        };
        if(ticketPrice.value == ""){
            alertMessage[3].innerHTML = 
            `
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `;
        };
        if(ticketNum.value == ""){
            alertMessage[4].innerHTML = 
            `
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `;
        };
        if(ticketRate.value == ""){
            alertMessage[5].innerHTML = 
            `
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `;
        };
        if(ticketDescription.value == ""){
            alertMessage[6].innerHTML = 
            `
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `;
        };
        
    }else{
        const obj = {};
        obj.id = data.length;
        obj.name = ticketName.value;
        obj.imgUrl = ticketImgUrl.value;
        obj.area = ticketRegion.value;
        obj.description = ticketDescription.value;
        obj.group = ticketNum.value;
        obj.price = ticketPrice.value;
        obj.rate = ticketRate.value;
        data.push(obj);
        init();
        innerHtmlClean();
        ticketName.value = "";
        ticketImgUrl.value = "";
        ticketRegion.value = "";
        ticketDescription.value = "";
        ticketNum.value = "";
        ticketPrice.value = "";
        ticketRate.value = "";
    };
});

