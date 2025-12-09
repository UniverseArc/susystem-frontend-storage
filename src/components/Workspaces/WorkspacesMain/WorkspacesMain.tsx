
import { Card } from '@douyinfe/semi-ui'
import { useCreateWorkspaceMutation, useGetWorkspacesQuery } from '@/api'
import { WorkspacesTable, WorkspacesTableHeader } from '../WorkspacesTable'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const WorkspacesMain: React.FC = () => {

    const { data, isLoading, refetch } = useGetWorkspacesQuery()

    const [createWorkspace, { isLoading: isCreating }] = useCreateWorkspaceMutation()

    const [name, setName] = useState<string>('')

    const handleCreate = async () => {
        if (!name.trim()) {
            toast.warn('Введите название рабочего пространства')
            return
        }
        try {
            await createWorkspace({ name }).unwrap()
            toast.success('Рабочее пространство создано!')
            setName('')
            refetch()
        } catch {
            toast.error('Не удалось создать рабочее пространство!')
        }
    }

    return (
        <Card
            title="Рабочие пространства"
            headerExtraContent={
                <WorkspacesTableHeader
                    name={name}
                    setName={setName}
                    isCreating={isCreating}
                    handleCreate={handleCreate}
                    refetch={refetch}
                />
            }>
            <WorkspacesTable data={data} isLoading={isLoading} />
        </Card>
    )
}

