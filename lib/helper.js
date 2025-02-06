export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD
};
