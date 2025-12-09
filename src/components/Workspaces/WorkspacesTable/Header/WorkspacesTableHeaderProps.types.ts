export interface WorkspacesTableHeaderProps {
    name: string,
    setName: (name: string) => void;
    isCreating: boolean,
    handleCreate: () => Promise<void>; // ничего не возвращает явно поэтому и void
    refetch: () => Promise<unknown>,
}

