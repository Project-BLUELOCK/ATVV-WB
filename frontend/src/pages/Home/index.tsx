/* eslint-disable react/jsx-pascal-case */
import * as React from 'react';
import Navbar_ from '../../component/NavBar';
import './styles.css';
import { Button } from 'react-bootstrap';

function Home() {
    return (
        <section>
            <header>
                <Navbar_ />
            </header>
            <main>
                <div className="text">
                    <h1>Salão WB</h1>
                    <h2>SEJA BEM VINDO </h2>


                    <Button className="custom-btn btn-5" href='/cadastrar_cliente'>Cadastrar Clientes </Button>
                    {/* <button className="custom-btn btn-5" ref="/servicos">Serviços</button> */}

                </div>
            </main>
        </section>
    );
}

export default Home;