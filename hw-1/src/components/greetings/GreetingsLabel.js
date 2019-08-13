import { daysToDate } from "../../services/date";
import React from "react";

function getCorrectUserName(name) {
  return name || "Anonymous";
}

function getTextByBirthday(name, date) {
  if (!date) {
    return `Hello, ${name}!`;
  }

  const days = daysToDate(date);
  const isBirthdayToday = days === 0;

  return isBirthdayToday
    ? `Happy Birthday, ${name}!`
    : `Hello, ${name}! It's ${days} days left until your birthday`;
}

export default props => {
  const { name, birthday } = props.dateAndName;
  const userName = getCorrectUserName(name);
  const label = getTextByBirthday(userName, birthday);
  return <span>{label}</span>;
};
