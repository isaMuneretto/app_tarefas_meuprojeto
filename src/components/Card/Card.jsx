import { TextLimit } from "../TextLimit/TextLimit"
import { CardBody, CardContainer, CardFooter } from "./CardStyled"

export function Card( props ) {
    console.log(props)
    return (
        <CardContainer>{/*tag section */}{/*como aqui é html e os dados dentro das tags são JS, tem que interpolar com chaves */}
            <CardBody> {/*tag article */}
                <div>
                    <h2>{props.titulo}</h2>
                    <img src={props.banner} alt="Imagem" />
                </div>
                <TextLimit text={props.descricao} limit={150} />
            </CardBody>

            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{props.status}</span>
                </div>

                <div>
                    <i className="bi bi-chat"></i>
                    <span>{props.data_criacao}</span>
                </div>

                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{props.data_limite}</span>
                </div>

            </CardFooter>
        </CardContainer>
    )
}