(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"17c6":function(e,a,t){e.exports=t.p+"img/img04.c23042c9.png"},2438:function(e,a,t){},"2b28":function(e,a,t){"use strict";t("aac7")},"373f":function(e,a,t){"use strict";t("c50e")},4298:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col"},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},o=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-auto"},[a("img",{attrs:{src:t("8da0"),alt:""}})])}],n=function(){var e=this,a=e._self._c;return a("div",[a("p",{staticClass:"mb-4 pb-4",domProps:{innerHTML:e._s(e.pregunta.texto)}}),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,s){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)},c=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(a=>({...a,correcta:e===a.id&&a.esCorrecta,incorrecta:e===a.id&&!a.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},u=d,l=(t("a2ed"),t("2877")),p=Object(l["a"])(u,n,c,!1,null,"0d0c9f9a",null),m=p.exports,b=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),a("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(a){return e.$emit("reiniciar")}}},[a("span",[e._v("Reiniciar")])]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(a){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},v=[],g={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"}}},C=g,f=(t("373f"),Object(l["a"])(C,b,v,!1,null,"7a0121ad",null)),h=f.exports,x=function(){var e=this,a=e._self._c;return a("div",{staticClass:"row align-items-center justify-content-around"},[a("div",{staticClass:"col-5"},[(e.aprobado,a("img",{attrs:{src:t("a46c"),alt:""}}))]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"d-flex align-items-center flex-column"},[a("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[a("h3",[e._v("¡BUEN TRABAJO!")]),a("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[a("h3",[e._v("VUELVE A INTENTARLO")]),a("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],a("hr",{staticClass:"w-100"}),a("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},_=[],j={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(a=>{a.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},A=j,y=(t("2b28"),Object(l["a"])(A,x,_,!1,null,"360ec089",null)),S=y.exports,L={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:h,ActividadResultados:S},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:a}=this.cuestionario;if(!e)return[];const t=a?this.shuffle(e):e;return t.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let a,t=e.length;while(t>0)a=Math.floor(Math.random()*t),t--,[e[t],e[a]]=[e[a],e[t]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},R=L,I=(t("852c"),Object(l["a"])(R,i,o,!1,null,"1f7092aa",null)),q=I.exports,M={name:"ActividadDidactica",components:{Actividad:q},data:()=>({cuestionario:{tema:"Manejo de la información",titulo:"Cuestionario",introduccion:"<b> Objetivo:</b> Con esta actividad, los aprendices podrán darse cuenta de su conocimiento en cuanto al manejo de la información y sus tipos de análisis con el fin de minimizar la incertidumbre y el riesgo en el mercado.",barajarPreguntas:!1,preguntas:[{id:1,texto:"Técnica orientada a obtener una conversación estructurada con las personas con apropiación de la información.",imagen:t("dbbd"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Entrevista",esCorrecta:!0},{id:"b",texto:"Investigación cuantitativa",esCorrecta:!1},{id:"c",texto:"Análisis cualitativo",esCorrecta:!1},{id:"d",texto:"Análisis prescriptivo",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"Es un método de investigación en el que el investigador recolecta datos numéricos de los objetos, fenómenos o participantes.",imagen:t("fea1"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Entrevista",esCorrecta:!1},{id:"b",texto:"Investigación cuantitativa",esCorrecta:!0},{id:"c",texto:"Análisis cualitativo",esCorrecta:!1},{id:"d",texto:"Análisis prescriptivo",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"Proceso mediante el cual se extraen conclusiones de datos no estructurados y heterogéneos que no son expresados de forma numérica o cuantificable.",imagen:t("a5bc"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Entrevista",esCorrecta:!1},{id:"b",texto:"Investigación cuantitativa",esCorrecta:!1},{id:"c",texto:"Análisis cualitativo",esCorrecta:!1},{id:"d",texto:"Análisis prescriptivo",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"Tipo de análisis que se encarga de encontrar una solución entre una gama de variantes con el objetivo de optimizar los recursos y aumentar la eficiencia operativa.",imagen:t("17c6"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Entrevista",esCorrecta:!1},{id:"b",texto:"Investigación cuantitativa",esCorrecta:!1},{id:"c",texto:"Análisis cualitativo",esCorrecta:!1},{id:"d",texto:"Análisis prescriptivo",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"La minería de datos es el proceso de encontrar singularidades, elementos comunes y correspondencias en grandes agregados de datos para augurar conclusiones, empleando una amplia variedad de técnicas.",imagen:t("dbbd"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"La distribución de frecuencias indica el número de veces que ocurre cada valor o dato en una tabla de resultados.",imagen:t("fea1"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"El <i>Machine Learning</i> es una disciplina del ámbito de la Inteligencia Artificial que, a través de algoritmos, otorga a los computadores de la capacidad de asemejar estándares en datos mínimos y elaborar predicciones exactas.",imagen:t("a5bc"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"La principal diferencia entre <i>big data</i> y <i>data mining</i> (grandes datos y minería de datos) se halla en que <i>data mining</i> se refiere a operaciones que implican búsquedas sofisticadas para la obtención de datos específicos y concretos dentro del gran mundo de los datos (<i>big data</i>).",imagen:t("17c6"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!1},{id:"b",texto:"Falso",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"Las variables continuas son valores que cambian en carácter progresivo y no a irrupciones o de otra condición, tienen una disposición que no puede alterarse.",imagen:t("dbbd"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:" La variable ordinal es un tipo de variable estadística de tipo cualitativo que expresa con palabras una cualidad de naturaleza ordenable.",imagen:t("fea1"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Verdadero",esCorrecta:!0},{id:"b",texto:"Falso",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},w=M,H=Object(l["a"])(w,s,r,!1,null,null,null);a["default"]=H.exports},"852c":function(e,a,t){"use strict";t("2438")},"8da0":function(e,a,t){e.exports=t.p+"img/icon-actividad.3d896e1e.svg"},a2ed:function(e,a,t){"use strict";t("b671")},a46c:function(e,a,t){e.exports=t.p+"img/cuestionario-resultado.a5584db8.svg"},a5bc:function(e,a,t){e.exports=t.p+"img/img03.07c5f609.png"},aac7:function(e,a,t){},b671:function(e,a,t){},c50e:function(e,a,t){},dbbd:function(e,a,t){e.exports=t.p+"img/img01.d5670c96.png"},fea1:function(e,a,t){e.exports=t.p+"img/img02.f20ab7c4.png"}}]);
//# sourceMappingURL=actividad.d8d44084.js.map