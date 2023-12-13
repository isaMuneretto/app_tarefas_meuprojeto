import { z } from "zod";

export const signupSchema = z.object({ //zod é uma biblioteca de validação baseada em schemas. É feita por campo e o errorSpan tambem 
    username: z
        .string()
        .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
        .transform((username) =>
            username
                .trim()
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")
        ),
        email: z.string().email({ message: "E-mail inválido"}).toLowerCase(),
        senha: z.string().min(6, "A senha precisa ter no minimo 6 caracteres" ), //esse refine é um regex, os caracteres indicam espaço vazio, se negar não pode ter só espaço
    });