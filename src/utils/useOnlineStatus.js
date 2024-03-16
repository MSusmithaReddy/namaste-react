
import { useState } from "react";

// Creating custom hook
export const useOnlineStatus = () => {
  const [isOnline, checkIfOnline] = useState(true);
  addEventListener("online", (event) => {
    checkIfOnline(true);
  });

  addEventListener("offline", (event) => {
    checkIfOnline(false);
  });
  return isOnline;
};
