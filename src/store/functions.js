export function getContentRangeHeaderValue(headerValue) {
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

export function getMetaDataList(recordDataList) {
  const result = {};

  for (let key in recordDataList) {
    if (!key.includes('_')) {
      continue;
    }

    const fieldParts = key.split('_');
    const fieldName = fieldParts[0];

    if (result[fieldName]) {
      continue;
    }

    const metaItem = {
      id: recordDataList[`${fieldName}_id`],
      name: recordDataList[`${fieldName}_name`],
    }

    result[fieldName] = metaItem;
  }

  return result;
}

export function strToSlug(str) {
  if (!str) {
    return '';
  }
  
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();
  
  // remove accents, swap ñ for n, etc
  let from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  let to   = "aaaaeeeeiiiioooouuuunc------";
  for (let i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
  .replace(/[^а-яa-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  
  return str;
}