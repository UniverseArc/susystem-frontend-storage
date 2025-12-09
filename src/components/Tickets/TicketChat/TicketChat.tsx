import { useParams } from "react-router";
import styles from "./TicketChat.module.css";
import { TicketInput } from "@/components";
import { useGetTicketByIdQuery, useSendTicketMessageMutation } from "@/api";
import { TicketActions } from "./Actions";
import { TicketMessages } from "./Messages/TicketMessages";
import { TicketHeader } from "./Header/TicketHeader";

export const TicketChat = () => {
  const { ticketId } = useParams<{ ticketId: string }>();

  const { data: ticket, isLoading, error, refetch } = useGetTicketByIdQuery(Number(ticketId), {
    skip: !ticketId,
    pollingInterval: 2000,
  },
  );

  const [sendMessage, { isLoading: isSending }] = useSendTicketMessageMutation();

  const handleSend = async (textMessage: string, htmlMessage: string) => {
    if (!textMessage.trim() || !ticketId) return;

    try {
      await sendMessage({
        ticketId: Number(ticketId),
        message: {
          plainTextBody: textMessage,
          htmlTextBody: htmlMessage,
        },
      }).unwrap();

      await refetch();
    } catch (err) {
      console.error("Ошибка при отправке сообщения:", err);
    }
  };

  if (isLoading) {
    return <div className={styles.loading}>Загрузка тикета...</div>;
  }

  if (error || !ticket) {
    return <div className={styles.error}>Ошибка загрузки тикета</div>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.listContainer}>
        <div className={styles.container}>

          <TicketHeader ticket={ticket} />

          <TicketMessages ticket={ticket} />

          <TicketInput onSend={handleSend} isSending={isSending} />

        </div>
      </div>

      <TicketActions ticket={ticket} refetch={refetch} />
    </div>
  );
};