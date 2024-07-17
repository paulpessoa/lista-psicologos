import * as React from 'react';
import Image from 'next/image';
import { IPsi } from '@/types/psicologo';

const ProfileCarreerTrail: React.FC<IPsi> = (psicologo) => {
  return (
    <div className="rounded-2xl bg-white shadow-md p-8 w-full flex flex-col gap-4">
      <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
        <div className="text-base font-semibold leading-6 text-neutral-700 max-md:max-w-full">
          Formação profissional
        </div>
        {psicologo.professionalCarreerTrail ? psicologo.professionalCarreerTrail.map(item => (
          <div key={item.id} className="flex gap-2 mt-5 max-md:flex-wrap">
            <div className="flex justify-center items-center w-[24px] h-[24px] bg-primary-500 bg-opacity-10 rounded-[50px]">
              <Image
                src="/icons/Suitcase.svg"
                width={16}
                height={16}
                alt='Suitcase Icon'
              />
            </div>
            <div className="flex-1 my-auto text-sm leading-5 text-slate-800 max-md:max-w-full">
              {item.name}
            </div>
          </div>
        )) :
          (
            <div className="justify-center mt-5 text-sm text-neutral-500 max-md:max-w-full">
              Não há informação cadastrada
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProfileCarreerTrail;
