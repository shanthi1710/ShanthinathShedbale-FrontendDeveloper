import { INDIANMENU, FILTERWITHAREA_URL, FINDWITHID_URL } from "./constants";

export const fetchIndianMenu = async () => {
  const response = await fetch(INDIANMENU);
  return response.json();
};

export const fetchFilteredMenu = async (filter) => {
  const response = await fetch(`${FILTERWITHAREA_URL}${filter}`);
  return response.json();
};

export const fetchMealDetails = async (itemId) => {
  const response = await fetch(`${FINDWITHID_URL}${itemId}`);
  return response.json();
}

