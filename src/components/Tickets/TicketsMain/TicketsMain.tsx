import React from "react";
import styles from "./TicketsMain.module.css";
import { TicketCard, TicketsStatuses, } from "@/components";
import type { TicketsMainProps } from "./TicketsMain.types";

export const TicketsMain: React.FC<TicketsMainProps> = ({ tickets, filters, setFilters, workspaceId, setWorkspaceId }) => {

  return (
    <div className={styles.main}>
      <div className={styles.listContainer}>
        <TicketCard tickets={tickets} />
      </div>
      <div className={styles.filtersContainer}>
        <h2 className={styles.ticketTitle}>
          Фильтры
        </h2>
        <div className={styles.filtersSet}>
          <TicketsStatuses filters={filters} setFilters={setFilters} workspaceId={workspaceId} setWorkspaceId={setWorkspaceId} />
        </div>
      </div>
    </div>
  );
};
