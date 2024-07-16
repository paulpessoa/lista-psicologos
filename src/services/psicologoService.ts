import axios from "axios";
import { IPsicologo } from "@/types/psicologo";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

export async function getPsiList(): Promise<IPsicologo[]> {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar lista dos psicólogos:", error);
    throw error;
  }
}

export async function getPsiDetail(id: string): Promise<IPsicologo> {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    if (response.status === 404) {
      throw new Error("Psicólogo não encontrado");
    }
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do psicólogo:", error);
    throw error;
  }
}
