import React, {FC} from 'react';
import {ActivityIndicator, Modal, View, Text} from 'react-native';
import styles from './styles';
import GlobalConstants from '../../utils/GlobalConstants';

interface Props {
  isLoading: boolean;
}

const LoadingHandler: FC<Props> = props => {
  const {isLoading} = props;

  return (
    <Modal transparent visible={isLoading} style={styles.modalContainer}>
      <View style={styles.modalContentContainer}>
        <View style={styles.contentContainer}>
          <ActivityIndicator size="large" color="gray" />
          <Text style={styles.text}>{GlobalConstants.PLEASE_WAIT}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingHandler;
