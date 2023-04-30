function getContentRangeHeaderValue(headerValue) {
  if (!headerValue) {
    return [];
  }

  const parts = headerValue.split(' ');
  const resource = parts[0];
  const rangeAndCount = parts[1].split('/');
  const offsetLimit = rangeAndCount[0].split('-');
  const count = Number(rangeAndCount[1]);
  const offset = offsetLimit[0];
  const limit = offsetLimit[1];

  return { resource, offset, limit, count }
}

export {
  getContentRangeHeaderValue,
};