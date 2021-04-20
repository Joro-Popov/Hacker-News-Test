import React, {FC, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import styles from './styles';
import StoryList from '../../components/StoryList/StoryList';
import {setStories} from '../../redux/actions/storyActions';
import {Story} from '../../interfaces/StoryInterfaces';
import LoadingHandler from '../../components/LoadingHandler/LoadingHandler';

interface Props {
  setStories: () => void;
  stories: Array<Story>;
  isLoading: boolean;
}

const StoriesContainer: FC<Props> = props => {
  useEffect(() => {
    props.setStories();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StoryList stories={props.stories} />
      <LoadingHandler isLoading={props.isLoading} />
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => ({
  stories: state.story.stories,
  isLoading: state.story.isLoading,
});

const mapDispatchToProps = {
  setStories,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoriesContainer);
