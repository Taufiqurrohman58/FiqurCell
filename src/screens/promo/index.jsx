import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.promotitle}>Diskon IM3</Text>
      <View style={styles.balanceContainer}>
        <View style={styles.usageItem}>
          <TouchableOpacity style={styles.depositButton}>
            <Text style={styles.depositButtonText}>Beli Sekarang</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.depositButtonText1}>Waktu Terbatas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.containerdiskon}>
          <View style={styles.usageItem}>
            <View style={styles.userInfo}>
              <Text style={styles.balanceAmount}>30 GB</Text>
              <Text style={styles.balanceText}>30 hari</Text>
            </View>
            <View style={styles.header1}>
              <Text style={styles.rupiah}>Rp</Text>
              <View style={styles.userInfo}>
                <Text style={styles.balanceAmount}>50,000</Text>
                <Text
                  style={[
                    styles.diskontext,
                    {textDecorationLine: 'line-through'},
                  ]}>
                  Rp 70.000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <View style={styles.usageItem}>
          <TouchableOpacity style={styles.depositButton}>
            <Text style={styles.depositButtonText}>Beli Sekarang</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.depositButtonText1}>Waktu Terbatas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.containerdiskon}>
          <View style={styles.usageItem}>
            <View style={styles.userInfo}>
              <Text style={styles.balanceAmount}>50 GB</Text>
              <Text style={styles.balanceText}>30 hari</Text>
            </View>
            <View style={styles.header1}>
              <Text style={styles.rupiah}>Rp</Text>
              <View style={styles.userInfo}>
                <Text style={styles.balanceAmount}>70,000</Text>
                <Text
                  style={[
                    styles.diskontext,
                    {textDecorationLine: 'line-through'},
                  ]}>
                  Rp 90.000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <View style={styles.usageItem}>
          <TouchableOpacity style={styles.depositButton}>
            <Text style={styles.depositButtonText}>Beli Sekarang</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.depositButtonText1}>Waktu Terbatas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.containerdiskon}>
          <View style={styles.usageItem}>
            <View style={styles.userInfo}>
              <Text style={styles.balanceAmount}>90 GB</Text>
              <Text style={styles.balanceText}>30 hari</Text>
            </View>
            <View style={styles.header1}>
              <Text style={styles.rupiah}>Rp</Text>
              <View style={styles.userInfo}>
                <Text style={styles.balanceAmount}>90,000</Text>
                <Text
                  style={[
                    styles.diskontext,
                    {textDecorationLine: 'line-through'},
                  ]}>
                  Rp 105.000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.promotitle}>Diskon XL</Text>
      <View style={styles.balanceContainer}>
        <View style={styles.usageItem}>
          <TouchableOpacity style={styles.depositButton}>
            <Text style={styles.depositButtonText}>Beli Sekarang</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.depositButtonText1}>Waktu Terbatas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.containerdiskon}>
          <View style={styles.usageItem}>
            <View style={styles.userInfo}>
              <Text style={styles.balanceAmount}>55 GB</Text>
              <Text style={styles.balanceText}>30 hari</Text>
            </View>
            <View style={styles.header1}>
              <Text style={styles.rupiah}>Rp</Text>
              <View style={styles.userInfo}>
                <Text style={styles.balanceAmount}>55,000</Text>
                <Text
                  style={[
                    styles.diskontext,
                    {textDecorationLine: 'line-through'},
                  ]}>
                  Rp 75.000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.balanceContainer}>
        <View style={styles.usageItem}>
          <TouchableOpacity style={styles.depositButton}>
            <Text style={styles.depositButtonText}>Beli Sekarang</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.depositButtonText1}>Waktu Terbatas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.containerdiskon}>
          <View style={styles.usageItem}>
            <View style={styles.userInfo}>
              <Text style={styles.balanceAmount}>60 GB</Text>
              <Text style={styles.balanceText}>30 hari</Text>
            </View>
            <View style={styles.header1}>
              <Text style={styles.rupiah}>Rp</Text>
              <View style={styles.userInfo}>
                <Text style={styles.balanceAmount}>60,000</Text>
                <Text
                  style={[
                    styles.diskontext,
                    {textDecorationLine: 'line-through'},
                  ]}>
                  Rp 80.000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },

  promotitle: {
    margin: 15,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  balanceContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 20,
    top: -15,
    height: 140,
  },
  usageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'transparent',
  },
  userInfo: {
    marginLeft: 10,
  },
  balanceText: {
    fontSize: 12,
    color: '#000',
  },
  balanceAmount: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  depositButton: {
    marginTop: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C9C9C9',
    backgroundColor: '#55CB95',
    borderRadius: 10,
    width: 120,
    height: 25,
  },
  depositButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  depositButtonText1: {
    color: 'black',
    top: 10,
    fontSize: 12,
  },

  horizontalLine: {
    marginTop: 20,
    borderBottomColor: '#C9C9C9',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
  },

  containerdiskon: {
    top: 2,
  },
  rupiah: {
    top: -12,
    left: 10,
    fontSize: 12,
  },
  diskontext: {
    paddingleft: 10,
    fontSize: 12,
  },
});
