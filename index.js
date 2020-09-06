Vue.component('product-card', {
  template: `
    <div class="col-6 product-card">
      <img :src = "image">
      <p> LUNETTES DE SOLEIL <span class="product-name"> {{name}} </span></p>
      <button v-on:click="pass_order(name)" class="btn btn-primary btn-marquee">
        <span data-text="Ajouter au panier">Ajouter au panier</span>
      </button>
    </div>`,
  props: ['image','name'],
  methods:{
    pass_order: function(produit){
      this.$emit('passed-order', produit)
    }
  }
})

var app = new Vue({
  el: "#app",
  data: {
    products: [
      ["CLASSIFIED", "420,00 EUR", "https://www.fenty.com/on/demandware.static/-/Sites-loud-project-common-catalog/default/dwb02fbf95/product/image/A0283N2SH/680/5x6/classified-sunglasses-rose-havana-2_1700w.jpg"],
      ["SIDE-EYE", "650,00 EUR", "https://www.fenty.com/on/demandware.static/-/Sites-loud-project-common-catalog/default/dwf98a6ce0/product/image/A0234N1CL/710/5x6/side-eye-sunglasses-gold-1_748w.jpg"],
      ["SIDE NOTE", "400,00 EUR", "https://www.fenty.com/on/demandware.static/-/Sites-loud-project-common-catalog/default/dwf8e789b0/product/image/A0264N1CL/300/5x6/side-note-sunglasses-camo-green-1_1700w.jpg"],
      ["TROUBLE", "220,00 EUR", "https://www.fenty.com/on/demandware.static/-/Sites-loud-project-common-catalog/default/dwa8408bda/product/image/A0228N1CL/920/5x6/trouble-sunglasses-white-marble-1_1700w.jpg"],
      ["CODED", "300,00 EUR", "https://www.fenty.com/on/demandware.static/-/Sites-loud-project-common-catalog/default/dw665b25bc/product/image/A0282A4SH/100/5x6/coded-sunglasses-milky-way-2_1700w.jpg"],
      ["ANTISOCIAL", "400,00 EUR", "https://www.fenty.com/on/demandware.static/-/Sites-loud-project-common-catalog/default/dw2e897c7a/product/image/A0035N1CL/200/5x6/antisocial-sunglasses-chardonnay-1_540w.jpg"]
    ],
    orders: [],
  },
  methods:{
    order: function(product){
      this.orders.push(product);
    }
  }
})

window.addEventListener('scroll', function(e){
  var scrolled = window.pageYOffset;

  var topBg = document.querySelector(".first-background");
  var coordsBg = (- (scrolled *0.2) + 'px');
  topBg.style.transform  = 'translate3d(0px,' + coordsBg + ', 0px)';

  var topImg = document.querySelector(".first-img");
  var coordsImg = '0% '+ ((scrolled *0.1) + 'px');
  topImg.style.backgroundPosition  = coordsImg;

});

let scrollpos = window.scrollY
var w_height = window.innerHeight;
const header = document.querySelector(".navbar");
const side = document.querySelector(".navlist");
const bag = document.querySelector(".bag");

const add_class_top_on_scroll = () => header.classList.add("scrolled") & bag.classList.add("scrolled")
const remove_class_top_on_scroll = () => header.classList.remove("scrolled") & bag.classList.remove("scrolled")

const add_class_side_on_scroll = () => side.classList.add("scrolled")
const remove_class_side_on_scroll = () => side.classList.remove("scrolled")

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= (w_height*0.75)) { add_class_top_on_scroll() }
  else { remove_class_top_on_scroll() }

  if (scrollpos >= (w_height*0.4)) { add_class_side_on_scroll() }
  else { remove_class_side_on_scroll() }

})
