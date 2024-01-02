const formatTimeDigit = (time: number) => {
  return time < 10 ? `0${time}` : time.toString();
};

const formatDateToCustomString = (date: Date) => {
  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  if (isToday) {
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `Today, ${hours}:${formatTimeDigit(minutes)} ${ampm}`;
  }

  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";

  const formattedString = `${month} ${day}, ${hours}:${formatTimeDigit(
    minutes
  )} ${ampm}`;

  return formattedString;
};

export default formatDateToCustomString;
