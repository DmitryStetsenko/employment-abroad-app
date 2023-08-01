const mailUrl = 'https://admin.liftron.com.ua/send-email.php';
const baseUrl = 'https://api.liftron.com.ua';
// const baseUrl = 'http://rest-api-simple.local';

export const urls = {
  vacancy: {
    base: `${baseUrl}/vacancy`,
  },
  filter: {
    all: `${baseUrl}/filter`,
  },
  mail: mailUrl,
};

// GPT
// export const gptApiKey = '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';
// export const gptApiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';