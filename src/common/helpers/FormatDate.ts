export const formatDate = (date: string | null, fallback: string) =>
    date ? new Date(date).toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'short' }) : fallback;
