import React, {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';
import StoryList from '../components/StoryList';
import {setStories} from '../redux/actions/storyActions';
import {Story} from '../interfaces/StoryInterfaces';

interface Props {
  setStories: () => void;
  stories: Array<Story>;
}

const StoriesContainer: FC<Props> = props => {
  useEffect(() => {
    props.setStories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StoryList stories={props.stories} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => ({
  stories: state.story.stories,
});

const mapDispatchToProps = {
  setStories,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoriesContainer);
