import React from "react";
import { View, Text, FlatList, Pressable, Image, Linking } from "react-native";
import styles from "./styles";
import { ScreenContainer } from "components";
import { RootState } from "store";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Colors, Images, ScaleWidth } from "common";
import { Contact } from "types/ContactInterface";
import { setFavoriteContacts } from "store/slices/contactSlice";
import useToast from "hooks/useToast";
const FavoriteContacts: React.FC = () => {
  const { favoriteContacts } = useSelector((state: RootState) => state.contact);
  const dispatch = useDispatch();
  const { showSuccessToast } = useToast();

  const openDialer = (phoneNumber: string) => {
    const dialerUrl = `tel:${phoneNumber}`;
    Linking.openURL(dialerUrl);
  };

  const onLikeClick = (item: Contact) => {
    const newFavoriteContacts = favoriteContacts.filter(
      (contact: Contact) => contact?.recordID !== item?.recordID
    );
    dispatch(setFavoriteContacts(newFavoriteContacts));
    showSuccessToast(
      `Phone Number ${item?.phoneNumbers[0]?.number}`,
      `Removed From favorites successfully`
    );
  };

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
            <Pressable onPress={() => onLikeClick(item)}>
              <AntDesign name={"heart"} color={Colors.primary} size={25} />
            </Pressable>
            <Pressable
              onPress={() => openDialer(item?.phoneNumbers[0]?.number)}
            >
              <Icon name={"phone"} color={Colors.primary} size={30} />
            </Pressable>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScreenContainer style={styles.container}>
      {favoriteContacts?.length == 0 ? (
        <View style={styles.emptyBox}>
          <Image source={Images.contactImg} style={styles.emptyContactImg} />
          <Text style={styles.contactName}>
            {"There is no available Favorite Contacts !"}
          </Text>
        </View>
      ) : (
        <FlatList
          data={favoriteContacts}
          renderItem={renderContactItems}
          keyExtractor={(item, index) => item?.recordID}
          showsVerticalScrollIndicator={true}
        />
      )}
    </ScreenContainer>
  );
};

export default FavoriteContacts;
