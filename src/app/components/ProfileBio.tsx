import * as React from 'react';
import { IPsi } from '@/types/psicologo';

const ProfileDescription: React.FC<IPsi> = (psicologo) => {
  const { bio } = psicologo
  return (
    <div className="rounded-2xl bg-white shadow-md p-8 w-full flex flex-col gap-4">
      <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
        <div className="text-base font-semibold leading-6 text-neutral-700 max-md:max-w-full">
          Descrição pessoal
        </div>
        <div className="justify-center mt-4 text-sm text-neutral-500 max-md:max-w-full">
          {bio ? bio : "Não há informação cadastrada"}
        </div>
      </div>
    </div>
  );
};

export default ProfileDescription;
