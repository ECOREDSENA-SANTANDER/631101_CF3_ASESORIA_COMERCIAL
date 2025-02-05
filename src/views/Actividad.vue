<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de la información',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Con esta actividad, los aprendices podrán darse cuenta de su conocimiento en cuanto al manejo de la información y sus tipos de análisis con el fin de minimizar la incertidumbre y el riesgo en el mercado.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Técnica orientada a obtener una conversación estructurada con las personas con apropiación de la información.',
          imagen: require('@/assets/componentes/img01.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entrevista', esCorrecta: true },
            { id: 'b', texto: 'Investigación cuantitativa', esCorrecta: false },
            { id: 'c', texto: 'Análisis cualitativo', esCorrecta: false },
            { id: 'd', texto: 'Análisis prescriptivo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'E un método de investigación en el que el investigador recolecta datos numéricos de los objetos, fenómenos o participantes.',
          imagen: require('@/assets/componentes/img02.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entrevista', esCorrecta: false },
            { id: 'b', texto: 'Investigación cuantitativa', esCorrecta: true },
            { id: 'c', texto: 'Análisis cualitativo', esCorrecta: false },
            { id: 'd', texto: 'Análisis prescriptivo', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Proceso mediante el cual se extraen conclusiones de datos no estructurados y heterogéneos que no son expresados de forma numérica o cuantificable.',
          imagen: require('@/assets/componentes/img03.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Entrevista',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Investigación cuantitativa', esCorrecta: false },
            { id: 'c', texto: 'Análisis cualitativo', esCorrecta: false },
            { id: 'd', texto: 'Análisis prescriptivo', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Tipo de análisis que se encarga de encontrar una solución entre una gama de variantes con el objetivo de optimizar los recursos y aumentar la eficiencia operativa.',
          imagen: require('@/assets/componentes/img04.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Entrevista',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Investigación cuantitativa', esCorrecta: false },
            { id: 'c', texto: 'Análisis cualitativo', esCorrecta: false },
            { id: 'd', texto: 'Análisis prescriptivo', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'La minería de datos es el proceso de encontrar singularidades, elementos comunes y correspondencias en grandes agregados de datos para augurar conclusiones, empleando una amplia variedad de técnicas.',
          imagen: require('@/assets/componentes/img01.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'La distribución de frecuencias indica el número de veces que ocurre cada valor o dato en una tabla de resultados.',
          imagen: require('@/assets/componentes/img02.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'El <i>Machine Learning</i> es una disciplina del ámbito de la Inteligencia Artificial que, a través de algoritmos, otorga a los computadores de la capacidad de asemejar estándares en datos mínimos y elaborar predicciones exactas.',
          imagen: require('@/assets/componentes/img03.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'La principal diferencia entre <i>big data</i> y <i>data mining</i> (grandes datos y minería de datos) se halla en que <i>data mining</i> se refiere a operaciones que implican búsquedas sofisticadas para la obtención de datos específicos y concretos dentro del gran mundo de los datos (<i>big data</i>).',
          imagen: require('@/assets/componentes/img04.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Las variables continuas son valores que cambian en carácter progresivo y no a irrupciones o de otra condición, tienen una disposición que no puede alterarse.',
          imagen: require('@/assets/componentes/img01.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            ' La variable ordinal es un tipo de variable estadística de tipo cualitativo que expresa con palabras una cualidad de naturaleza ordenable.',
          imagen: require('@/assets/componentes/img02.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
