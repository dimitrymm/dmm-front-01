
import Image from "next/image";
import React from "react";
import hero from '../../../public/imagem-hero 1.png'

import { elsie } from "@/app/fonts/fonts";

export const AssinaturaNewsletter = () =>{
    return(
        <>
        
        <div className="flex justify-center items-center px-80">
            <div className="w-[585px] h-[462px]">
            <p>Sua casa com as</p> <br />
            <p className={`text-8xl ${elsie.className}`}>Melhores plantas</p>
            <p className='my-6'>
                Encontre aqui uma vasta seleção de 
                plantas para decorar a sua casa e torná-lo 
                uma pessoa mais feliz no seu dia a dia. 
                Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </p>
            <div className="flex">
                <input className='h-[75px] w-full' type="text" placeholder="insira seu email"/>
                <button className='h-[75px] min-w-[194] bg-yellow'>Assinar newsletter</button>
            </div>  
        </div>
        <Image
                src={hero}
                alt="hero"
                width={787}
                height={1183}
            />
        </div>
        </>
    )
}