import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SolidHeader from '../../../components/solid-header';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/input-field';
import { colors } from '../../../styles/colors';
import Button from '../../../components/button';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface IProps {}

const SignUpScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();

    const {
      register,
      handleSubmit,
      control,
      getValues,
      formState: { errors },
    } = useForm();
  
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = async(data: any)=> {
      setIsLoading(true);
      // await signUp(navigation, getValues().email, getValues().password);
      setIsLoading(false);
      console.log(getValues());
    };
  
  const [isCheck, setIsCheck] = useState(false);

  return (
    <SafeAreaView style={styles.viewContainer}>
      <SolidHeader
        renderLeftButton={true}
        renderRightButton={false}
        leftButtonType='CANCEL'
        title=''
        onPressLeftButton={() => {navigation.goBack()}}
      />

      <View style={styles.viewFormContainer}>
        <Text style={styles.txtTitle}>Create your account</Text>

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title='First Name'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                // isPassword
            />
            )}
            name='firstName'
            rules={{
                required: true,
            }}
        />
        {errors.firstName && <Text style={styles.txtError}>First Name is required.</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title='Last Name'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                // isPassword
            />
            )}
            name='lastName'
            rules={{
                required: true,
            }}
        />
        {errors.lastName && <Text style={styles.txtError}>Last Name is required.</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title='Email'
                inputMode='email'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                // isPassword
            />
            )}
            name='email'
            rules={{
                required: true,
            }}
        />
        {errors.email && <Text style={styles.txtError}>Email is required.</Text>}

        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
            <InputField
                title='Password'
                inputMode='text'
                value={value}
                onChangeText={value => onChange(value)}
                onBlur={onBlur}
                isPassword
            />
            )}
            name='password'
            rules={{
                required: true,
            }}
        />
        {errors.password && <Text style={styles.txtError}>Password is required.</Text>}
      </View>

      <View style={styles.viewTerm}>
          <TouchableOpacity
              style={[styles.viewCheck, {
                  backgroundColor: (isCheck)? colors.PrimaryColor: colors.White,
                  borderColor: (isCheck)? colors.PrimaryColor: colors.GrayBorder,
              }]}
              onPress={() => {
                  setIsCheck(!isCheck);
              }}
          >
              <FontAwesomeIcon icon={faCheck} style={styles.imgCheck} size={18} color={colors.White}/>
          </TouchableOpacity>

          <Text style={styles.txtTerm}>I certify that I am 18 years of age or older, and I agree to the <Text style={[styles.txtTerm, {color: colors.PrimaryColor}]}>User Agreement</Text> and <Text style={[styles.txtTerm, {color: colors.PrimaryColor}]}>Privacy Policy</Text></Text>
      </View>

      <View style={styles.viewButtonGroup}>
        <Button
            title='Start'
            type='default'
            onPress={handleSubmit(onSubmit)}
            // onPress={() => {
            //     navigation.navigate('VerifyEmail');
            // }}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen    