import { View, Text, TouchableOpacity, Image, useWindowDimensions, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { ParamListBase, useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store';
import { getAllMyFriendsRequest } from '../../../../../store/actions/friend/friend';
import FriendListItem from '../../../../../components/friend-list-item';
interface IProps {}

const FriendTab: React.FC<IProps> = () => {

    const layout = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const friendState = useSelector((state: RootState) => state.friend);

    // refresh handle
    const [refreshing,setRefreshing] = useState(false);
    const pullToRefreshFunction = () => {
        setRefreshing(true)
        dispatch(getAllMyFriendsRequest())
        setRefreshing(false)
    }

    useEffect(() => {
      dispatch(getAllMyFriendsRequest())
    },[])

    useEffect(() => {
      if (friendState.error_get_my_friend) {
      }
      console.log(friendState.my_friends);
    }, [friendState.my_friends, friendState.error_get_my_friend]);

  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewFlatListContainer}>
        {friendState.my_friends && 
          <FlatList
            data={friendState.my_friends}
            // keyExtractor={item => item.Id.toString()}
            scrollEnabled={false}
            renderItem={({item}) => (
              <FriendListItem userInfo={item}/>
            )}
            contentContainerStyle={{gap: 10,}}
          />
        }
      </View>
    </View>
  )
}

export default FriendTab    