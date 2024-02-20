import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { api, getAllTarefas } from "../../services/taskServices";
import { MaintenanceBody } from "./MaintenanceStyled";
import { useForm } from "react-hook-form";

export default function Maintenance() {

    const {register, handleSubmit, reset} = useForm();
    const [tarefa, setTarefa] = useState([]); //array desestruturado, variavel news inicializa con array vazio. setNews altera o estado de array vazio para array com alguma coisa
    //const [topTarefa, setTopTarefa] = useState({});


    async function findAllTarefas() { //essa função utiliza o Service para trazer os posts
        const tarefaResponse = await getAllTarefas();
        setTarefa(tarefaResponse.data.tarefas); //atualiza um estado e renderiza na tela

    }

    useEffect(() => {
        findAllTarefas();
    }, [])

    const filtrarLista = async (campos) => {
        try {
            const lista = await api.get(`tarefas/filtro/${campos.palavra}`);
            
            lista.data.length
                ? setTarefa(lista.data)  // Correção aqui
                : alert("Não há tarefas cadastradas com a palavra chave pesquisada");
        } catch (error) {
            alert(`Erro: ..Não foi possível obter os dados: ${error}`);
        }
    }

    // Função para lidar com a alteração de uma tarefa
    const handleAlterar = async (id, titulo) => {
        const novoStatus = prompt(`Digite o novo status da tarefa ${titulo}`);
        if (novoStatus == "") {
            alert('Digite um status válido!(status em branco)')
            return;
        }
        try {//captura os erros 
            //chamando o backend e passando os dados
            await api.put(`tarefas/${id}`, { status: novoStatus });

            const TarefasAtualizadas = [...tarefa];
            const indiceTarefas = TarefasAtualizadas.find(tarefas => tarefas.id === id);
            console.log("indice tarefa:" + indiceTarefas);
            TarefasAtualizadas[indiceTarefas.id].status = novoStatus;
            setTarefa(TarefasAtualizadas);
            findAllTarefas();

        } catch (error) {
            alert(`Erro: ..Não foi possível alterar a tarefa ${titulo}: ${error}`);
        }
    };

    // Função para lidar com a exclusão de uma tarefa
    const handleExcluir = async (id, titulo) => {
        if (!window.confirm(`Confirma a exclusão do Tarefa ${titulo}?`)) {
            return;
        }
        try {
            console.log("id é:" + id)
            await api.delete(`tarefas/${id}`);
            //formar uma nova lista de tarefas sem a tarefa que foi excluida
            setTarefa(tarefa.filter(tarefa => tarefa.id !== id));

        } catch (error) {
            alert(`Erro: ..Não foi possível excluir a tarefa ${titulo}: ${error}`);
        }
    };

    return ( //o return so pode retornar uma tag entao tem que envolver em uma section ou qlqr outra tag, div, etc no caso usei uma Fragment (tag sem nome) 
        <> {/*Fragment é uma tag vazia não precisa ter nome*/}

            <MaintenanceBody>
            <div className="col-sm-5">
                <form onSubmit={handleSubmit(filtrarLista)}>
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="Titulo" required {...register("palavra")} />
                        <input type="submit" className="btn btn-primary" value="Pesquisar" />
                        <input type="button" className="btn btn-danger" value="Todos" onClick={()=>{reset({palavra:""});findAllTarefas();}}/>
                    </div>
                </form>
            </div>
                {tarefa.map((item) => (
                    <Card
                        key={item.id}
                        titulo={item.titulo}
                        descricao={item.descricao}
                        status={item.status}
                        data_criacao={item.data_criacao}
                        data_limite={item.data_limite}
                        excluirClick={()=>handleExcluir(item.id, item.titulo)}
                        alterarClick={()=>handleAlterar(item.id, item.titulo)}
                    >
                    </Card>
                ))}
            </MaintenanceBody>

        </>
    );
}