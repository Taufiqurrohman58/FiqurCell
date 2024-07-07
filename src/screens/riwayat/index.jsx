import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.noHistoryText}>Tidak Ada Riwayat Tersedia</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  noHistoryText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'black',
  },
});

export default HistoryScreen;
