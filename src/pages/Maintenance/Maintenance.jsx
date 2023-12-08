//componentes são funções que dão return em algum HTML, aqui o react já entende que Home é um componente(de pagina no caso)
//Caminho: index chama a main, a main chama o App.jsx e o App.jsx chama o Home.jsx
//aqui vai chamar os componentes (card, footer e navbar)

import { useEffect, useState } from "react";

import { Card } from "../../components/Card/Card.jsx";
import { getAllTarefas } from "../../services/taskServices.js";
import { HomeBody } from "./HomeStyled.jsx";

export default function Home() {

    const [tarefa, setTarefa] = useState([]); //array desestruturado, variavel news inicializa con array vazio. setNews altera o estado de array vazio para array com alguma coisa
    //const [topTarefa, setTopTarefa] = useState({});

    async function findAllTarefas() { //essa função utiliza o Service para trazer os posts
        const tarefaResponse = await getAllTarefas();
        setTarefa(tarefaResponse.data.tarefas); //atualiza um estado e renderiza na tela
    
        /* const topTarefaResonse = await getTopTarefas();
        setTopTarefa(topTarefaResonse.data.tarefas); */
    }

    //findAllNews(); qnd renderizar,essa função vai chamar o axios e vai trazer os posts aqui só que está na raiz e vai criar um loop
    //abaixo função de callback (o que vai acontecer qnd useEffect for acionado) e array de dependencias 
    //é quem ele precisa monitorar para que o efeito seja dado na tela
    useEffect(() => {
        findAllTarefas();
    }, [])

    return ( //o return so pode retornar uma tag entao tem que envolver em uma section ou qlqr outra tag, div, etc no caso usei uma Fragment (tag sem nome) 
        <> {/*Fragment é uma tag vazia não precisa ter nome*/}
        
            <HomeBody>
                {tarefa.map((item) => (
                    <Card
                        key={item.id}
                        titulo={item.titulo}
                        descricao={item.descricao}
                        status={item.status}
                        data_criacao={item.data_criacao}
                        data_limite={item.data_limite}
                    />
                ))}
            </HomeBody>

        </>
    );
}
