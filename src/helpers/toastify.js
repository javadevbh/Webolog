import { toast } from "react-toastify";
const notify = (type, message) => {
  toast[type](message, {
    position: "top-center",
  });
};

export default notify;
