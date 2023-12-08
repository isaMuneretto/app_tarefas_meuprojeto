import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoND.png";
import { ErrorSpan, ImageLogo, InputSpace, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";


const searchSchema = z.object({ //zod é uma biblioteca de validação baseada em schemas. É feita por campo e o errorSpan tambem 
    titulo: z
        .string()
        .nonempty({ message: "A pesquisa não pode ser vazia" })
        .refine(value => !/^\s*$/.test(value), { message: "A pesquisa não pode ter apenas espaços" }), //esse refine é um regex, os caracteres indicam espaço vazio, se negar não pode ter só espaço
});

export function Navbar() {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm({ //parametros desestruturados do HookForm(usado para formularios)
        resolver: zodResolver(searchSchema),
    });

    const navigate = useNavigate(); //reacte-router-dom

    function onSearch(data) {//o que eu quero que aconteça qnd eu fizer o onSubmit é entrar no onSearch e receber os dados(data)
        const { titulo } = (data);
        //navega na pagina search e vai pegar o title do parametro e vai mostrar
        navigate(`/search/${titulo}`);
        reset();
    }

    function goAuth() {
        navigate("/auth"); //o navigate faz ir para a rota /auth (main)
    };

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

                <Link to="/auth">
                    <Button type="button" text="Entrar">Entrar</Button> {/*goAuth é uma função inventada*/}
                </Link>
                
            </Nav>
            {errors.titulo && <ErrorSpan>{errors.titulo.message}</ErrorSpan>}
            <Outlet /> {/*a outlet é uma rota que fica embaixo da navbar portanto ela não pode ser colocada em outro lugar*/}
        </>
    )
}