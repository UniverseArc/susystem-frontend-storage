
/**
 * Основная схема ответа API при ошибке (Problem Details по RFC 9457).
 */
export interface IProblemDetails {
  type: string;
  title: string;
  state: number;
  details: string;
}

export interface ILoginResponce {
    userId: string, 
    accessToken: string
}

export interface ILoginArgs {
    username: string, 
    password: string
}

export type TicketStatus = 'Open' | 'InProgress' | 'Closed';

export interface ITicket {
    id: number;
    subject: string;
    description: string;
    contact: string;
    contactName: string;
    assignments: IAssignment[];
    status: TicketStatus;
    createDateTime: string | null;
    startDateTime: string | null;
    closeDateTime: string | null;
}

export interface ITicketDetail extends ITicket {
  messages: IMessage[];
}

export interface IAssignment {
  userId: string;
  username: string;
}

export interface IMessage {
  id: number;
  ticketId: number;
  date: string;
  messageId: string;
  content: string;
  from: string;
  fromName: string;
  to: string;
  toName: string;
  folder: string;
  inReplyTo: string | null;
    attachments?: {
    link: string;
    fileName: string;
  }[];
}

export interface ISendEmailMessageDto {
  plainTextBody?: string;
  htmlTextBody?: string;
}

export interface Workspaces {
  id: number;
  name: string;
}