function validarLogin(){
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    //expressão regular
    const regexUsuario = /^[a-zA-Z0-9]{3,15}$/;
    const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*])[a-zA-Z\d!@#$%&*]{8,20}$/;

    if(!regexUsuario.test(usuario)){
        alert('Nome de usuario inválido.');
        return false;
    }

    console.log(regexSenha.exec(senha))
    if(!regexSenha.test(senha)){
        alert('Senha inválida.');
        return false;
    }

    return true;
}
