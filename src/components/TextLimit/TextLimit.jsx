//é uma boa pratica isolar um componente que faz apenas uma função mas que é generica para todo o projeto

export function TextLimit({descricao, limit}) {
    const textLimited = descricao.length > limit ? `${descricao.substring(0, limit)}...` : descricao;

    return <p>{textLimited}</p>;
}