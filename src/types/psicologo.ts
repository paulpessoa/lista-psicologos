export interface IPsi {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
    bio: string;
    avatarUrl: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    sessionPrice: number;
    crp: string;
    specialization?: string;
    montlyPrice: number;
    professionalContact: {
      id: string;
      type: "PHONE" | "EMAIL";
      value: string;
    }[];
    anamnesis: {
      id: string;
      name: string;
    }[];
    professionalCarreerTrail: {
      id: string;
      name: string;
    }[];
  }