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
    <View style={{flex: 1}}>
      <CustomStatusBar backgroundColor={colors.PrimaryColor}/>
      <ScrollView 
        style={styles.viewContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={pullToRefreshFunction }
          />}
      >
        <View style={styles.viewListContainer}>
          <ListHeader
            title='Received Request'
            onPressSeeAll={() => {
              // console.log(friendRequestState.received_requests!);
            }}
            renderSeeAll
          />
          <View style={styles.viewFlatListContainer}>
            {friendRequestState.received_requests && 
              <FlatList
                data={friendRequestState.received_requests}
                // keyExtractor={item => item.Id.toString()}
                scrollEnabled={false}
                renderItem={({item}) => (
                  <ReceivedRequestItem userInfo={item.user}/>
                )}
                contentContainerStyle={{gap: 10,}}
              />
            }
          </View>
        </View>

        <View style={styles.viewListContainer}>
          <ListHeader
            title='Suggest User'
            onPressSeeAll={() => {

            }}
            renderSeeAll
          />
          <View style={styles.viewFlatListContainer}>
            {friendState.suggest_users && 
              <FlatList
                data={friendState.suggest_users}
                // keyExtractor={item => item.Id.toString()}
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
    </View>
  )
}

export default ReceivedRequestScreen    