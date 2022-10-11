import axios from "axios";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const adminsIds = process.env.ADMIN_IDS.split(",");

const formatMessage = (message) => {
  return (
    `Fullname: ${message.fullname}\n` +
    `E-mail: ${message.email}\n` +
    `Phone: ${message.phone}\n` +
    `Message: ${message.text}`
  )
    .replace(" ", "%20")
    .replace("\n", "%0A");
};

const sendMessageApi = (id, text) => {
  axios.post(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${id}&text=${text}`
  );
};

const sendMessage = (message) => {
  const text = formatMessage(message);
  adminsIds.forEach((id) => sendMessageApi(id, text));
};

const api = {
  sendMessage,
};

export default api;
