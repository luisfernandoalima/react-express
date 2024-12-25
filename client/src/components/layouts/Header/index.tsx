import { Navbar } from "../Navbar"

import './Header.scss'

export const Header = () => {
    return(
        <header className="flex justify-between items-center px-8 py-3">
            <h1 className="text-2xl md:text-4xl font-semibold text-slate-50">Controle de Clientes</h1>
            <Navbar />
        </header>
    )
}