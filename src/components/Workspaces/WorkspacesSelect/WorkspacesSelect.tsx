import { Select, Spin } from "@douyinfe/semi-ui";
import type React from "react";
import type { WorkspacesSelectProps } from "./WorkspacesSelect.types";

export const WorkspacesSelect: React.FC<WorkspacesSelectProps> = ({isLoading, workspaces, workspaceId, setWorkspaceId}) => {

    if (isLoading) return <Spin />

    return (
        <Select
            placeholder="Выберите рабочее пространство"
            value={workspaceId ?? undefined}
            onChange={(value) => setWorkspaceId(Number(value))}
            style={{ width: 250 }}
            showClear
            clickToHide={true}
        >
            {workspaces?.map((ws: { id: number; name: string }) => (
                <Select.Option key={ws.id} value={ws.id}>
                    {ws.name}
                </Select.Option>
            ))}
        </Select>
    );
}