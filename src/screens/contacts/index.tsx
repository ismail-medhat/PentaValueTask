import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import styles from "./styles";
import { ScreenContainer, SearchInput } from "components";
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from "common";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import useFetchContacts from "hooks/useFetchContacts";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { setFavoriteContacts } from "store/slices/contactSlice";
import useToast from "hooks/useToast";
import { Contact } from "types/ContactInterface";

const ContactsScreen: React.FC = () => {
  const [selectedContacts, setSelectedContacts] = useState<Contact[]>([]);
  const [filterContacts, setFilterContacts] = useState<Contact[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");
  const { deviceContacts, favoriteContacts } = useSelector(
    (state: RootState) => state.contact
  );
  const { fetchContacts, contactLoading } = useFetchContacts();
  const { showSuccessToast } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (deviceContacts.length == 0) {
      fetchContacts();
    }
  }, [deviceContacts]);

  useEffect(() => {
    if (searchKey.length > 0) {
      const contactsFilter = deviceContacts?.filter(
        (contact: Contact) =>
          contact?.displayName
            ?.toLocaleLowerCase()
            .includes(searchKey?.toLocaleLowerCase()) ||
          contact?.phoneNumbers[0]?.number.includes(searchKey)
      );
      console.log("contactsFilter :: ", contactsFilter);
      setFilterContacts(contactsFilter);
      setSelectedContacts([]);
    } else {
      setSelectedContacts([]);
    }
  }, [searchKey]);

  const onLikeClick = (item: Contact) => {
    const findContactIndex = favoriteContacts?.findIndex(
      (contact: Contact) => contact?.recordID == item.recordID
    );
    if (findContactIndex == -1) {
      // contact not exist
      dispatch(setFavoriteContacts([...favoriteContacts, item]));
      showSuccessToast(
        `Phone Number ${item?.phoneNumbers[0]?.number}`,
        `Added to favorites successfully`
      );
    } else {
      // contact Already exist
      const newFavoriteContacts = favoriteContacts.filter(
        (contact: Contact) => contact?.recordID !== item?.recordID
      );
      dispatch(setFavoriteContacts(newFavoriteContacts));
      showSuccessToast(
        `Phone Number ${item?.phoneNumbers[0]?.number}`,
        `Removed From favorites successfully`
      );
    }
  };

  const renderLikeBtn = useCallback(
    (item: Contact) => {
      const findContactIndex = favoriteContacts?.findIndex(
        (contact: Contact) => contact?.recordID == item.recordID
      );
      return (
        <Pressable onPress={() => onLikeClick(item)}>
          <AntDesign
            name={findContactIndex == -1 ? "hearto" : "heart"}
            color={Colors.primary}
            size={25}
          />
        </Pressable>
      );
    },
    [deviceContacts, favoriteContacts]
  );

  const onCheckClick = (item: Contact) => {
    const findContactIndex = selectedContacts?.findIndex(
      (contact: Contact) => contact?.recordID == item.recordID
    );
    if (findContactIndex == -1) {
      // contact not exist
      setSelectedContacts([...selectedContacts, item]);
      showSuccessToast(`Phone Number UnSelected Successfully`);
    } else {
      // contact Already exist
      const newFavoriteContacts = selectedContacts.filter(
        (contact) => contact?.recordID !== item?.recordID
      );
      setSelectedContacts(newFavoriteContacts);
      showSuccessToast(`Phone Number Selected Successfully`);
    }
  };

  const renderCheckBtn = useCallback(
    (item: Contact) => {
      const findContactIndex = selectedContacts?.findIndex(
        (contact: Contact) => contact?.recordID == item.recordID
      );
      return (
        <Pressable onPress={() => onCheckClick(item)}>
          <Icon
            name={
              findContactIndex == -1
                ? "checkbox-blank-circle-outline"
                : "check-circle"
            }
            color={Colors.primary}
            size={30}
          />
        </Pressable>
      );
    },
    [deviceContacts, selectedContacts]
  );

  const renderContactItems = ({
    item,
    index,
  }: {
    item: Contact;
    index: number;
  }) => {
    return (
      <View style={styles.contactItem}>
        <Image source={Images.defaultContactImg} style={styles.contactImg} />
        <View style={styles.contactInfoBox}>
          <View style={{ width: ScaleWidth("50%") }}>
            <Text style={styles.contactName} numberOfLines={1}>
              {item?.displayName?.length > 0
                ? item?.displayName
                : "number without name"}
            </Text>
            <Text style={[styles.contactName, { paddingVertical: 5 }]}>
              {item?.phoneNumbers[0]?.number}
            </Text>
          </View>
          <View style={styles.contactActionBox}>
            {renderLikeBtn(item)}
            {renderCheckBtn(item)}
          </View>
        </View>
      </View>
    );
  };

  const renderFavoriteContact = ({ item }: { item: Contact }) => {
    return (
      <View style={styles.favoriteBox}>
        <Pressable onPress={() => onCheckClick(item)} style={styles.removeBtn}>
          <AntDesign name={"close"} color={Colors.white} size={20} />
        </Pressable>
        <Image source={Images.defaultContactImg} style={styles.contactImg} />
        <Text style={styles.contactName} numberOfLines={1}>
          {item?.displayName?.length > 0
            ? item?.displayName
            : "number without name"}
        </Text>
      </View>
    );
  };

  return (
    <ScreenContainer style={styles.container}>
      {contactLoading ? (
        <ActivityIndicator size={"small"} color={Colors.primary} />
      ) : (
        <>
          <SearchInput value={searchKey} setValue={setSearchKey} />
          <FlatList
            data={searchKey.length == 0 ? deviceContacts : filterContacts}
            renderItem={renderContactItems}
            keyExtractor={(item, index) => item?.recordID}
            showsVerticalScrollIndicator={true}
            ListHeaderComponent={
              <>
                <FlatList
                  horizontal
                  data={selectedContacts}
                  renderItem={renderFavoriteContact}
                  keyExtractor={(item, index) => item?.recordID}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            }
            ListHeaderComponentStyle={{
              marginVertical: 10,
              backgroundColor: Colors.lightPurple,
            }}
          />
        </>
      )}
    </ScreenContainer>
  );
};

export default ContactsScreen;
