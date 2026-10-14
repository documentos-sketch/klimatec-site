/**
 * Projetos reais realizados pela KlimaTEC.
 * Adicionar apenas trabalhos verdadeiros, com fotografias reais e autorização do cliente.
 */
export const projectFilters = ["Residencial", "Comercial", "Hotelaria", "Refrigeração", "Aquecimento", "Manutenção"] as const;

export type Project = {
  slug: string;
  name: string;
  locality: string;
  serviceType: string;
  category: (typeof projectFilters)[number];
  description: string;
  photos: string[];
  equipment?: string[];
};

export const projects: Project[] = [];
