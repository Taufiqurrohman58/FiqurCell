import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const PulsaCard = ({nominal}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Tri</Text>
        <Text style={styles.cardNominal}>Pulsa {nominal}</Text>
        <View style={styles.qrCodePlaceholder}>
          <Text style={styles.qrText}>QR CODE</Text>
        </View>
        <Text style={styles.scanText}>Scan QR Code untuk isi ulang</Text>
      </View>
      <View style={styles.cardBack}>
        <Text style={styles.instructionsTitle}>Cara Isi Ulang Pulsa</Text>
        <Text style={styles.instructions}>1. Gosok kode voucher.</Text>
        <Text style={styles.instructions}>2. Ketik *111*kode_voucher#</Text>
        <Text style={styles.instructions}>3. Tekan panggil.</Text>
        <Text style={styles.footer}>Tri</Text>
        <Text style={styles.footer}>www.tri.co.id</Text>
      </View>
    </View>
  );
};

const HistoryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PulsaCard nominal="5000" />
      <PulsaCard nominal="10000" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  card: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  cardContent: {
    padding: 20,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  cardNominal: {
    fontSize: 20,
    marginVertical: 10,
    color: '#000',
  },
  qrCodePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#d0d0d0',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  qrText: {
    color: '#888',
  },
  scanText: {
    fontSize: 12,
    color: '#666',
  },
  cardBack: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    alignItems: 'center',
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  instructions: {
    fontSize: 14,
    marginVertical: 2,
    color: '#000',
  },
  footer: {
    fontSize: 12,
    color: '#666',
    marginTop: 10,
  },
});

export default HistoryScreen;
