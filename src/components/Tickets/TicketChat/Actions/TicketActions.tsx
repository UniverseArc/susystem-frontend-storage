
import styles from "./TicketActions.module.css"
import { Button } from "@douyinfe/semi-ui"
import { buttonLabels, type TicketActionsProps } from "./TicketActions.types";
import { useCloseTicketMutation, useTakeTicketToWorkMutation } from "@/api";

export const TicketActions: React.FC<TicketActionsProps> = ({ticket, refetch}) => {

    const [takeTicket] = useTakeTicketToWorkMutation();
    const [closeTicket] = useCloseTicketMutation();

    const handleStatusChange = async () => {
        if (!ticket) return;

        if (ticket.status === 'Open') {
            await takeTicket(ticket.id).unwrap();
        } else if (ticket.status === 'InProgress') {
            await closeTicket(ticket.id).unwrap();
        }

        await refetch();
    };

    return (
        <div className={styles.filtersContainer}>

            <h3 className={styles.ticketTitle}>
                Действия над заявкой
            </h3>

            <div className={styles.filtersSet}>
                <Button onClick={handleStatusChange}
                    theme="solid"
                    disabled={ticket.status === "Closed"}
                    style={{ cursor: ticket.status === "Closed" ? "not-allowed" : "pointer" }}>
                    {buttonLabels[ticket.status] ?? ""}
                </Button>
            </div>
            
        </div>
    )
}