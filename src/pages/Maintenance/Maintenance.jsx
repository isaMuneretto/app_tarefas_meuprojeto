import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { searchTarefa } from "../../services/taskServices";
import { ContainerResults, SearchTarefa, TextResults } from "./SearchStyled";
import { Card } from "../../components/Card/Card";

export function Search() {
    const { titulo } = useParams();
    const [tarefa, setTarefa] = useState([]);

    async function search() {
        try {
            const tarefaApi = await searchTarefa(titulo);
            setTarefa(tarefaApi.data.tarefas);
            console.log(tarefa)
        } catch (err) {
            console.log(err);
            setTarefa([]);
        }
    }

    useEffect(() => { //monitora a mudança do title qnd digitar para fazer o search
        search();
    }, []);


    return (            
                {tarefa.map((item) => {
                    return (
                        <Card
                        key={item.id}
                        titulo={item.titulo}
                        descricao={item.descricao}
                        status={item.status}
                        data_criacao={item.data_criacao}
                        data_limite={item.data_limite}
                    />
                    );
                })}
            
            )
}