import { IPsi } from '@/types/psicologo';
import axios from 'axios';
import ProfileImage from '../components/ProfileImage';
import ProfileInfo from '../components/ProfileInfo';
import PricingInfo from '../components/PricingInfo';

async function PsicologoDetalhes(id: string): Promise<IPsi> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
  const data: IPsi = await response.data;
  return data;
}

export default async function ProfileDetails({ params }: { params: { id: string } }) {
  const psicologo = await PsicologoDetalhes(params.id);
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
          <div className="flex gap-1.5 justify-center px-2.5 py-1 whitespace-nowrap rounded-md bg-red-400 bg-opacity-10">
            <div>Ansiedade</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa1c217ef467660a8dc91dba0d3936ad18ce78d7640168fc9851a7b8c9e00d2?"
              className="shrink-0 w-5 aspect-square"
            />
          </div>
          <div className="flex gap-1.5 justify-center px-2.5 py-1 rounded-md bg-red-400 bg-opacity-10">
            <div>Controle de raiva</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa1c217ef467660a8dc91dba0d3936ad18ce78d7640168fc9851a7b8c9e00d2?"
              className="shrink-0 w-5 aspect-square"
            />
          </div>
          <div className="flex gap-1.5 justify-center px-2.5 py-1 whitespace-nowrap rounded-md bg-red-400 bg-opacity-10">
            <div>Stress</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa1c217ef467660a8dc91dba0d3936ad18ce78d7640168fc9851a7b8c9e00d2?"
              className="shrink-0 w-5 aspect-square"
            />
          </div>
        </div>
      </div>
      </div>

      <div className="rounded-2xl bg-white shadow-md p-8 w-full flex flex-col gap-4">
        <div className="flex flex-col w-full max-md:px-5 max-md:max-w-full">
        <div className="text-base font-semibold leading-6 text-neutral-700 max-md:max-w-full">
          Formação profissional
        </div>
        <div className="flex gap-2 mt-5 max-md:flex-wrap">
          <div className="flex justify-center items-center self-start px-4 py-2 w-6 h-6 bg-red-400 bg-opacity-10 rounded-[36px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddcf4556f5c6126d8ff6a997a5e0c7592823a2111699047012fd5ab1f219a7e?"
              className="w-4 aspect-square"
            />
          </div>
          <div className="flex-1 text-sm leading-5 text-slate-800 max-md:max-w-full">
            Formada em Psicologia pela Faculdade Mackenzie e Pós graduada em
            Terapia Cognitiva Comportamental
          </div>
        </div>
        <div className="flex gap-2 mt-5 max-md:flex-wrap">
          <div className="flex justify-center items-center px-4 py-2 w-6 h-6 bg-red-400 bg-opacity-10 rounded-[36px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddcf4556f5c6126d8ff6a997a5e0c7592823a2111699047012fd5ab1f219a7e?"
              className="w-4 aspect-square"
            />
          </div>
          <div className="flex-1 my-auto text-sm leading-5 text-slate-800 max-md:max-w-full">
            Mestre em TCC pela UNICAMP
          </div>
        </div>
        <div className="flex gap-2 mt-5 max-md:flex-wrap">
          <div className="flex justify-center items-center self-start px-4 py-2 w-6 h-6 bg-red-400 bg-opacity-10 rounded-[36px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddcf4556f5c6126d8ff6a997a5e0c7592823a2111699047012fd5ab1f219a7e?"
              className="w-4 aspect-square"
            />
          </div>
          <div className="flex-1 text-sm leading-5 text-slate-800 max-md:max-w-full">
            Curso - Psicologia das Relações Humanas (Período: 2021 - 2022)
            Relacionamento Humano
          </div>
        </div>
        <div className="flex gap-2 mt-5 max-md:flex-wrap">
          <div className="flex justify-center items-center self-start px-4 py-2 w-6 h-6 bg-red-400 bg-opacity-10 rounded-[36px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ddcf4556f5c6126d8ff6a997a5e0c7592823a2111699047012fd5ab1f219a7e?"
              className="w-4 aspect-square"
            />
          </div>
          <div className="flex-1 text-sm leading-5 text-slate-800 max-md:max-w-full">
            Curso - O suicídio e os desafios para a Psicologia (Período: 2021
            - 2022)
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
