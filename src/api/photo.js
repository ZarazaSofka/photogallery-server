import axios from "axios";
import config from "../config";
const api = axios.create({
  baseURL: config.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const readPhotosData = async () => (await api.get("/photo")).data;
export const readPhoto = async (id) => (await api.get(`/photo/${id}`)).data;
export const readCompressedPhoto = async (id) =>
  (await api.get(`/photo/${id}/compressed`)).data;
export const createPhoto = async (photo) =>
  (await api.post("/photo", photo)).data;
export const updatePhoto = async (id, photo) =>
  (await api.put(`/photo/${id}`, photo)).data;
export const deletePhoto = async (id) =>
  (await api.delete(`/photo/${id}`)).data;