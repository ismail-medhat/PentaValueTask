// useUploadImage.ts

import React, { useState, useEffect, useRef } from "react";
import { Platform, AppState } from "react-native";
import { request, RESULTS, PERMISSIONS } from "react-native-permissions";
import { useDispatch } from "react-redux";
import { setContactGranted } from "store/slices/contactSlice";

const useContactPermission = () => {
  const dispatch = useDispatch();
  const isIOS = Platform.OS === "ios";

  const askContactPermissions = () => {
    const persmission = isIOS
      ? PERMISSIONS.IOS.CONTACTS
      : PERMISSIONS.ANDROID.READ_CONTACTS;
    request(persmission)
      .then((result) => {
        console.log("Persimssion CONTACT Req : ", result);
        if (result === RESULTS.GRANTED) {
          dispatch(setContactGranted(true));
          console.log("Persimssion CONTACT Req Successfully Grannted ");
        } else if (result === RESULTS.DENIED) {
          console.log("Persimssion CONTACT Denied ");
          dispatch(setContactGranted(false));
        } else if (result === RESULTS.BLOCKED) {
          console.log("Persimssion CONTACT Blocked ");
          dispatch(setContactGranted(false));
        }
      })
      .catch((err) => {
        console.log("Persimssion CONTACT Req Error : ", err);
      });
  };

  return { askContactPermissions };
};

export default useContactPermission;
