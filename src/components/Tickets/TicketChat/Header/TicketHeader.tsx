import { useNavigate } from "react-router";
import type { TicketHeaderProps } from "./TicketHeader.types"
import styles from "./TicketHeader.module.css"
import { Button } from "@douyinfe/semi-ui";

export const TicketHeader: React.FC<TicketHeaderProps> = ({ ticket }) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/tickets")
    }

    return (
        <header className={styles.header}>
            <h2 className={styles.subject}>{ticket.subject}</h2>
            <div className={styles.nicknameCrossWrapper}>
                <div>
                    {ticket.contactName} • {ticket.contact}
                </div>
                <Button theme="borderless" onClick={handleNavigate}>
                    ✕
                </Button>
            </div>
        </header>
    )
}