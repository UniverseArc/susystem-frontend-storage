import { Typography, Dropdown } from "@douyinfe/semi-ui";
import styles from "./LayoutHeader.module.css";
import type { LayoutHeaderProps } from "./LayoutHeader.types";
import { useNavigate } from "react-router";
import { handleUserMenuSelect } from "@/common";
import { useState } from "react";

export const LayoutHeader: React.FC<LayoutHeaderProps> = ({ username }) => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);

    const handleClick = (value: string) => {
        handleUserMenuSelect(value, navigate);
        setVisible(false);
    };

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLeft}>
                Su Support
                {/* <span className={styles.headerSubtitle}>/ Все заявки</span> */}
            </div>

            <div className={styles.headerCenter} />

            <div className={styles.headerRight}>
                {/* <Avatar color="blue">{username[0]}</Avatar> */}

                <Dropdown
                    position="bottomRight"
                    trigger="click"
                    visible={visible}
                    onVisibleChange={setVisible}
                    render={
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleClick("profile")}>
                                Профиль
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleClick("logout")}>
                                Выход из учетной записи
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    }
                >
                    <Typography.Text className={styles.userNameClickable}>
                        {username}
                    </Typography.Text>
                </Dropdown>
            </div>
        </div>
    );
};
