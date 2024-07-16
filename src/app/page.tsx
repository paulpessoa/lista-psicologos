import { IPsi } from '@/types/psicologo';
import axios from 'axios';
import ProfileCard from './components/ProfileCard';
import { CustomScroller } from './components/CustomScroller';
import Image from 'next/image';

async function fetchPsiList(): Promise<IPsi[]> {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
  const data: IPsi[] = await response.data;
  return data;
}

export default async function fetchPsiListPagina() {
  const psicologos = await fetchPsiList();
  return (
    <main className="px-20 py-24">
      <header> {/* Tag header para o logo */}
        <Image
          src="/assets/logo4.svg"
          alt="Psi do Futuro"
          width={136}
          height={21}
          priority // Para otimizar o carregamento
        />
      </header>

      <section> {/* Tag section para o conteúdo principal */}
        <h1 className="mt-4 font-extrabold text-[52px] leading-none text-red-400">
          Encontre a profissional <br />certa e transforme sua vida.
        </h1>

        <p className="mt-10 mb-[96px] max-md:mt-10 text-lg leading-[140%] text-[#002A47] w-[607px] max-md:max-w-full">
          Encontramos alguns psis que se encaixam em seu perfil, veja mais
          detalhes de cada profissional e agende sua primeira consulta.
        </p>

        <CustomScroller>
          {psicologos?.map((psicologo) => (
            <article key={psicologo.id} className='w-[448px] h-[292px]'> {/* Tag article para cada card */}
              <ProfileCard {...psicologo} />
            </article>
          ))}
        </CustomScroller>
      </section>
    </main>
  );
}
