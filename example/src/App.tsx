import { useState } from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet, Platform, Button } from 'react-native';
import * as NativeBadge from 'react-native-badge-turbo';

export function App(): React.JSX.Element {
  const [isBadgeSupported, setIsBadgeSupported] = useState(false);
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    initBadge();

    async function initBadge() {
      const isSupported = await NativeBadge.isBadgeSupported();
      setIsBadgeSupported(isSupported);
    }
  }, []);

  const getBadgeCountHandler = async () => {
    const count = await NativeBadge.getBadgeCount();
    setBadgeCount(count);
  };

  const setBadgeCountHandler = async () => {
    const count = await NativeBadge.getBadgeCount();
    await NativeBadge.setBadgeCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.panel, shadow]}>
        <Text>isBadgeSupported: {isBadgeSupported.toString()}</Text>
        <Text>Badge Count: {badgeCount}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Get Badge Count" onPress={getBadgeCountHandler} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Set Badge Count" onPress={setBadgeCountHandler} />
      </View>
    </View>
  );
}
const shadow = Platform.select({
  android: { elevation: 1 },
  default: {
    shadowColor: '#999',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 0 },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  panel: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
  },
});

