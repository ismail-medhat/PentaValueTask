// useUploadImage.ts

import React, { useState, useEffect, useRef } from "react";
import { Platform, AppState } from "react-native";
import { request, RESULTS, PERMISSIONS } from "react-native-permissions";

const useContactPermission = () => {
  const [contactGranted, setContactGranted] = useState(false);
  const [contactDenied, setContactDenied] = useState(false);

  const appState = useRef(AppState.currentState);
  const isIOS = Platform.OS === "ios";

  useEffect(() => {
    askContactPermissions();
  }, []);

  const askContactPermissions = () => {
    const persmission = isIOS
      ? PERMISSIONS.IOS.CONTACTS
      : PERMISSIONS.ANDROID.READ_CONTACTS;
    request(persmission)
      .then((result) => {
        console.log("Persimssion CONTACT Req : ", result);
        if (result === RESULTS.GRANTED) {
          setContactGranted(true);
          console.log("Persimssion CONTACT Req Successfully Grannted ");
        } else if (result === RESULTS.DENIED) {
          console.log("Persimssion CONTACT Denied ");
          setContactDenied(true);
          setContactGranted(false);
        } else if (result === RESULTS.BLOCKED) {
          console.log("Persimssion CONTACT Blocked ");
          setContactDenied(false);
          setContactGranted(false);
        }
      })
      .catch((err) => {
        console.log("Persimssion CONTACT Req Error : ", err);
      });
  };

  return { contactGranted, askContactPermissions };
};

export default useContactPermission;
