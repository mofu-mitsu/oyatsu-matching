export const sendResultToGAS = async (data: any) => {
  const GAS_WEB_APP_URL = import.meta.env.VITE_GAS_URL || 'https://script.google.com/macros/s/AKfycbwAxi8BKAIJVZIM_Sl6m2z5sPv9oYhY1yruDhT-PqKfYcfIVAZT-ooqjHhJ5ELQUcmALQ/exec';

  if (!GAS_WEB_APP_URL) {
    console.log('GAS_WEB_APP_URL is not set. Skipping send to GAS.');
    return;
  }

  try {
    const response = await fetch(GAS_WEB_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'no-cors' // GASの場合、CORSエラーを回避するために no-cors を使うことが多い
    });
    
    // no-cors の場合レスポンスの中身は読めないが、送信は完了する
    console.log('Successfully sent data to GAS (no-cors mode).');
  } catch (error) {
    console.error('Failed to send data to GAS:', error);
  }
};
