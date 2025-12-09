import type { ITicket } from "@/api";

export const statusLabels: Record<string, string> = {
  Open: "Открытые",
  InProgress: "В работе",
  Closed: "Закрытые",
};

export interface TicketsMainProps {
  tickets: ITicket[];
  filters: string[];
  setFilters: (filters: string[]) => void;

  workspaceId: number | null;
  setWorkspaceId: (id: number | null) => void;
}


export const allStatuses = Object.keys(statusLabels);