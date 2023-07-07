import { withLifecycleCallbacks } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

// const restUrl = 'https://api.liftron.com.ua';
const restUrl = 'http://rest-api-simple.local';

const myDataProvider = withLifecycleCallbacks(simpleRestProvider(restUrl), [
  {
    resource: 'vacancy',
    beforeUpdate: async (params) => {
      const newPictures = params.data.thumbnails;
      const src = await convertFileToBase64(newPictures);

      return {
        id: params.id,
        data: {
          ...params.data,
          thumbnails: {
            src,
            title: params.data.thumbnails.title
          }
        },
      }
    }
  },
  {
    resource: 'vacancy',
    beforeCreate: async (params) => {
      const newPictures = params.data.thumbnails;
      const src = await convertFileToBase64(newPictures);

      return {
        data: {
          ...params.data,
          thumbnails: {
            src,
            title: params.data.thumbnails.title
          }
        },
      }
    }
  }
]);

const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (!file.rawFile) {
      resolve(file.src);
    }

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export default myDataProvider;