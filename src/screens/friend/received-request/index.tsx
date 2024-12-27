import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SearchUserItem from '../../../components/search-user-item';
import { useDispatch, useSelector } from 'react-redux';
import { getSuggestUserRequest } from '../../../store/actions/friend/friend';
import { RootState } from '../../../store';
import ListHeader from '../../../components/list-header';
import SuggestUserItem from '../../../components/suggest-user-item';
import { getAllReceivedRequestRequest } from '../../../store/actions/friend/friend-request';
import ReceivedRequestItem from '../../../components/received-request-item';
import CustomStatusBar from '../../../components/custom-status-bar';
import { colors } from '../../../styles/colors';

interface IProps {}

const ReceivedRequestScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const friendState = useSelector((state: RootState) => state.friend);
    const friendRequestState = useSelector((state: RootState) => state.friendRequest);

    // refresh handle
    const [refreshing,setRefreshing] = useState(false);
    const pullToRefreshFunction = () => {
        setRefreshing(true)
        dispatch(getAllReceivedRequestRequest())
        dispatch(getSuggestUserRequest());
        setRefreshing(false)
    }

    useEffect(() => {
      dispatch(getAllReceivedRequestRequest())
      dispatch(getSuggestUserRequest());
    },[])

    useEffect(() => {
      if (friendState.error_suggest_users) {
      }
      console.log(friendState.suggest_users);
    }, [friendState.suggest_users, friendState.error_suggest_users]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <CustomStatusBar backgroundColor={colors.PrimaryColor}/> */}
      <ScrollView 
        contentContainerStyle={styles.viewContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={pullToRefreshFunction }
          />}
      >
        <View style={styles.viewListContainer}>
          <ListHeader
            title={t('received_request_screen_received_request')}
            onPressSeeAll={() => {
              // console.log(friendRequestState.received_requests!);
              console.log(friendRequestState.received_requests?.requests);
            }}
            renderSeeAll={friendRequestState.received_requests?.requests.length > 0}
          />
          <View style={styles.viewFlatListContainer}>
            {friendRequestState.received_requests?.requests.length > 0 && 
              <FlatList
                data={friendRequestState.received_requests.requests}
                keyExtractor={item => item.user.id.toString()}
                extraData={friendRequestState.received_requests}
                scrollEnabled={false}
                renderItem={({item}) => (
                  <ReceivedRequestItem userInfo={item.user}/>
                )}
                contentContainerStyle={{gap: 10,}}
              />
            }
            {
              friendRequestState.received_requests?.requests.length <= 0 &&
              <View style={styles.viewEmpty}>
                <Image style={styles.imgEmpty} source={require('../../../assets/illustrations/empty-box-256px.png')}/>
                <Text style={styles.txtEmpty}>🤔 {t('received_request_screen_no_request')} 😊</Text>
              </View>
            }
          </View>
        </View>

        <View style={styles.viewListContainer}>
          <ListHeader
            title={t('received_request_screen_suggest_user')}
            onPressSeeAll={() => {

            }}
            renderSeeAll
          />
          <View style={styles.viewFlatListContainer}>
            {friendState.suggest_users && 
              <FlatList
                data={friendState.suggest_users}
                keyExtractor={item => item.id.toString()}
                extraData={friendRequestState.received_requests}
                scrollEnabled={false}
                renderItem={({item}) => (
                  <SuggestUserItem userInfo={item}/>
                )}
                contentContainerStyle={{gap: 10,}}
              />
            }
          </View>
        </View>
      </ScrollView >
    </SafeAreaView>
  )
}

export default ReceivedRequestScreen    