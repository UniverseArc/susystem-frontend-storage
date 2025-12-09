import {
    Button,
    Input,
    Space,
} from '@douyinfe/semi-ui'
import { IconPlus, IconRefresh } from '@douyinfe/semi-icons'
import type { WorkspacesTableHeaderProps } from './WorkspacesTableHeaderProps.types'

export const WorkspacesTableHeader: React.FC<WorkspacesTableHeaderProps> = ({ name, setName, isCreating, handleCreate, refetch}) => {

    const handleRefetch = () => refetch();

    return (
        <Space>
            <Input
                placeholder="Название проекта..."
                value={name}
                onChange={(value) => setName(value)}
            />
            <Button
                icon={<IconPlus />}
                theme="solid"
                type="primary"
                loading={isCreating}
                onClick={handleCreate}
            >
                Создать
            </Button>
            <Button icon={<IconRefresh />} onClick={handleRefetch}>
                Обновить
            </Button>
        </Space>
    );
}