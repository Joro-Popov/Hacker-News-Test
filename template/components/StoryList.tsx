import React, {FC} from 'react';
import {View, FlatList, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';

import styles from './styles';
import StoryListItem from './StoryListItem';

interface Props {
  stories: any[];
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

const mapStateToProps = state => ({
  stories: state.story.stories,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(StoryList));
