import React from "react";
import styles from "./TicketMessages.module.css"
import type { TicketMessagesProps } from "./TicketMessages.types";

export const TicketMessages: React.FC<TicketMessagesProps> = ({ ticket }) => {
    
    return (
        <div className={styles.messages}>
            {ticket.messages.map((m) => {
                return (
                    <div key={m.id} className={styles.messageBlock}>
                        <div className={styles.messageHeaderTest}>
                            <strong>
                                {m.fromName} ({m.from})
                            </strong>
                            <span className={styles.date}>
                                {new Date(m.date).toLocaleString()}
                            </span>
                        </div>

                        <div
                            className={styles.messageContent}
                            dangerouslySetInnerHTML={{ __html: m.content }}
                        />

                        {m.attachments?.length ? (
                            <div>
                                <strong>Вложения:</strong>
                                <div>
                                    {m.attachments.map((a, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <a
                                                    href={a.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {a.fileName}
                                                </a>
                                                <br />
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    )
}
