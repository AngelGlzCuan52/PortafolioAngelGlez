// script.js
document.addEventListener("DOMContentLoaded", function () {
    const seleccion = document.getElementById("seleccion");
    const informacion = document.getElementById("informacion");

    seleccion.addEventListener("change", function () {
        const opcionSeleccionada = seleccion.value;

        if (opcionSeleccionada === "escolaridad") {
            informacion.innerHTML = `
                <h2>Escolaridad</h2>
                <h3>Universidad Autónoma De CD. Juarez IIT</h3>
                <h4>ingeniería en Sistemas Computacionales</h4>
                <p>Pertenezco al programa 45200 Ingeniería en Sistemas Computacionales
                Cursando el 9no semestre y con un total de 236 créditos.</p>
            `;
        } else if (opcionSeleccionada === "personalidad") {
            informacion.innerHTML = `
                <h2>Personalidad</h2>
                <p>Soy una persona apasionada y versátil. Me encanta la música y tengo la habilidad de tocar varios instrumentos, incluso he compuesto canciones. <br>
                También soy un entusiasta de los animes y los videojuegos, lo que demuestra mi interés en una variedad de formas de entretenimiento.<br>
                <br>
                En cuanto a mi enfoque profesional, siempre estoy ansioso por aprender y dominar nuevas tecnologías<br> 
                para ofrecer un desempeño excepcional en mi trabajo. La búsqueda constante de conocimiento refleja mi compromiso <br>
                con mi desarrollo profesional y mi deseo de hacer una contribución significativa en mi campo laboral.<br>
                <br>
                Mis valores fundamentales son la honestidad, el respeto y la responsabilidad. <br>
                Estos principios son la base de mi comportamiento y mis relaciones. <br>
                Mis amigos valoran mi honestidad y confían en mí como alguien en quien pueden contar en cualquier situación. <br>
                Siempre he considerado a mis amigos como personas a las que puedo contarles cualquier cosa, <br>
                y ellos aprecian mi lealtad y amistad inquebrantable.
                <br>
                Tengo una fuerte ética de trabajo y una actitud de no rendirme fácilmente.<br> 
                Soy capaz de liderar equipos y trabajar en colaboración con otros, <br>
                y siempre estoy dispuesto a investigar y buscar soluciones cuando me enfrento a desafíos. 
                Sin embargo, a veces, me siento abrumado cuando las cosas no salen como esperaba,<br>
                lo que puede llevarme a experimentar estrés y frustración.<br>
                <br>
                En resumen, soy una persona apasionada, creativa, orientada al aprendizaje y centrada en la honestidad y la lealtad en mis relaciones. <br>
                Mi actitud positiva y mi disposición para esforzarme al máximo.</p>
            `;
        } else {
            informacion.innerHTML = "";
        }
    });
});
