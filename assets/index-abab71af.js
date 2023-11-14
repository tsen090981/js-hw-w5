(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const y of a.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&t(y)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();console.log("Hello world!");let v=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}];const f=document.querySelector(".ticketCard-area"),h=document.querySelector(".search-area"),g=document.querySelector(".cantFind-area"),k=document.querySelector(".totalNum"),$=document.querySelector(".addTicket-btn");document.querySelector("#regionSearch");const c=document.querySelector("#ticketName"),n=document.querySelector("#ticketImgUrl"),o=document.querySelector("#ticketRegion"),d=document.querySelector("#ticketPrice"),u=document.querySelector("#ticketNum"),p=document.querySelector("#ticketRate"),m=document.querySelector("#ticketDescription"),l=document.querySelectorAll(".alert-message");function b(){let i="";v.forEach(function(e,s){let t=`
        <li class="ticketCard">
                    <div class="ticketCard-img">
                        <a href="#">
                            <img src="${e.imgUrl}" alt="">
                        </a>
                        <div class="ticketCard-region">${e.area}</div>
                        <div class="ticketCard-rate">${e.rate}</div>
                    </div>
                    <div class="ticketCard-content">
                        <div>
                            <h2 class="ticketCard-title">${e.name}</h2>
                            <p class="ticketCard-text">${e.description}</p>
                        </div>
                        <div class="ticketCard-info">
                            <p class="ticketCard-num">
                                <span class="material-symbols-rounded material-symbols-rounded-fill">
                                    error
                                </span>剩下最後 ${e.group} 組
                            </p>
                            <p class="ticketCard-price">
                                TWD<span id="ticketCard-price">${e.price}</span>
                            </p>
                        </div>
                    </div>
                </li>
        `;i+=t}),f.innerHTML=i}function C(){for(let i=0;i<7;i++)l[i].innerHTML=""}b();h.addEventListener("change",function(i){g.classList.add("display-none");let e=0,s="";v.forEach(function(t,r){if(i.target.value==""){let a=`
            <li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                        <img src="${t.imgUrl}" alt="">
                    </a>
                    <div class="ticketCard-region">${t.area}</div>
                    <div class="ticketCard-rate">${t.rate}</div>
                </div>
                <div class="ticketCard-content">
                    <div>
                        <h2 class="ticketCard-title">${t.name}</h2>
                        <p class="ticketCard-text">${t.description}</p>
                    </div>
                    <div class="ticketCard-info">
                        <p class="ticketCard-num">
                            <span class="material-symbols-rounded material-symbols-rounded-fill">
                                error
                            </span>剩下最後 ${t.group} 組
                        </p>
                        <p class="ticketCard-price">
                            TWD<span id="ticketCard-price">${t.price}</span>
                        </p>
                    </div>
                </div>
            </li>
            `;s+=a,f.innerHTML=s,e+=1,k.textContent=`本次搜尋共 ${e} 筆資料`}else if(i.target.value==t.area){let a=`
            <li class="ticketCard">
                <div class="ticketCard-img">
                    <a href="#">
                        <img src="${t.imgUrl}" alt="">
                    </a>
                    <div class="ticketCard-region">${t.area}</div>
                    <div class="ticketCard-rate">${t.rate}</div>
                </div>
                <div class="ticketCard-content">
                    <div>
                        <h2 class="ticketCard-title">${t.name}</h2>
                        <p class="ticketCard-text">${t.description}</p>
                    </div>
                    <div class="ticketCard-info">
                        <p class="ticketCard-num">
                            <span class="material-symbols-rounded material-symbols-rounded-fill">
                                error
                            </span>剩下最後 ${t.group} 組
                        </p>
                        <p class="ticketCard-price">
                            TWD<span id="ticketCard-price">${t.price}</span>
                        </p>
                    </div>
                </div>
            </li>
            `;s+=a,f.innerHTML=s,e+=1,k.textContent=`本次搜尋共 ${e} 筆資料`}}),s==""&&(f.innerHTML=s,g.classList.remove("display-none"),console.log(g.classList),k.textContent=`本次搜尋共 ${e} 筆資料`)});$.addEventListener("click",function(i){if(c.value==""||n.value==""||o.value==""||m.value==""||u.value==""||d.value==""||p.value=="")C(),c.value==""&&(l[0].innerHTML=`
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `),n.value==""&&(l[1].innerHTML=`
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `),o.value==""&&(l[2].innerHTML=`
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `),d.value==""&&(l[3].innerHTML=`
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `),u.value==""&&(l[4].innerHTML=`
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `),p.value==""&&(l[5].innerHTML=`
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `),m.value==""&&(l[6].innerHTML=`
            <p>
            <span class="material-symbols-rounded material-symbols-rounded-fill">
                error
            </span>
            必填
            </p>
            `);else{const e={};e.id=v.length,e.name=c.value,e.imgUrl=n.value,e.area=o.value,e.description=m.value,e.group=u.value,e.price=d.value,e.rate=p.value,v.push(e),b(),C(),c.value="",n.value="",o.value="",m.value="",u.value="",d.value="",p.value=""}});
