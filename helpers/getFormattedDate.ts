export const getFormattedDate = (fecha: string): string => {
  const date = new Date(fecha);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("es-ES", options).replace(" de ", " de ");
};
