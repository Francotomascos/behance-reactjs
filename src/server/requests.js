import { useEffect, useState } from "react";

export const get = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};