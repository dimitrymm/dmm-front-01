import Image from "next/image";
import logo from '../../public/logo.svg'
import { Menu } from "@/components/Menu"; 
import {AssinaturaNewsletter} from '@/components/AssinaturaNewsletter';
import vector from '../../public/Vector.png';

// "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"

export default function Home() {
  return (
    <>
      <div className="relative h-screen">
        
        <Menu/>
        <AssinaturaNewsletter/>
        <Image
              src={vector}
              alt="hero"
              width={1009}
              height={1087}
              className="absolute top-0 right-0 z-[-1]"
        />
      </div>
      
    </>
  );
}
