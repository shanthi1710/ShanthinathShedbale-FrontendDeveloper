import { INDIANMENU, FILTERWITHAREA_URL } from "./constants";

export const fetchIndianMenu = async () => {
  const response = await fetch(INDIANMENU);
  return response.json();
};

export const fetchFilteredMenu = async (filter) => {
  const response = await fetch(`${FILTERWITHAREA_URL}${filter}`);
  return response.json();
};

