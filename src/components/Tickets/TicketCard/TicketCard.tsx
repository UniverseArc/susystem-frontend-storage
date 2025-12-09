import React from "react";
import styles from "./TicketCard.module.css";
import { highlighterStyles, importantStatusStyles, type TicketProps } from "./TicketCard.types";
import { useNavigate } from "react-router";
import { Path } from "@/router";
import { formatDate } from "@/common";


export const TicketCard: React.FC<TicketProps> = ({ tickets }) => {

  const navigate = useNavigate();

  const handleTicketClick = (id: number) => {
    navigate(`${Path.Tickets}/${id}`)
  }

  return (
    <>
      {tickets.map((ticket) => {
        // TODO: убрать адовы стили из map
        const highlighterStyle = `${styles.highlighter} ${highlighterStyles[ticket.status]}`;
        const ticketImportantStyle = `${styles.ticketImportant} ${importantStatusStyles[ticket.status]}`;

        return (
          <section
            key={ticket.id}
            className={styles.ticketCard}
            onClick={() => handleTicketClick(ticket.id)}
          >
            <div className={highlighterStyle} />
            <div className={styles.ticketMain}>
              <h3 className={styles.ticketTitle}>{ticket.subject}</h3>
              <p className={styles.ticketDescription}>{ticket.description}</p>
              <div className={styles.ticketFooter}>
                <span className={styles.ticketId}>ID: {ticket.id}</span>
                <span>{ticket.contact}</span>
              </div>
            </div>
            <div className={ticketImportantStyle}>
              <div>{formatDate(ticket.createDateTime, '')}</div>
              <div>{formatDate(ticket.startDateTime, 'Не начата')}</div>
              <div>{formatDate(ticket.closeDateTime, 'Не выполнена')}</div>
              <div>{ticket.assignments?.[0]?.username ?? "Не назначен"}</div>
            </div>
          </section>
        );
      })}
    </>
  );
}
