export interface Usuario {
    id?: number
    nome: string,
    sobrenome: string,
    email: string,
    dataNascimento: Date,
    escolaridadeId: number,
    file?: File,
    nomeHistoricoEscolar?: string
    historicoEscolar?: any,
    escolaridade?: any
}   