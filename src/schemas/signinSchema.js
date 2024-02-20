import { z } from "zod";

export const signinSchema = z.object({ //zod é uma biblioteca de validação baseada em schemas. É feita por campo e o errorSpan tambem 
    email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
        senha: z
        .string()
        .min(3, { message: "A senha deve ter no minimo 3 caracteres" }), //esse refine é um regex, os caracteres indicam espaço vazio, se negar não pode ter só espaço
});