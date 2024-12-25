import { User } from "../types/User";

// Devine o tipo das chaves e dos valores do objeto
type Error = {
    [key:string]:string
}


export const validate = (data:User) => {
    // Cria um objeto vazio do tipo Error
    const errors:Error = {}

    // Cria as chave e os valores caso alguma informação da variável "data" esteja vazia
    if(!data.name) errors["name"] = "O nome é obrigatório!"
    
    if(!data.email) errors["email"] = "O e-mail é obrigatório!"

    return errors
}