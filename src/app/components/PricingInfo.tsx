import { IPsi } from '@/types/psicologo';
import * as React from 'react';

const PricingInfo: React.FC<IPsi> = (psicologo) => {
    const { sessionPrice, montlyPrice } = psicologo
    return (
        <div className="flex gap-4 text-sm">
            <div className="flex flex-col flex-1">
                <h3 className="text-[#64696D] text-sm">Primeira sessão</h3>
                <div className="justify-center text-center px-2.5 py-1 mt-1 rounded-md bg-neutral-100 text-neutral-600">
                    {sessionPrice ? `R$ ${sessionPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "Entrar em contato"}
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <h3 className="text-[#64696D] text-sm">Plano mensal</h3>
                <div className="justify-center text-center px-2.5 py-1 mt-1  rounded-md text-green-900 bg-emerald-50 font-semibold">
                    {montlyPrice ? `R$ ${montlyPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "Entrar em contato"}
                </div>
            </div>
        </div>
    );
};

export default PricingInfo;
