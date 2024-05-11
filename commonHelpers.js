import{i as c,S as m}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="43796292-928ecbabb016f283abab002e7",g="https://pixabay.com/api/",h=(l="cats")=>{const s=new URLSearchParams({key:y,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${g}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},d=l=>l.map(({webformatURL:s,largeImageURL:r,tags:a,likes:e,views:t,comments:o,downloads:u})=>`
        <div class ="gallery-container">
         <a href="${r}" class="gallery-link">
          <img src="${s}" alt="${a}" class="gallery-img" />
         </a>
         <div class="tags-container">
          <ul class="gallery-item-list">
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Likes</h3>
              <p class="gallery-item-title">${e}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Views</h3>
              <p class="gallery-item-title">${t}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Comments</h3>
              <p class="gallery-item-title">${o}</p>
            </li>
            <li class="gallery-tags">
              <h3 class="gallery-item-title">Downloads</h3>
              <p class="gallery-item-title">${u}</p>
            </li>
          </ul>
          </div>
        </div>
`).join(""),i=document.querySelector(".js-gallery"),f=document.querySelector(".js-search-form"),n=document.querySelector(".js-loader");function p(l){l.preventDefault();const s=l.target.elements.searchKeyword.value.trim();if(s===""){i.innerHTML="",l.target.reset(),c.show({message:"Input field can not be empty",position:"topCenter",timeout:2e3,color:"red"});return}i.innerHTML="",n.classList.remove("is-hidden"),h(s).then(r=>{r.total===0&&c.show({message:"Sorry, there are no images matching your search query. Try again!",position:"topCenter",timeout:2e3,color:"red"}),i.innerHTML=d(r.hits),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>console.log(r)).finally(()=>{l.target.reset(),n.classList.add("is-hidden")})}f.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
