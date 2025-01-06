import { View, Text, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { UserInfo } from '../../models/user-info/user-info';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface IProps {
    title?: string,
    renderSeeAll?: boolean,
    onPressSeeAll?: () => void,
}

const ListHeader: React.FC<IProps> = ({title, renderSeeAll, onPressSeeAll}) => {

  const {t} = useTranslation();

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.txtTitle}>{title}</Text>

      {renderSeeAll && 
      <TouchableOpacity 
        style={styles.btnSeeAll}
        onPress={onPressSeeAll}
      >
        <Text style={styles.txtSeeAll}>{t('common_see_all')}</Text>
        <FontAwesomeIcon icon={faAngleRight} style={styles.imgRightArrow} size={14} color={colors.Gray}/>
      </TouchableOpacity>
      }
    </View>
  )
}

export default ListHeader