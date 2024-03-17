import moment from "moment-jalaali";

const shortenDescription = (desc) => {
  const partialText = desc.substring(0, 150);
  const finalText = partialText + "...";
  return finalText;
};

const convertDate = (datePublished) => {
  const currentDate = moment();
  const enteredDate = moment(datePublished, "YYYY-MM-DD");
  const yearsDifference = currentDate.diff(enteredDate, "years");
  if (yearsDifference) return `${yearsDifference} سال پیش`;

  const monthsDifference = currentDate.diff(enteredDate, "months");
  if (monthsDifference) return `${monthsDifference} ماه پیش`;

  const daysDifference = currentDate.diff(enteredDate, "days");
  if (daysDifference == 0) return "امروز";
  return `${daysDifference} روز پیش`;
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const isoDateString = `${year}-${month}-${day}T00:00:00.000Z`;
  return isoDateString;
};

const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
};

const setStorageValue = (value) => {
  localStorage.setItem("BOOKMARKS", JSON.stringify(value));
};

export {
  shortenDescription,
  convertDate,
  formatDate,
  getStorageValue,
  setStorageValue,
};
