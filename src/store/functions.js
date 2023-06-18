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

    if (fieldName === 'language') {
      metaItem.level = recordDataList[`${fieldName}_level`];
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

export function getVacancyMetaItemsList(metaDataList, dataUIlist, showType, render) {
  const itemList = [];

  for (let key in metaDataList) {
    const metaItem = metaDataList[key];

    if (!metaItem.name) {
      continue;
    }

    const uiProps = dataUIlist[key] ?? null;

    if (!uiProps) {
      continue;
    }

    if (!uiProps.show.includes(showType)) {
      continue;
    }

    const tableName = key;
    const tableUiName = uiProps.name;
    const tableValue = metaItem;
    const recordLevel = metaItem.level ?? null; // for language add level
    const recordName = recordLevel ? `${tableValue.name} ${recordLevel}` : tableValue.name;
    const recordId = tableValue.id;
    const recordSlug = strToSlug(recordName);
    const recordIcon = uiProps.icon;

    const renderDataObj = { tableName, tableUiName, tableValue, recordName, recordId, recordSlug, recordIcon };
    const item = render(renderDataObj);

    itemList.push(item);
  }

  return itemList;
}

export const sanitizedText = (htmlString) => {
	const div = document.createElement('div');

	div.innerHTML = htmlString;
	return div.innerText;
}