export const formatReviewDate = (date: string) => new Date(date).toLocaleDateString('ru', { day: '2-digit', month: 'long' });
