import { useRef } from "react";
import Toast from "react-native-toast-message";
import { ScaleHeight } from "common";

const useToast = () => {
  const showToast = (
    type: "success" | "error",
    position: "top" | "bottom",
    text1: string,
    text2?: string
  ) => {
    Toast.show({
      type,
      text1,
      text2,
      position,
      visibilityTime: 2000,
      topOffset: ScaleHeight(50),
      bottomOffset: ScaleHeight(50),
    });
  };

  const showSuccessToast = (
    text1: string,
    text2?: string,
    position: "top" | "bottom" = "top"
  ) => {
    showToast("success", position, text1, text2);
  };

  const showErrorToast = (
    text1: string,
    text2?: string,
    position: "top" | "bottom" = "top"
  ) => {
    showToast("error", position, text1, text2);
  };

  return {
    showSuccessToast,
    showErrorToast,
  };
};

export default useToast;
