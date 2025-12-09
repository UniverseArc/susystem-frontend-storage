import type { ITicket } from "@/api";
import styles from "./TicketCard.module.css";
import type { TicketStatus } from "@/api";

export interface TicketProps {
  tickets: ITicket[];
}

export const importantStatusStyles: Record<TicketStatus, string> = {
  Open: styles.ticketImportantWarning,
  InProgress: styles.ticketImportantAccent,
  Closed: styles.ticketImportantSuccess,
};

export const highlighterStyles: Record<TicketStatus, string> = {
  Open: styles.highlighterWarning,
  InProgress: styles.highlighterAccent,
  Closed: styles.highlighterSuccess,
};
