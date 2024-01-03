export const url = "https://62efc7d557311485d128298d.mockapi.io";

const date = new Date();
export const currentMonth = date.toLocaleString("default", { month: "long" });

export const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function findDate(month: string, day: number) {
  console.log(month, day);
}

export const getDatesData = async () => {
  const resp = await fetch(`${url}/months`);
  const data = await resp.json();
  return data;
};
