export interface WorkspacesTableHeaderProps {
    name: string,
    setName: (name: string) => void;
    isCreating: boolean,
    handleCreate: () => Promise<void>; 
    refetch: () => Promise<unknown>,
}

