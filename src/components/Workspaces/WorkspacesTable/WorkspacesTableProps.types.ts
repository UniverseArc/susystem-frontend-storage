import type { Workspaces } from "@/api";

export interface WorkspacesTableProps {
    data?: Workspaces[],
    isLoading: boolean,
}