import React from "react";
import TimeAgo from "timeago-react";

export const dateToTimeAgo = (dateString) => {
  return <TimeAgo datetime={dateString} />;
};

export const dateToDDMMYYY = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
