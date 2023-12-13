// useUploadImage.ts

import React, { useState, useEffect, useRef } from "react";
import { Platform } from "react-native";
import { request, RESULTS, PERMISSIONS } from "react-native-permissions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { setContactGranted, setDeviceContact } from "store/slices/contactSlice";
import Contacts from "react-native-contacts";

const useFetchContacts = () => {
  const [contactLoading, setContactLoading] = useState(false);
  const { deviceContacts, contactGranted } = useSelector(
    (state: RootState) => state.contact
  );
  const dispatch = useDispatch();

  const fetchContacts = async () => {
    if (contactGranted) {
      setContactLoading(true);
      Contacts.getAll()
        .then(async (contacts) => {
          console.log("My Contacts: " + JSON.stringify(contacts[0]));
          await dispatch(setDeviceContact(contacts));
          setContactLoading(false);
        })
        .catch((error) => {
          setContactLoading(false);
          console.error("contact loading error :: ", error);
        });
    }
  };

  return { fetchContacts, contactLoading };
};

export default useFetchContacts;
