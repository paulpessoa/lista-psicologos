import { useQuery } from "@tanstack/react-query";
import { getPsiDetail } from "@/services/psicologoService";
import { IPsi } from "@/types/psicologo";

export const usePsiDetailQuery = (id: string) => {
  return useQuery<IPsi, Error>({
    queryKey: ["psi-detail", id],
    queryFn: () => getPsiDetail(id),
  });
}

