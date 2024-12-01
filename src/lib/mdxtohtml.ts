import showdown from "showdown";

const convertToHTML = (mdx: string) => {
  const converter = new showdown.converter();
  return converter.makeHtml(mdx);
};

export { convertToHTML };
