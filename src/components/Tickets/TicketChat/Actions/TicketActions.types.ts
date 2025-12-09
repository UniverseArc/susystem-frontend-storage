import type { ITicketDetail } from "@/api";

export const buttonLabels: Record<string, string> = {
    Open: "Взять в работу",
    InProgress: "Закрыть",
    Closed: "Закрыта",
};

export interface TicketActionsProps {
    ticket: ITicketDetail,
    refetch: () => Promise<unknown>;
}