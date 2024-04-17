import EnumEspecie from "../enum/EnumEspecie"

type TipoPet = {
    id: Number,
    nome: String,
    especie: EnumEspecie
    adotado: Boolean,
    idade: Number
}

export default TipoPet