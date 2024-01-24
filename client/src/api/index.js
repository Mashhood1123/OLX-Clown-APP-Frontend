import { BASE_URL } from "../constants";

const token = localStorage.getItem("token");
console.log(token);

export const createUser = async ({ username, password, email }) => {
  try {
    const response = await fetch(`${BASE_URL}/user/signup`, {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.log("ERROR:", error.message);
  }
};

export const authUser = async ({ password, email }) => {
  try {
    const response = await fetch(`${BASE_URL}/user/signin`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.log("ERROR:", error.message);
  }
};

export const createAd = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/ad/create`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return response.json();
  } catch (error) {
    console.log("ERROR:", error.message);
  }
};

export const fetchAllAds = async () => {
  const response = await fetch(`${BASE_URL}/ad/getAds`);
  return response.json();
};


export const updateTitleFunc = async (id, updatedTitle) => {
  const response = await fetch(`${BASE_URL}/ad/updateAds`, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      updatedTitle: updatedTitle,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }); //[]
  return response.json();
};

export const updateDescriptionFunc = async (id, updatedDescription) => {
  const response = await fetch(`${BASE_URL}/ad/updateAdsDesc`, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      updatedDescription: updatedDescription,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }); //[]
  return response.json();
};
