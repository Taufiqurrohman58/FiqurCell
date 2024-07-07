import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Index = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.homeChild} />
      <View style={styles.balanceContainer}>
        <View style={styles.usageItem}>
          <View style={styles.header1}>
            <Image
              source={require('../../assets/saldo.png')}
              style={styles.profilePicture}
            />
            <View style={styles.userInfo}>
              <Text style={styles.balanceText}>Saldo Mitra</Text>
              <Text style={styles.balanceAmount}>Rp 0</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.depositButton}>
            <Text style={styles.depositButtonText}>DEPOSIT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/verify.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Verifikasi</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine} />
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/money.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Downline</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine} />
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/collection.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Rekap</Text>
          </TouchableOpacity>
          <View style={styles.verticalLine} />
          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={require('../../assets/help.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>Bantuan</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.services}>
        <View style={styles.imgslider}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://foto.kontan.co.id/aZkGtUFPN7_yrMHGDFIbCWQYums=/smart/filters:format(webp)/2022/03/02/222556477p.jpg?_ga=2.253902216.1633348487.1719969107-998151187.1719969107',
            }}
          />
          <TouchableOpacity>
            <Text style={styles.text}>Lihat Promo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cservices}>
          <Text style={styles.servicesTitle}>Pulsa dan Kuota</Text>
          <View style={styles.horizontalLine} />
          <View style={styles.servicesRow}>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() => navigation.navigate('XLDetail')}>
              <Image
                source={require('../../assets/xl.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>XL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() => navigation.navigate('Telkomsel')}>
              <Image
                source={require('../../assets/telkomsel.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Telkomsel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}
            onPress={() => navigation.navigate('Telkomsel')}>
              <Image
                source={require('../../assets/indosat.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Indosat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() => navigation.navigate('Tri')}>
              <Image
                source={require('../../assets/3.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Tri</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.servicesRow}>
            <TouchableOpacity style={styles.serviceItem}>
              <Image
                source={require('../../assets/simpati.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Simpati</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Image
                source={require('../../assets/im3.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Im3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Image
                source={require('../../assets/axis.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Axis</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Image
                source={require('../../assets/smartfren.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Smartfren</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cservices}>
          <Text style={styles.servicesTitle}>Top Up Game</Text>
          <View style={styles.horizontalLine} />
          <View style={styles.servicesRow}>
            <TouchableOpacity style={styles.serviceItem}>
              <Image
                source={require('../../assets/ml.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Mobile Legend</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Image
                source={require('../../assets/ff.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Free Fire</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Image
                source={require('../../assets/tarisland.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Tarisland</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Image
                source={require('../../assets/pubg.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>Pubg</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  homeChild: {
    top: -9,
    left: -32,
    backgroundColor: '#55CB95',
    width: 410,
    height: 170,
    position: 'absolute',
  },

  imgslider: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#C9C9C9',
    width: '100%',
    height: 120,
    backgroundColor: 'white',
    top: -23,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 5,
    borderRadius: 3,
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

  verticalLine: {
    borderRightColor: '#C9C9C9',
    borderRightWidth: 1,
    height: 40,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: 'red',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  balanceContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderWidth: 1,
    borderColor: '#C9C9C9',
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 20,
    top: -15,
  },
  balanceText: {
    fontSize: 16,
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
    width: 70,
    height: 30,
  },
  depositButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  coninfo: {
    flexDirection: 'row',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  menuText: {
    color: 'black',
    marginTop: 5,
    fontSize: 10,
  },

  services: {
    padding: 20,
  },
  cservices: {
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#C9C9C9',
    borderRadius: 10,
    top: -20,
  },
  servicesTitle: {
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  horizontalLine: {
    borderBottomColor: '#C9C9C9',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  serviceItem: {
    alignItems: 'center',
    width: 80,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#55CB95',
  },
  serviceText: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
    textAlign: 'center',
  },
});
