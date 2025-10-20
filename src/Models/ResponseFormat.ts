export class ResponseFormat<T>{

    mensagem: string;
    status: boolean;
    data: T

    constructor(status: boolean, mensagem: string, data: T) {
        this.status = status;
        this.mensagem = mensagem;
        this.data = data
    }

}