const base64ToFile = async (
  base64: string,
  filename: string
): Promise<File> => {
  const base64Response = await fetch(base64);
  const blob = await base64Response.blob();
  const file = new File([blob], filename, { type: blob.type });

  return file;
};

export { base64ToFile };
