import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import SearchUserItem from '../../../components/search-user-item';
import { useDispatch, useSelector } from 'react-redux';
import { getSuggestUserRequest } from '../../../store/actions/friend';
import { RootState } from '../../../store';
import ListHeader from '../../../components/list-header';
import SuggestUserItem from '../../../components/suggest-user-item';

interface IProps {}

const ReceivedRequestScreen: React.FC<IProps>  = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    // refresh handle
    const [refreshing,setRefreshing] = useState(false);
    const pullToRefreshFunction = () => {
        setRefreshing(true)
        dispatch(getSuggestUserRequest("123"));
        setRefreshing(false)
    }

    const friendState = useSelector((state: RootState) => state.friend);

    useEffect(() => {
      dispatch(getSuggestUserRequest("123"));
    },[])

    useEffect(() => {
      if (friendState.error_suggest_users) {
        // console.log(friendState.error)
      }
      console.log(friendState.suggest_users);
    }, [friendState.suggest_users, friendState.error_suggest_users]);

  return (
    <SafeAreaView style={{flex: 1}}>
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

            }}
            renderSeeAll
          />
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
    </SafeAreaView>
  )
}

export default ReceivedRequestScreen    