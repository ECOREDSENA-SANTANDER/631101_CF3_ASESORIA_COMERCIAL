(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16215048"],{"0607":function(t,s,e){},"3b86":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"slyder-c"},[t.datos.length?s("ScrollHorizontal",{attrs:{selectedId:t.selected,"item-full-width":""}},t._l(t.datos,(function(e,i){return s("div",{key:"key-"+t.getId(i),staticClass:"slyder-c__slyde",attrs:{id:t.getId(i)}},[s("div",{staticClass:"slyder-c__imagen mb-4"},[s("figure",{staticClass:"slyder-c__img"},[s("img",{attrs:{src:e.imagen,alt:e.leyendaImagen}}),e.leyendaImagen?s("figcaption",[t._v(t._s(e.leyendaImagen))]):t._e()])]),s("div",{staticClass:"slyder-c__content"},[s("div",{staticClass:"slyder-c__content__header mb-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[e.hasOwnProperty("titulo")?s("h3",{staticClass:"mb-2 mb-md-0",domProps:{innerHTML:t._s(e.titulo)}}):t._e()]),s("div",{staticClass:"col-auto"},[s("div",{staticClass:"slyder__action"},[s("div",{staticClass:"slyder__pagination"},[t._v(t._s(i+1)+"/"+t._s(t.datos.length))]),i-1>=0?s("a",{staticClass:"slyder__btn",on:{click:function(s){t.selected=t.getId(i-1)}}},[s("i",{staticClass:"fas fa-angle-left"})]):t._e(),i!=t.datos.length-1?s("a",{staticClass:"slyder__btn",on:{click:function(s){t.selected=t.getId(i+1)},mouseover:function(s){t.mostrarIndicador=!1}}},[s("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador&&0===i?s("div",{staticClass:"indicador__container indicador--left"},[s("div",{staticClass:"indicador--click indicador--sm"})]):t._e()]):t._e()])])])]),s("div",{staticClass:"slyder-c__content__body"},[s("p",{staticClass:"mb-3",domProps:{innerHTML:t._s(e.texto)}})])])])})),0):t._e()],1)},l=[],a=e("c73e"),d=e("6189"),o={name:"SlyderC",components:{ScrollHorizontal:d["a"]},mixins:[a["a"]],data:()=>({mostrarIndicador:!0}),mounted(){this.selected=this.getId(0)}},n=o,r=e("2877"),c=Object(r["a"])(n,i,l,!1,null,null,null);s["default"]=c.exports},6189:function(t,s,e){"use strict";var i=function(){var t=this,s=t._self._c;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[s("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:`translate(${t.scrollVal}px,0px)`}]},[t._t("default")],2)])},l=[],a={name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(t){t.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var t;const s=null===(t=this.ids.find(t=>t.id===this.selectedId))||void 0===t?void 0:t.id,e=document.getElementById(s);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===e)return;const i=this.$refs.hContainer,l=e.offsetWidth*this.ids.length;let a=e.offsetLeft;const d=i.offsetWidth/e.offsetWidth;d>1&&l-a<i.offsetWidth&&(a=l-i.offsetWidth),this.scrollVal=1===this.ids.length?0:-a},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(t=>({id:t.elm.id,key:t.key})))}}},d=a,o=(e("e1b9"),e("2877")),n=Object(o["a"])(d,i,l,!1,null,"c4e6906c",null);s["a"]=n.exports},c73e:function(t,s,e){"use strict";s["a"]={props:{datos:{type:Array,default:()=>[]}},data:()=>({mainId:Math.floor(Math.random()*10**10),selected:"0"}),methods:{getId(t){return t<0?null:"sl-"+this.mainId+t+1}}}},e1b9:function(t,s,e){"use strict";e("0607")}}]);
//# sourceMappingURL=chunk-16215048.74e98965.js.map