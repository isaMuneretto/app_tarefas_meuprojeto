import { TextLimit } from "../TextLimit/TextLimit"
import { AlterarButton, CardBody, CardButton, CardContainer, CardFooter, CardHeader, ExcluirButton } from "./CardStyled"

export function Card(props) {
    console.log(props)
    return (
        <CardContainer>{/*tag section */}{/*como aqui é html e os dados dentro das tags são JS, tem que interpolar com chaves */}
            <CardBody> {/*tag article */}
                <div>
                    <CardHeader top={props.top}>
                        <h2>{props.titulo}</h2>
                        <TextLimit descricao={props.descricao} limit={150} />
                    </CardHeader>

                    <CardButton>
                        <section>
                        <i class="bi bi-arrow-clockwise"></i>
                        </section>
                        <AlterarButton onClick={props.alterarClick}>Alterar</AlterarButton>
                        <ExcluirButton onClick={props.excluirClick}>Excluir</ExcluirButton>

                    </CardButton>

                    <CardFooter>
                        <section>
                            <i class="bi bi-arrow-clockwise"></i>
                            <span>{props.status}</span>
                        </section>

                        <section>
                            <i class="bi bi-clipboard-data"></i>
                            <span>{props.data_criacao}</span>
                        </section>

                        <section>
                            <i class="bi bi-clipboard-data"></i>
                            <span>{props.data_limite}</span>
                        </section>
                    </CardFooter>

                </div>

            </CardBody>
        </CardContainer>
    )
}