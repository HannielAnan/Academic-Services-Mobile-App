import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

const TawkToWidget: React.FC = () => {
  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    // Handle any messages received from the WebView if needed
    console.log('Message received from WebView:', event.nativeEvent.data);
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://tawk.to/chat/6475c68b74285f0ec46e6882/1h1m0v4m9' }}
        style={styles.webview}
        onMessage={handleWebViewMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default TawkToWidget;
