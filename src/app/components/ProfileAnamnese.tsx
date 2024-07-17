import * as React from 'react';
import Image from 'next/image';
import { IPsi } from '@/types/psicologo';

const ProfileDescription: React.FC<IPsi> = (psicologo) => {
  return (
    <div className="rounded-2xl bg-white shadow-md p-8 w-full flex flex-col gap-4">
      <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
        <div className="text-base font-semibold leading-6 text-neutral-700 max-md:max-w-full">
          Anamnese
        </div>
        <div className="flex flex-wrap gap-2 content-center pr-20 mt-5 text-sm text-primary-500 max-md:pr-5">
          {psicologo.anamnesis ? psicologo.anamnesis.map(item => (
            <div key={item.id} className="flex gap-1.5 justify-center px-2.5 py-1 whitespace-nowrap rounded-md bg-primary-500 bg-opacity-10">
              <div >{item.name}</div>
              <Image
                src="/icons/Check.svg"
                width={16}
                height={16}
                alt='Check Icon'
              />
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
    </div>
  );
};

export default ProfileDescription;
