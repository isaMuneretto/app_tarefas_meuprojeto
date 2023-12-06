import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './pages/Search/Search';
import { GlobalStyled } from './GlobalStyled.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

//a router vai chamar as rotas atraves de um array de objetos
const router = createBrowserRouter([
  {
    path: "/", //endereço dessa rota (rota MÂE)
    element: <Navbar />, //o elemento da rota mãe é a navbar que vai puxar todas as outras rotas
    errorElement: <ErrorPage />,
    children: [  //os filhos da navbar é um array de objetos
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:titulo",
        element: <Search />,
      }
    ]
  }
])

//para renderizar a <App/> tem que ser com routerProvider
ReactDOM.createRoot(document.getElementById('root')).render( //root vem la do index e embaixo renderiza o arquivo App.jsx
  <React.StrictMode>
    <GlobalStyled /> {/*qualquer tag que for embaixo do GlobalStyled vai assumir o estilo dela*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
