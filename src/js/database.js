import { getPath, getInfo, getPathWithId } from "./utils";

export async function getProfile() {
  const path = getPath("profile");
  console.log(path);
  const response = await getInfo(path);
  console.log(response);
  return response.data;
}

export async function getHighline() {
  const path = getPath("highline");
  console.log(path);
  const response = await getInfo(path);
  console.log(response);
  return response.data;
}

export async function getCards(id) {
  const path = getPathWithId(id, "card");
  console.log(path);
  const response = await getInfo(path);
  console.log(response);
  return response.data;
}

export async function getMessage(id) {
  const path = getPathWithId(id, "message");
  console.log(path);
  const response = await getInfo(path);
  console.log(response);
  return response.data;
}

export async function getRequest(id) {
  const path = getPathWithId(id, "request");
  console.log(path);
  const response = await getInfo(path);
  console.log(response);
  return response.data;
}

export const profile = await getProfile();
export const highline = await getHighline();
export const card = await getCards();
export const message = await getMessage();
export const request = await getRequest();
