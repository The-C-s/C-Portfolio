const isUrl = require('is-valid-http-url');
const isImage = require('is-image');

export const parseDate = date => (
  date
    ? Intl.DateTimeFormat('en-AU', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }).format(Date.parse(date))
    : ""
);

export const getContentType = userContent => {

  if (userContent) {
    if (isUrl(userContent)) {
      return (isImage(userContent.split('?')[0])) ? 'image' : 'url';
    } else {
      return 'text';
    }
  }

  return null;
}
