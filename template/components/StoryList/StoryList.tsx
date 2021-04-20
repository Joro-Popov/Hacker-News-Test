import React, {FC, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles';
import StoryListItem from '../StoryListItem/StoryListItem';
import {Story} from '../../interfaces/StoryInterfaces';
import GlobalConstants from '../../utils/GlobalConstants';

interface Props {
  stories: Array<Story>;
}

const StoryList: FC<Props> = props => {
  const [link, setLink] = useState('');

  let WEBVIEW_REF = React.useRef(null);

  const renderItem = ({item}: {item: any}) => (
    <StoryListItem item={item} setLink={setLink} />
  );

  const goBack = (): void => {
    WEBVIEW_REF.current.goBack();
    setLink('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {!link ? (
        <FlatList
          data={props.stories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        />
      ) : (
        <View style={styles.webViewContainer}>
          <TouchableOpacity style={styles.webviewHeader} onPress={goBack}>
            <Text style={styles.backText}>{GlobalConstants.GO_BACK}</Text>
          </TouchableOpacity>
          <WebView
            source={{uri: link}}
            ref={WEBVIEW_REF}
            thirdPartyCookiesEnabled
            startInLoadingState
            sharedCookiesEnabled
            javaScriptEnabled
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default React.memo(StoryList);
