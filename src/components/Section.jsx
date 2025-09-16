import Style from '../style/Section.module.css';
import Img from "/biblioteca.avif";
function Section() {
  return (

   
    <div >
      
      <h1 className={Style.span}>Comprometidos con todos los estudiantes necesitados </h1>
       <h2 className={Style.title}>Club de debate y oratoria de la escuela secundaria Lincoln</h2>
 
      <br />
      <img src={Img} alt=""  className={Style.imagenPrincipal} />


        <div className={Style.containertitledos}>
            <h2> ¿QUE HACEMOS?</h2>
            <div>
                <p className={Style.title_principal}>Detalles del club:</p>
                <h3 className={Style.parr_principal}>En Oratoria y Debate aprenderás a pensar críticamente, hablar con confianza y participar en emocionantes competiciones. Aquí tienes todo lo que necesitas saber:</h3>
            </div>
        </div>



        <div className={Style.container_group}>
            <div className={Style.fila_1}>
                <h3>Qué:</h3>
                <p className={Style.parr_derecho1}> ¿Estás listo para encontrar tu voz?</p>
                <p className={Style.parr_derecho2}>Este es un lugar seguro para perfeccionar tus habilidades con compañeros que comparten tus mismas ideas.</p>
                <span className={Style.span1}> 
                    <h3>Cuando:</h3>
                    <p className={Style.parrfo3}>Miércoles, 15:30-16:30 horas</p>
                    <p className={Style.parrfo4}>Saldrás a tiempo para tomar el último autobús que te llevará a casa.</p>
                </span>    
            </div>

            <div className={Style.fila_2}>
                <h3>OMS:</h3>
                <p className={Style.parr_izquierdo1}>Todos los estudiantes de Lincoln High</p>
                <p className={Style.parr_izquierda2}>Todos, de cualquier grado, son bienvenidos a unirse.</p>
                <span className={Style.span2}>
                    <h3>¿Dónde?</h3>
                    <p className={Style.parrizquierda4}>Habitación 204</p>
                    <p>Nos reunimos en la sala del Sr. Smith. Él es nuestro maestro patrocinador</p>
                </span>
            </div>
        </div>
    </div>
  );
}

export default Section;