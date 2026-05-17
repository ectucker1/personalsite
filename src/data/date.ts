export const urlDateYear = (date: Date) => date.toLocaleString('default', { year: 'numeric', timeZone: 'UTC' });
export const urlDateMonth = (date: Date) => date.toLocaleString('default', { month: '2-digit', timeZone: 'UTC' });
export const urlDateDay = (date: Date) => date.toLocaleString('default', { day: '2-digit', timeZone: 'UTC' });

export const urlDate = (date: Date) => `${urlDateYear(date)}/${urlDateMonth(date)}/${urlDateDay(date)}`;

export const displayDateYear = (date: Date) => date.toLocaleString('default', { year: 'numeric', timeZone: 'UTC' });
export const displayDateMonth = (date: Date) => date.toLocaleString('default', { month: 'long', timeZone: 'UTC' });
export const displayDateDay = (date: Date) => date.toLocaleString('default', { day: '2-digit', timeZone: 'UTC' });

export const displayDate = (date: Date) => `${displayDateDay(date)} ${displayDateMonth(date)}, ${displayDateYear(date)}`;
