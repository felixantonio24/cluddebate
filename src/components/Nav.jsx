import Styles from '../style/Nav.module.css';
function Nav(){

    return(


     <div className={Styles.navbar}> 
            <ul>
                <li>Hogar</li>
                <li> Detalles</li>
                <li> Noticias</li>
                <li> Contactos</li>
            </ul>
        </div>
     
    )
}

export default Nav;