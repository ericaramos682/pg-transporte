function Cadastro() {
    return (<div id="e02">
        <a href="index.html"><img alt="imagem cadastro" src="imagem/pg.png" id="logo02"/></a>
        <form method="post">
            <input type="text" name="nome" placeholder="digite seu Nome Completo aqui" />
            <input type="text" name="cpf" placeholder="digite seu CPF aqui" />
            <input type="e-mail" name="email" placeholder="Digite seu e-mail" />
            <input type="e-mail" name="email1" placeholder="Confirme seu e-mail" />
            <input type="password" name="senha" placeholder="Digite uma senha" />
            <input type="password" name="senha1" placeholder="Confirme sua senha" />
            <br />
            <input type="submit" name="enviar" value="Cadastrar" />
        </form>
    </div>);
}
export default Cadastro;