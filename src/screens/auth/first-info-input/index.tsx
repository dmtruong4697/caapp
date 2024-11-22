import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
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

    useEffect(() => {
      dispatch(getLanguageListRequest());
    },[])

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewHeader}>
        <SolidHeader
          renderLeftButton={true}
          renderRightButton={false}
          leftButtonType='BACK'
          title=''
          onPressLeftButton={() => {navigation.goBack()}}
        />
      </View>

      <View style={styles.viewFormContainer}>
        <Text style={styles.txtTitle}>Create your account</Text>

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title='Hashtag Name'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
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
            <InputField
                title='First Name'
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
            <InputField
                title='Last Name'
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
      </View>
    </SafeAreaView>
  )
}

export default FirstInfoInputScreen    