import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { getLanguageListRequest } from '../../../store/actions/constant-data/get-language-list';
import SolidHeader from '../../../components/solid-header';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/input-field';
import { regex } from '../../../utils/vaidate/regex';
import InfoInputTextField from '../../../components/info-input-text-field';
import { colors } from '../../../styles/colors';
import CustomStatusBar from '../../../components/custom-status-bar';
import InfoInputDatePicker from '../../../components/info-input-date-picker';
import Button from '../../../components/button';
import TwoStatusButton from '../../../components/2-status-button';
import { FirstUpdateProfileInfoRequest } from '../../../models/profile-request/first-update-profile-info-request';
import { firstUpdateProfileInfoRequest } from '../../../store/actions/profile/first-update-profile-info';
import { checkDuplicateHashtagNameRequest, resetCheckDuplicateHashtagNameResult } from '../../../store/actions/profile/check-duplicate-hashtag-name';

interface IProps {}

const FirstInfoInputScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();
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
    const firstUpdateProfileInfoState = useSelector((state: RootState) => state.firstUpdateProfileInfo);

    const [selectedGender, setSelectedGender] = useState<string | null>(null);
    const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());

    const onSubmit = async(data: any)=> {
      setIsLoading(true);
      const { hashtagName, firstName, lastName, phoneNumber } = getValues();

      const req: FirstUpdateProfileInfoRequest = {
        hashtag_name: hashtagName,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        gender: selectedGender!,
        date_of_birth: dateOfBirth,
        middle_name: "",
        country: "",
        language: "",
      }
      dispatch(firstUpdateProfileInfoRequest(req));
      setIsLoading(false);
      console.log(getValues());
    };

    const checkDuplicateHashtagName = () => {
      dispatch(checkDuplicateHashtagNameRequest(getValues().hashtagName))
    }

    useEffect(() => {
      dispatch(getLanguageListRequest());
    },[])

    useEffect(() => {
      if (firstUpdateProfileInfoState.success_flg == true) {
        navigation.navigate("Home");
      }
    }, [firstUpdateProfileInfoState.success_flg])

  return (
    <View style={styles.viewContainer}>
      <CustomStatusBar backgroundColor={colors.PrimaryColor}/>
      <View style={styles.viewScreenContainer}>
      <View style={styles.viewHeader}>
        <SolidHeader
          renderLeftButton={true}
          renderRightButton={false}
          leftButtonType='BACK'
          title=''
          onPressLeftButton={() => {navigation.goBack()}}
        />
      </View>

      <ScrollView contentContainerStyle={styles.viewFormContainer}>
        <Text style={styles.txtTitle}>Input profile info</Text>

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InfoInputTextField
                title='Hashtag Name'
                placeHolder='hashtag name'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                isCheck={checkDuplicateHashtagNameState.isAvailableHashtagName}
                onEndEditing={checkDuplicateHashtagName}
                renderIsCheck
                onFocus={() => {dispatch(resetCheckDuplicateHashtagNameResult())}}
            />
            )}
            name='hashtagName'
            rules={{
                required: 'Hashtag name is required.',
            }}
        />
        {errors.hashtagName && <Text style={styles.txtError}>{errors.hashtagName.message?.toString()}</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InfoInputTextField
                title='First Name'
                placeHolder='first name'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
            />
            )}
            name='firstName'
            rules={{
                required: 'First name is required.',
                pattern: {
                  value: regex.CommonName, 
                  message: 'Please enter a valid name',
              },
            }}
        />
        {errors.firstName && <Text style={styles.txtError}>{errors.firstName.message?.toString()}</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InfoInputTextField
                title='Last Name'
                placeHolder='last name'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
            />
            )}
            name='lastName'
            rules={{
              required: 'Last name is required.',
              pattern: {
                value: regex.CommonName, 
                message: 'Please enter a valid name',
            },
          }}
        />
        {errors.lastName && <Text style={styles.txtError}>{errors.lastName.message?.toString()}</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InfoInputTextField
                title='Phone Number'
                placeHolder='0123456789'
                inputMode='numeric'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
            />
            )}
            name='phoneNumber'
            rules={{
              // required: 'Phone number is required.',
              pattern: {
                value: regex.VietNamPhoneNumber, 
                message: 'Please enter a valid phone number',
            },
          }}
        />
        {errors.phoneNumber && <Text style={styles.txtError}>{errors.phoneNumber.message?.toString()}</Text>}

        <InfoInputDatePicker
          title='Date of Birth'
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
            <Text style={styles.txtGenderSelect}>🙋🏻‍♂️ Male</Text>
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
            <Text style={styles.txtGenderSelect}>🙋🏻‍♀️ Female</Text>
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
            <Text style={styles.txtGenderSelect}>🤨 Other</Text>
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
      </View>
    </View>
  )
}

export default FirstInfoInputScreen    