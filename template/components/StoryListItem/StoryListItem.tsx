import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';

import styles from './styles';
import {Story} from '../../interfaces/StoryInterfaces';
import GlobalConstants from '../../utils/GlobalConstants';

interface Props {
  item: Story;
  setLink: (url: string) => void;
}

const StoryListItem: FC<Props> = props => {
  const {item} = props;

  const openLink = (): void => {
    props.setLink(item.url);
  };

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <TouchableOpacity style={styles.urlContainer} onPress={openLink}>
        <Text style={styles.url}>{item.url}</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <View style={styles.footerSubContainer}>
          <Text style={styles.authorName}>
            {GlobalConstants.AUTHOR(item.authorId)}
          </Text>
          <Text style={styles.authorName}>
            {GlobalConstants.KARMA_SCORE(item.authorKarmaScore)}
          </Text>
        </View>
        <View style={[styles.footerSubContainer, styles.alignRight]}>
          <Text style={styles.authorName}>
            {GlobalConstants.DATE(
              moment(new Date(item.timestamp * 1000)).format(
                'DD/MM/YYYY HH:mm',
              ),
            )}
          </Text>
          <Text style={styles.authorName}>
            {GlobalConstants.STORY_SCORE(item.storyScore)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StoryListItem;
