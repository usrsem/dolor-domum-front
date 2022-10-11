import axios from "axios";

const BOT_TOKEN = "5692800758:AAG12uhU0N8yhPCi4Hqf1fDHNxKbFUr2NAo";
const adminsIds = ["209493779"];

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

const sendMessageApi = async (id, text) => {
  await axios.post(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${id}&text=${text}`
  );
};

const sendMessage = async (message) => {
  const text = formatMessage(message);
  for (let id of adminsIds) {
    await sendMessageApi(id, text);
  }
};

const api = {
  sendMessage,
};

export default api;
