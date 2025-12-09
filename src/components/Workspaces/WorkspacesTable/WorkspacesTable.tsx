import { Spin, Table, Typography } from "@douyinfe/semi-ui"
import type React from "react"
import type { WorkspacesTableProps } from "./WorkspacesTableProps.types"
import { useNavigate } from "react-router"

export const WorkspacesTable: React.FC<WorkspacesTableProps> = ({ data, isLoading }) => {

    const { Text } = Typography

    const navigate = useNavigate();

    if (isLoading) return <Spin size="large" />

    return (
        <Table
            columns={[
                { title: 'ID', dataIndex: 'id', width: 80 },
                { title: 'Название', dataIndex: 'name' },
            ]}
            dataSource={
                data ?? []
            }
            pagination={
                { pageSize: 12 }
            }
            bordered
            empty={
                <Text type="tertiary">Нет данных</Text>
            }
            onRow={(record) => {
                if (!record) return {};
                return {
                    onClick: () => {
                        navigate(`/workspaces/${record.id}`);
                    },
                    style: { cursor: "pointer" } as React.CSSProperties,
                };
            }}
        />
    )
}