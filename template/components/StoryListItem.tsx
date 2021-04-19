import React, {FC} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

import styles from './styles';

interface Props {
  item: any;
}

const StoryListItem: FC<Props> = props => {
  const {item} = props;

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.urlContainer}>
        <Text style={styles.url}>{item.url}</Text>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.footerSubContainer}>
          <Text style={styles.authorName}>Author: {item.authorId}</Text>
          <Text style={styles.authorName}>
            Karma source: {item.authorKarmaSource}
          </Text>
        </View>
        <View style={[styles.footerSubContainer, styles.alignRight]}>
          <Text style={styles.authorName}>
            Date:{' '}
            {moment(new Date(item.timestamp * 1000)).format('DD/MM/YYYY HH:mm')}
          </Text>
          <Text style={styles.authorName}>Story score: {item.storyScore}</Text>
        </View>
      </View>
    </View>
  );
};

export default StoryListItem;
