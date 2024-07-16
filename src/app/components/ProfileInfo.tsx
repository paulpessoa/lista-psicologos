import { IPsi } from '@/types/psicologo';
import * as React from 'react';

const ProfileInfo: React.FC<IPsi> = (psicologo) => {
    const {nickName, specialization, crp} = psicologo
    return (
        <div className="flex flex-col flex-1 justify-center my-auto">
            <p className="font-bold text-md text-[#002A47]">
                {nickName}
            </p>
            <p className="text-[#64696D] text-sm">
                {specialization ?? "Especialização não informada"}
            </p>
            <p className="text-[#64696D] text-sm leading-none">
                CRP: {crp ?? "Nao informado"}
            </p>
        </div>
    );
};

export default ProfileInfo;
