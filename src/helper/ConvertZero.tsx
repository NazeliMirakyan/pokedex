export const convertZero = (id: number) => {
  return id >= 100 ? id : id < 10 ? `#00${id}` : `#0${id}`;
};
