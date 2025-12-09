import styles from "./TicketsStatuses.module.css";
import { allStatuses, statusLabels } from "../TicketsMain/TicketsMain.types";
import { useGetWorkspacesQuery } from "@/api";
import type { TicketsStatusesProps } from "./TicketsStatuses.types";
import { WorkspacesSelect } from "@/components/Workspaces/WorkspacesSelect";

export const TicketsStatuses: React.FC<TicketsStatusesProps> = ({
    filters,
    setFilters,
    workspaceId,
    setWorkspaceId,
}) => {
    const { data: workspaces, isLoading } = useGetWorkspacesQuery();

    const handleCheckboxChange = (status: string) => {
        if (filters.includes(status)) {
            setFilters(filters.filter((f) => f !== status));
        } else {
            setFilters([...filters, status]);
        }
    };

    return (
        <div>
            <div className={styles.selectWrapper}>
                <h3>Рабочее пространство</h3>
                <WorkspacesSelect
                    isLoading={isLoading}
                    workspaceId={workspaceId}
                    setWorkspaceId={setWorkspaceId}
                    workspaces={workspaces}
                />
            </div>

            <div className={styles.checkboxContainer}>
                <h3>Статусы</h3>
                {allStatuses.map((status) => (
                    <label key={status} className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            checked={filters.includes(status)}
                            onChange={() => handleCheckboxChange(status)}
                        />
                        <span className={styles.checkboxSpan}>{statusLabels[status]}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};
