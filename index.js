import{a as u,S as f,i as m}from"./assets/vendor-BTKY1Grq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function d(t){const r={key:"53321063-39b236969f2c986560565235a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get("https://pixabay.com/api/",{params:r}).then(i=>i.data.hits)}const l=document.querySelector(".loader"),c=document.querySelector(".gallery");let g=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:!0,overlayOpacity:.8});function y(t){const r=v(t);c.insertAdjacentHTML("beforeend",r),g.refresh()}function h(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}function v(t){return t.map(F).join("")}function F(t){const{webformatURL:r,largeImageURL:i,tags:s,likes:e,views:o,comments:n,downloads:p}=t;return`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img class="gallery-image" src="${r}" alt="${s}" />
    </a>
    <ul class="image-info">
      <li class="info-point">
        <p class="info-point-label">Likes</p>
        <p class="info-point-value">${e}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Views</p>
        <p class="info-point-value">${o}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Comments</p>
        <p class="info-point-value">${n}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Downloads</p>
        <p class="info-point-value">${p}</p>
      </li>
    </ul>
  </li>`}const a=document.querySelector(".form");a.addEventListener("submit",w);function w(t){t.preventDefault();const r=a.elements["search-text"].value.trim();r&&(h(),b(),a.reset(),d(r).then(i=>{i.length>0?y(i):S("Sorry, there are no images matching your search query. Please try again!")}).catch(i=>console.error(i)).finally(()=>L()))}function S(t){m.show({message:t,position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",iconUrl:"/img/icon-error.png",iconColor:"#FAFAFB",maxWidth:"432px"})}
//# sourceMappingURL=index.js.map
