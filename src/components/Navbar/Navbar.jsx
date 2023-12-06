import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoND.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
//import "./Navbar.css";

export function Navbar() {
    const { register, handleSubmit, reset } = useForm(); //parametros desestruturados do HookForm(usado para formularios)

    const navigate = useNavigate(); //reacte-router-dom

    function onSearch(data) {//o que eu quero que aconteça qnd eu fizer o onSubmit é entrar no onSearch e receber os dados(data)
        const { titulo } = (data);
        //navega na pagina search e vai pegar o title do parametro e vai mostrar
        navigate(`/search/${titulo}`);
        reset();
    }

    return (
        <>
            <Nav> {/* essas tags são componentes que chamam o arquivo NavbarStyled*/}
                <form onSubmit={handleSubmit(onSearch)}>
                    <InputSpace className="input-search-space">
                        <button type="submit">
                            <i className="bi bi-search"> {/*tag de icone*/}</i>
                        </button>

                        {/*as tags i e input não viraram componente CSS pq lá no styled foi feito herança */}

                        <input {...register("titulo")}
                            type="text"
                            placeholder="Pesquise por um título "
                        />
                    </InputSpace>
                </form>

                <Link to="/"> {/*esse link é recurso do router-dom e substitui o href para navegação interna */}
                    <ImageLogo src={logo} alt="Logo " />
                </Link>


                <Button>Entrar</Button> {/*ao inves de ser um componente HTML, agora é componente CSS*/}

                
            </Nav>
            <Outlet /> {/*a outlet é uma rota que fica embaixo da navbar portanto ela não pode ser colocada em outro lugar*/}
        </>
    )
}