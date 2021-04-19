import React, {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';
import StoryList from '../components/StoryList';
import {setStories} from '../redux/actions/storyActions';

interface Props {
  setStories: any;
}

const StoriesContainer: FC<Props> = props => {
  useEffect(() => {
    props.setStories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StoryList />
    </SafeAreaView>
  );
};

const mapDispatchToProps = {
  setStories,
};

export default connect(null, mapDispatchToProps)(React.memo(StoriesContainer));
