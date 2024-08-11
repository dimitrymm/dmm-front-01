import React from "react";
import Image from 'next/image';
import logo from '../../../public/logo.png';
// 
export const Menu = () =>{
    return(
        <>
           <nav className="fixed w-full">
             <div className="container mx-auto flex justify-between items-center px-32">
                <Image
                src={logo}
                alt="logo"
                width={177}
                height={44.84}
            />
            <ul className="list-none flex space-x-4 text-sm">
                <li className="mr-2"><a href="">Como fazer /</a></li>
                <li className="mr-2"><a href="">Ofertas/ </a></li>
                <li className="mr-2"><a href="">Depoimentos/ </a></li>
                <li className="mr-2"><a href="">Videos/ </a></li>
                <li className="mr-2"><a href="">Meu Carrinho </a></li>
            </ul>
            </div>
           </nav>
        </>
    )
}