export interface ChatInputProps {
  onSend: (textMessage: string, htmlMessage: string) => void;
  isSending?: boolean;
}