
import Image from 'next/image';
import ProfileDetails from '../../components/ProfileDetails';

export default async function PsicologoPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col justify-center items-center mx-auto gap-7 mt-[68px]">
      <a
        href="/"
        className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 rounded-[46px] w-[200px] flex items-center justify-center"
      >
        <Image
          src="/icons/Arrow_Left_MD.svg"
          alt="Retornar à lista"
          className="mr-2"
          width={20}
          height={20}
        />
        Retornar à lista
      </a>
      <ProfileDetails params={params} />
    </div>



  );
}






