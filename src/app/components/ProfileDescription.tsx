import * as React from 'react';
import { IPsi } from '@/types/psicologo';

const ProfileDescription: React.FC<IPsi> = (psicologo) => {
  const { id, bio } = psicologo
  return (
    <div className="text-sm text-neutral-500">
      <p
        style={{
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          textOverflow: "ellipsis",
        }}
        className='text[#64696D] text-sm leading-4 mb-1'>
        {bio}
      </p>
      <a href={`/psi/${id}`} className="text-blue-500 hover:underline">
        Ver perfil completo
      </a>
    </div>
  );
};

export default ProfileDescription;
