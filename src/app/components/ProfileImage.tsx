import React from 'react';
import Image from 'next/image';
import { IPsi } from '@/types/psicologo';


const ProfileImage: React.FC<IPsi> = (psicologo) => {
  const { avatarUrl, nickName} = psicologo
    return (
      <div className="relative overflow-hidden rounded-full w-[72px] h-[72px]">
        <Image
          src={avatarUrl}
          alt={`Profile picture of ${nickName}`}
          fill
          className="object-cover"
          priority 
        />
      </div>
    );
  };
  
  export default ProfileImage;