import React, {FC} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import styles from './styles';
import StoryListItem from './StoryListItem';
import {Story} from '../interfaces/StoryInterfaces';
interface Props {
  stories: Array<Story>;
}

const StoryList: FC<Props> = props => {
  const renderItem = ({item}: {item: any}) => <StoryListItem item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.stories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

export default React.memo(StoryList);
