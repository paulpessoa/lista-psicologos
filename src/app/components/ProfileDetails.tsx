import { IPsi } from '@/types/psicologo';
import axios from 'axios';
import ProfileImage from '../components/ProfileImage';
import ProfileInfo from '../components/ProfileInfo';
import PricingInfo from '../components/PricingInfo';
import Image from 'next/image';

async function fetchPsiDetail(id: string): Promise<IPsi> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
  const data: IPsi = await response.data;
  return data;
}

export default async function ProfileDetails({ params }: { params: { id: string } }) {
  const psicologo: IPsi = await fetchPsiDetail(params.id);
  return (
    <div className="flex flex-col justify-center items-center max-w-[557px] mx-auto gap-7">
      <div className="rounded-2xl bg-white shadow-md p-8 w-full flex flex-col gap-4">
        <div className="flex gap-4">
          <ProfileImage {...psicologo} />
          <ProfileInfo {...psicologo} />
        </div>
        <PricingInfo  {...psicologo} />
      </div>

      <div className="rounded-2xl bg-white shadow-md p-8 w-full flex flex-col gap-4">
        <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
          <div className="text-base font-semibold leading-6 text-neutral-700 max-md:max-w-full">
            Descrição pessoal
          </div>
          <div className="justify-center mt-5 text-sm text-neutral-500 max-md:max-w-full">
            Olá, sou a Ângela, psicóloga com foco na abordagem comportamental.
            Meu objetivo é auxiliar você a se reconectar consigo mesmo, com zelo
            e dedicação, visando suas emoções e necessidades, para alcançar uma
            vida mais plena e satisfatória. Vamos juntos em busca do seu
            bem-estar emocional e mental?
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white shadow-md p-8 w-full flex flex-col gap-4">
        <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
          <div className="text-base font-semibold leading-6 text-neutral-700 max-md:max-w-full">
            Anamnese
          </div>
          <div className="flex flex-wrap gap-2 content-center pr-20 mt-5 text-sm text-pink-700 max-md:pr-5">
            {psicologo.anamnesis ? psicologo.anamnesis.map(item => (
              <div key={item.id} className="flex gap-1.5 justify-center px-2.5 py-1 whitespace-nowrap rounded-md bg-red-400 bg-opacity-10">
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

      <div className="rounded-2xl bg-white shadow-md p-8 w-full flex flex-col gap-4">
        <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
          <div className="text-base font-semibold leading-6 text-neutral-700 max-md:max-w-full">
            Formação profissional
          </div>

          {psicologo.professionalCarreerTrail ? psicologo.professionalCarreerTrail.map(item => (
            <div key={item.id} className="flex gap-2 mt-5 max-md:flex-wrap">
              <div className="flex justify-center items-center w-[24px] h-[24px] bg-red-400 bg-opacity-10 rounded-[50px]">
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
    </div>
  );
}
