import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SolidHeader from '../../../components/solid-header';
import { colors } from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { scale } from '../../../styles/scale';
import HashtagNameInputField from '../../../components/hashtag-name-input-field';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass, faQrcode, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { resetSearchByHashtagNameState, searchByHashtagNameRequest } from '../../../store/actions/search/search-by-hashtag-name';
import LoadingOverlay from '../../../components/loading-overlay';

interface IProps {}

const AddFriendScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const profileState = useSelector((state: RootState) => state.profile)
    const searchByHashtagNameState = useSelector((state: RootState) => state.searchByhashtagName)

    const [hashtagName, setHashtagName] = useState<string | null>(null)
    const [searchError, setSearchError] = useState<string | null>(null)

    const search = async() => {
      setIsLoading(true);
      dispatch(searchByHashtagNameRequest(hashtagName!));
    }

    const isFocused = useIsFocused()
    useEffect(() => {
      dispatch(resetSearchByHashtagNameState());
    },[isFocused])

    useEffect(() => {
      if (searchByHashtagNameState.is_found && searchByHashtagNameState.success_flg) {
        setIsLoading(false);
        navigation.navigate("UserProfile", {user: searchByHashtagNameState.user})
      } 

      if (searchByHashtagNameState.success_flg && !searchByHashtagNameState.is_found) {
        setIsLoading(false);
        setSearchError("User not found")
      }
    }, [searchByHashtagNameState])

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <LoadingOverlay visiable={isLoading}/>
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <SolidHeader
          renderLeftButton={true}
          renderRightButton={false}
          leftButtonType='CANCEL'
          title=''
          onPressLeftButton={() => {navigation.goBack()}}
        />
      </View>

      <View style={styles.viewName}>
        <Text style={styles.txtName}>{profileState.profile?.first_name} {profileState.profile?.middle_name} {profileState.profile?.last_name}</Text>
        <Text style={styles.txtHashtagName}>@{profileState.profile?.hashtag_name}</Text>
      </View>

      <View style={styles.viewQRCode}>
        <LinearGradient 
          style={styles.viewQRCodeBorder}  
          colors={[colors.LightColor, colors.PrimaryColor]} 
        >
          <QRCode
            value={profileState.profile?.hashtag_name}
            logo={{uri: profileState.profile?.avatar_image}}
            // logo={require('../../../assets/illustrations/empty-box-256px.png')}
            logoSize={scale(50)}
            logoBorderRadius={1000}
            logoBackgroundColor='transparent'
            size={scale(178)}
            backgroundColor={'transparent'}
          />
        </LinearGradient>
      </View>

      <View style={styles.viewGroup}>
        <View style={styles.viewGroupItem}>
          <View style={styles.viewHashtagNameInputContainer}>
            <HashtagNameInputField
              inputMode='text'
              onChangeText={value => setHashtagName(value)}
              onFocus={() => setSearchError(null)}
            />
          </View>

          <TouchableOpacity
            style={styles.btnSearch}
            disabled={hashtagName == null || hashtagName == ""}
            onPress={() => {
              search()
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size={24} color={(hashtagName == null || hashtagName == "")? colors.PlaceholderText:colors.Black}/>
          </TouchableOpacity>
        </View>
        {searchError && <Text style={styles.txtSearchError}>{searchError}</Text>}

        <TouchableOpacity 
          style={styles.btnGroupItem}
          onPress={() => {

          }}
        >
          <View style={styles.viewIcon}>
            <FontAwesomeIcon icon={faUserFriends} size={24} color={colors.DarkColor}/>
          </View>
          <View style={styles.viewButtonTitle}>
            <Text style={styles.txtButtonTitle}>{t('add_friend_screen_suggest_friend')}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnGroupItem}
          onPress={() => {
            navigation.navigate("QRScan");
          }}
        >
          <View style={styles.viewIcon}>
            <FontAwesomeIcon icon={faQrcode} size={24} color={colors.DarkColor}/>
          </View>
          <View style={styles.viewButtonTitle}>
          <Text style={styles.txtButtonTitle}>{t('add_friend_screen_scan_qr')}</Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
    </View>
  )
}

export default AddFriendScreen    