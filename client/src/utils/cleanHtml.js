import { sanitize } from "dompurify";

const cleanHTML = (html) => {
  return sanitize(html);
};

export default cleanHTML;
