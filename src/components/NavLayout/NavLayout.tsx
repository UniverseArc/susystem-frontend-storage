import { Path } from "@/router";
import { IconList, IconTicketCodeStroked } from "@douyinfe/semi-icons";
import { Nav } from "@douyinfe/semi-ui";
import { useLocation, useNavigate } from "react-router";

export const NavLayout = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Nav style={{ maxWidth: 220, height: '100%' }}
            mode="vertical"
            selectedKeys={[location.pathname]}
            onSelect={(item) => navigate(String(item.itemKey))}
            items={[
                { itemKey: Path.Tickets, text: 'Заявки', icon: <IconList /> },
                { itemKey: Path.Projects, text: 'Проекты', icon: <IconTicketCodeStroked /> },
            ]}
            header={<></>}
        />
    )
}