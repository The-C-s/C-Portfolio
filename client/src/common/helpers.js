export const parseDate = date => (
  date
    ? Intl.DateTimeFormat('en-AU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }).format(Date.parse(date))
    : ""
);
