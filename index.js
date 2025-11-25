import{a as u,S as f,i as m}from"./assets/vendor-BTKY1Grq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(o){const r={key:"53321063-39b236969f2c986560565235a",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get("https://pixabay.com/api/",{params:r}).then(i=>i.data.hits)}const l=document.querySelector(".loader"),c=document.querySelector(".gallery");let g=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:!0,overlayOpacity:.8});function y(o){const r=v(o);c.insertAdjacentHTML("beforeend",r),g.refresh()}function h(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function L(){l.classList.add("hidden")}function v(o){return o.map(w).join("")}function w(o){const{webformatURL:r,largeImageURL:i,tags:a,likes:e,views:t,comments:s,downloads:p}=o;return`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
      <img class="gallery-image" src="${r}" alt="${a}" />
    </a>
    <ul class="image-info">
      <li class="info-point">
        <p class="info-point-label">Likes</p>
        <p class="info-point-value">${e}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Views</p>
        <p class="info-point-value">${t}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Comments</p>
        <p class="info-point-value">${s}</p>
      </li>
      <li class="info-point">
        <p class="info-point-label">Downloads</p>
        <p class="info-point-value">${p}</p>
      </li>
    </ul>
  </li>`}const n=document.querySelector(".form");n.addEventListener("submit",F);function F(o){o.preventDefault();const r=n.elements["search-text"].value.trim();r&&(h(),b(),n.reset(),d(r).then(i=>{i.length>0?y(i):S("Sorry, there are no images matching your search query. Please try again!")}).catch(i=>console.error(i)).finally(()=>L()))}function S(o){m.show({message:o,position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",maxWidth:"432px"})}
//# sourceMappingURL=index.js.map
