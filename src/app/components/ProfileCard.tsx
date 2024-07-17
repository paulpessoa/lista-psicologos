import { IPsi } from '@/types/psicologo';
import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileInfo from './ProfileInfo';
import PricingInfo from './PricingInfo';
import ProfileDescription from './ProfileDescription';

const ProfileCard: React.FC<IPsi> = (psicologo) => {
  return (
    <div className="rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg p-8 w-full h-full flex flex-col gap-4">
      <div className="flex gap-4">
        <ProfileImage {...psicologo} />
        <ProfileInfo {...psicologo} />
      </div>
      <PricingInfo {...psicologo} />
      <ProfileDescription {...psicologo} />
    </div>
  );
}

export default ProfileCard;
