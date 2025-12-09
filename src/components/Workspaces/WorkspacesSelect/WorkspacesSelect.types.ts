import type { Workspaces } from "@/api";

export interface WorkspacesSelectProps {
    isLoading: boolean,
    workspaces?: Workspaces[],
    workspaceId: number | null,
    setWorkspaceId: (workspaceId: number) => void,
}