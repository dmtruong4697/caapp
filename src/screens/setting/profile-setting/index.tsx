import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, Linking, ScrollView, Modal } from 'react-native'
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
import LoadingOverlay from '../../../components/loading-overlay';
import Button from '../../../components/button';
import LanguageSettingItem from '../../../components/language-setting-item';
import i18n from '../../../i18n/i18n';
import TwoStatusButton from '../../../components/2-status-button';
import { Controller, useForm } from 'react-hook-form';
import { UpdateProfileInfoRequest } from '../../../models/profile-request/update-profile-info-request';
import { updateProfileInfoRequest } from '../../../store/actions/profile/update-profile-info';
import { checkDuplicateHashtagNameRequest, resetCheckDuplicateHashtagNameResult } from '../../../store/actions/profile/check-duplicate-hashtag-name';
import { getLanguageListRequest } from '../../../store/actions/constant-data/get-language-list';
import InfoInputTextField from '../../../components/info-input-text-field';
import { regex } from '../../../utils/vaidate/regex';
import InfoInputDatePicker from '../../../components/info-input-date-picker';

interface IProps {}

const ProfileSettingScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const profileState = useSelector((state: RootState) => state.profile)
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        getValues,
        formState: { errors },
    } = useForm();

    const languageListState = useSelector((state: RootState) => state.languageList);
    const checkDuplicateHashtagNameState = useSelector((state: RootState) => state.checkDuplicateHashtagName);
    const updateProfileInfoState = useSelector((state: RootState) => state.updateProfileInfo);

    const [selectedGender, setSelectedGender] = useState<string | null>(profileState.profile?.gender || null);
    const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());

    const onSubmit = async(data: any)=> {
        setIsLoading(true);
        const { hashtagName, firstName, lastName, phoneNumber, profileDescription, jobName } = getValues();

        const req: UpdateProfileInfoRequest = {
            phone_number: phoneNumber,
            hashtag_name: hashtagName,
            first_name: firstName,
            middle_name: "",
            last_name: lastName,
            gender: selectedGender!,
            date_of_birth: dateOfBirth,
            country: "",
            language: "",
            profile_description: profileDescription,
            job_name: jobName,

            avatar_image: "",
            cover_image: "",
            time_zone: "",
        }
        dispatch(updateProfileInfoRequest(req));
        console.log(getValues());
    };

    const checkDuplicateHashtagName = () => {
        dispatch(checkDuplicateHashtagNameRequest(getValues().hashtagName))
    }

    useEffect(() => {
        dispatch(getLanguageListRequest());
    },[])

    useEffect(() => {
        if (updateProfileInfoState.success_flg == true) {
        setIsLoading(false);
        } else {
        setIsLoading(false);
        }
    }, [updateProfileInfoState.success_flg])

    const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);
    const toggleLanguageModal = () => {
        setIsLanguageModalVisible(!isLanguageModalVisible);
    };

  return (
    <View style={{flex: 1, backgroundColor: colors.White}}>
    <LoadingOverlay visiable={isLoading}/>
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <SolidHeader
          renderLeftButton={true}
          renderRightButton={false}
          leftButtonType='BACK'
          title={t('profile_setting_screen_title')}
          onPressLeftButton={() => {navigation.goBack()}}
        />
      </View>

      <ScrollView contentContainerStyle={styles.viewFormContainer}>
        {/* <Text style={styles.txtTitle}>{t('first_info_input_screen_title')}</Text> */}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InfoInputTextField
                title={t('common_hashtag_name')}
                placeHolder={t('placeholder_hashtag_name')}
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                isCheck={checkDuplicateHashtagNameState.isAvailableHashtagName}
                onEndEditing={checkDuplicateHashtagName}
                renderIsCheck
                onFocus={() => {dispatch(resetCheckDuplicateHashtagNameResult())}}
                defaultValue={profileState.profile?.hashtag_name}
            />
            )}
            name='hashtagName'
            rules={{
                required: t('validate_hashtag_name_required'),
            }}
        />
        {errors.hashtagName && <Text style={styles.txtError}>{errors.hashtagName.message?.toString()}</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InfoInputTextField
                title={t('common_first_name')}
                placeHolder={t('placeholder_first_name')}
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                defaultValue={profileState.profile?.first_name}
            />
            )}
            name='firstName'
            rules={{
                required: t('validate_first_name_required'),
                pattern: {
                  value: regex.CommonName, 
                  message: t('validate_first_name_invalid'),
              },
            }}
        />
        {errors.firstName && <Text style={styles.txtError}>{errors.firstName.message?.toString()}</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InfoInputTextField
                title={t('common_last_name')}
                placeHolder={t('placeholder_last_name')}
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                defaultValue={profileState.profile?.last_name}
            />
            )}
            name='lastName'
            rules={{
              required: t('validate_last_name_required'),
              pattern: {
                value: regex.CommonName, 
                message: t('validate_last_name_invalid'),
            },
          }}
        />
        {errors.lastName && <Text style={styles.txtError}>{errors.lastName.message?.toString()}</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InfoInputTextField
                title={t('common_phone_number')}
                placeHolder={t('placeholder_phone_number')}
                inputMode='numeric'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                defaultValue={profileState.profile?.phone_number}
            />
            )}
            name='phoneNumber'
            rules={{
              // required: 'Phone number is required.',
              pattern: {
                value: regex.VietNamPhoneNumber, 
                message: t('validate_phone_number_invalid'),
            },
          }}
        />
        {errors.phoneNumber && <Text style={styles.txtError}>{errors.phoneNumber.message?.toString()}</Text>}

        <InfoInputDatePicker
          title={t('common_date_of_birth')}
          date={dateOfBirth}
          onPickedDate={(date: Date) => {
            setDateOfBirth(date);
          }}
        />

        <View style={styles.viewGenderSelectContainer}>
          {/* male */}
          <TouchableOpacity
            style={[
              styles.viewGenderSelect, 
              {
                borderColor: (selectedGender == "0")? colors.DarkColor:colors.GrayBorder,
                backgroundColor: (selectedGender == "0")? colors.LightColor:colors.White,
              },
            ]}
            onPress={() => {setSelectedGender("0")}}
          >
            <Text style={styles.txtGenderSelect}>🙋🏻‍♂️ {t('common_male')}</Text>
          </TouchableOpacity>

          {/* female */}
          <TouchableOpacity
            style={[
              styles.viewGenderSelect, 
              {
                borderColor: (selectedGender == "1")? colors.DarkColor:colors.GrayBorder,
                backgroundColor: (selectedGender == "1")? colors.LightColor:colors.White,
              },
            ]}
            onPress={() => {setSelectedGender("1")}}
          >
            <Text style={styles.txtGenderSelect}>🙋🏻‍♀️ {t('common_female')}</Text>
          </TouchableOpacity>

          {/* other */}
          <TouchableOpacity
            style={[
              styles.viewGenderSelect, 
              {
                borderColor: (selectedGender == "2")? colors.DarkColor:colors.GrayBorder,
                backgroundColor: (selectedGender == "2")? colors.LightColor:colors.White,
              },
            ]}
            onPress={() => {setSelectedGender("2")}}
          >
            <Text style={styles.txtGenderSelect}>🤨 {t('common_other')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewButtonGroup}>
          <TwoStatusButton
              title='NEXT'
              onPress={handleSubmit(onSubmit)}
              disabled={(selectedGender == null)}
          />
        </View>

      </ScrollView>

    </SafeAreaView>
        <Modal
            visible={isLanguageModalVisible}
            transparent
            animationType="fade"
            onRequestClose={toggleLanguageModal} 
        >
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                activeOpacity={1}
                onPressOut={toggleLanguageModal}
            >
            <View style={styles.viewModal}>

            </View>
            </TouchableOpacity>
        </Modal>
    </View>
  )
}

export default ProfileSettingScreen    