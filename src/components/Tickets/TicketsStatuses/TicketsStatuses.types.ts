export interface TicketsStatusesProps {
  filters: string[];
  setFilters: (filters: string[]) => void;
      workspaceId: number | null;
    setWorkspaceId: (id: number | null) => void;
}