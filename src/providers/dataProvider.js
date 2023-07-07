import { withLifecycleCallbacks } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

// const restUrl = 'https://api.liftron.com.ua';
const restUrl = 'http://rest-api-simple.local';

const myDataProvider = withLifecycleCallbacks(simpleRestProvider(restUrl), [
  {
    resource: 'vacancy',
    beforeUpdate: (params, dataProvider) => {

      console.log(params);
      console.log(params.id);

      const newPictures = params.data.thumbnails;

      return convertFileToBase64(newPictures)
        .then(src =>
          dataProvider.update('vacancy', {
            id: params.id,
            data: {
              ...params.data,
              thumbnails: {
                src,
                title: params.data.thumbnails.title
              }
            },
          })
        );
    }
  }
]);

const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file.rawFile);
  });

export default myDataProvider;