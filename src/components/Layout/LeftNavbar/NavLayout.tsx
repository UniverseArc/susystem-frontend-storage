import { Path } from "@/router";
import { IconList, IconTicketCodeStroked } from "@douyinfe/semi-icons";
import { Nav } from "@douyinfe/semi-ui";
import type React from "react";
import type { NavLayoutProps } from "./NavLayout.types";

export const NavLayout: React.FC<NavLayoutProps> = ({navigate, location}) => {

    return (
        <Nav style={{ maxWidth: 220, height: '100%' }}
            mode="vertical"
            selectedKeys={[location.pathname]}
            onSelect={(item) => navigate(String(item.itemKey))}
            items={[
                { itemKey: Path.Tickets, text: 'Заявки', icon: <IconList /> },
                { itemKey: Path.Workspaces, text: 'Проекты', icon: <IconTicketCodeStroked /> },
            ]}
            header={<></>}
        />
    )
}