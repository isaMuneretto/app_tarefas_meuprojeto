import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { AuthContainer, Section } from "./AuthenticationStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema";
import { signupSchema } from "../../schemas/signupSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { signin, signup } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function Authentication() {
    const { 
        register: registerSignup, //apelido para register 
        handleSubmit: handleSubmitSignup, 
        formState: { errors: errorsSignup }, 
    } = useForm({ resolver: zodResolver(signupSchema) });

    //aqui temos duas estruturas de hook form pq temos dois forms nesse mesmo componente (signin e signup)

    const {
        register: registerSignin, 
        handleSubmit: handleSubmitSignin, 
        formState: { errors: errorsSignin }, 
    } = useForm({ resolver: zodResolver(signinSchema) });

    async function inHandleSubmit(data) {
        try {
            const response = await signin(data);
            Cookies.set("token", response.data, { expires: 1 });
            navigate("/")
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    };

    const navigate = useNavigate();

    async function upHandleSubmit(data) {
        try {
            const response = await signup(data);
            Cookies.set("token", response.data.token, { expires: 1 });
            navigate("/")
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <AuthContainer>
            <Section type="signin">
                <h2>Entrar</h2>
                <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                    <Input type="email" placeholder="E-mail" name="email" register={registerSignin}/>
                    {errorsSignin.email && (<ErrorSpan>{errorsSignin.email.message}</ErrorSpan>)}

                    <Input type="password" placeholder="Senha" name="senha" register={registerSignin}/>
                    {errorsSignin.senha && (<ErrorSpan>{errorsSignin.senha.message}</ErrorSpan>)}
                    
                    <Link to="/main">
                    <Button type="submit" text="Entrar" />
                    </Link>
                </form>
            </Section>

            <Section type="signup">
                <h2>Cadastrar</h2>
                <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
                    <Input type="text" placeholder="Nome" name="username" register={registerSignup}/>
                    {errorsSignup.username && (<ErrorSpan>{errorsSignup.username.message}</ErrorSpan>)}

                    <Input type="email" placeholder="E-mail" name="email" register={registerSignup}/>
                    {errorsSignup.email && (<ErrorSpan>{errorsSignup.email.message}</ErrorSpan>)}

                    <Input type="password" placeholder="Senha" name="senha" register={registerSignup}/>
                    {errorsSignup.senha && (<ErrorSpan>{errorsSignup.senha.message}</ErrorSpan>)}

                    <Button type="submit" text="Cadastrar" />
                </form>
            </Section>
        </AuthContainer>
    );
}