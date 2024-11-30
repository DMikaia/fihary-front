export const getStatusColor = (type: string) => {
  switch (type) {
    case "good":
      return "#A1D83B";
    case "bad":
      return "#FF3D00";
    default:
      return "#616161";
  }
};
