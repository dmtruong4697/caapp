import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user-info/user-info';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    title?: string,
    renderSeeAll?: boolean,
    onPressSeeAll?: () => void,
}

const ListHeader: React.FC<IProps> = ({title, renderSeeAll, onPressSeeAll}) => {

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.txtTitle}>{title}</Text>

      {renderSeeAll && 
      <TouchableOpacity 
        style={styles.btnSeeAll}
        onPress={onPressSeeAll}
      >
        <Text style={styles.txtSeeAll}>See all</Text>
        <FontAwesomeIcon icon={faAngleRight} style={styles.imgRightArrow} size={14}/>
      </TouchableOpacity>
      }
    </View>
  )
}

export default ListHeader