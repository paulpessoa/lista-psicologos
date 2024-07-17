import { IPsi } from '@/types/psicologo';
import axios from 'axios';
import ProfileImage from '../components/ProfileImage';
import ProfileInfo from '../components/ProfileInfo';
import PricingInfo from '../components/PricingInfo';
import Image from 'next/image';
import ProfileBio from './ProfileBio';
import ProfileAnamnese from './ProfileAnamnese';
import ProfileCarreerTrail from './ProfileCarreerTrail';

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
      <ProfileBio {...psicologo} />
      <ProfileAnamnese {...psicologo} />
      <ProfileCarreerTrail {...psicologo} />
    </div>
  );
}
