import {NavLink} from 'react-router-dom'
function Menu() {
    return (<div class="menu">
    <ul>
           <li><NavLink to="home.js">HOME</NavLink></li>
           <li><NavLink to="empresa.js">EMPRESA</NavLink></li>
           <li><NavLink to="rastrear.js">RASTREAR</NavLink></li>
           <li><NavLink to="entregas.js">ENTREGAS</NavLink></li>
           <li><NavLink to="rotas.js">ROTAS</NavLink></li>
           <li><NavLink to="cadastro.js">CADASTRO</NavLink></li>
           <li><NavLink to="contato.js">CONTATO</NavLink></li>
    </ul>
</div>);
}
export default Menu;