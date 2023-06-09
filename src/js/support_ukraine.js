import { supportItems } from './support_ukraie_items';

const galleryItemsContainer = document.querySelector('.mySwiper');
const fundsMarkup = createFundsMarkup(supportItems);

console.log("support ukraine.js");
galleryItemsContainer.insertAdjacentHTML('beforeend', fundsMarkup);

// function numberFounds(arr) {
//   for (let i = 0; i < arr.length; i += 1) {}
// }
// numberFounds(supportItems);

function createFundsMarkup(supportItems) {
  // console.log(supportItems.children);

  return supportItems.map(({ title, url, img }) => {
      return `
            <li class="support_gallery_item swiper-slide">
              <a class="support_gallery_link link" href="${url}" title="${title}">
                <svg class="support_gallery_link_svg" height="20">
                <use href="${img}"></use>
                </svg>
              </a>
            </li>
            `;
    }).join('');
}

// console.log(supportItems);

// const swiper = new Swiper('.mySwiper', {
//   slidesPerView: 4,
//   spaceBetween: 20,
//   direction: 'vertical',
//   loop: true,

//   navigation: {
//     nextEl: '.swiper-button-next',
//   },
//});
