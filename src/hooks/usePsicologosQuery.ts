import { useQuery } from "@tanstack/react-query";
import { getPsiList } from "@/services/psicologoService";
import { IPsi } from "@/types/psicologo";

export const usePsiListQuery = () => {
  return useQuery<IPsi[], Error>({
    queryKey: ["psi-list"],
    queryFn: getPsiList,
  });
};
