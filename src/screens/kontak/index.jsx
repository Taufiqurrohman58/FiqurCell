import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerProfil}>
        <View style={styles.containerImage}>
          <Image
            source={require('../../assets/user.png')}
            style={styles.profilePicture}
          />
        </View>
        <Text style={styles.textNama}>Taufiqurrohman</Text>
        <Text style={styles.textNomor}>087768030020</Text>
      </View>
      <View style={styles.contitle}>
        <Text style={styles.titleMenu}>Menu</Text>
        <View style={styles.horizontalLine} />
      </View>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons
              name="clipboard-text"
              size={30}
              color="#000"
            />
          </View>
          <Text style={styles.textMenu}>Riwayat</Text>
        </View>
        <Text style={styles.nomorMenu}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons name="cash" size={30} color="#000" />
          </View>
          <Text style={styles.textMenu}>Saldo</Text>
        </View>
        <Text style={styles.nomorMenu}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons name="bell" size={30} color="#000" />
          </View>
          <Text style={styles.textMenu}>Pemberitahuan</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons name="heart" size={30} color="#000" />
          </View>
          <Text style={styles.textMenu}>Produk Favorit</Text>
        </View>
        <Text style={styles.nomorMenu}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons name="library" size={30} color="#000" />
          </View>
          <Text style={styles.textMenu}>Alamat Pengiriman</Text>
        </View>
        <Text style={styles.nomorMenu}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons
              name="account-multiple"
              size={30}
              color="#000"
            />
          </View>
          <Text style={styles.textMenu}>Downline</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons
              name="label-outline"
              size={30}
              color="#000"
            />
          </View>
          <Text style={styles.textMenu}>Transaksi Massal</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons name="cog" size={30} color="#000" />
          </View>
          <Text style={styles.textMenu}>Pengaturan</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.conMenu}>
        <View style={styles.Menu}>
          <View>
            <MaterialCommunityIcons
              name="arrow-right-bold-box-outline"
              size={30}
              color="#000"
            />
          </View>
          <Text style={styles.textMenu}>Keluar</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.conEnd}></View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  containerProfil: {
    width: '100%',
    height: 200,
    backgroundColor: '#55CB95',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  containerImage: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    top: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 40,
    height: 40,
    left: 3,
  },
  textNama: {
    padding: 5,
    top: -15,
    fontSize: 20,
    color: 'white',
  },
  textNomor: {
    top: -15,
    color: 'white',
  },

  conMenu: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    marginHorizontal: 10,
  },
  textMenu: {
    marginHorizontal: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  nomorMenu: {
    fontSize: 15,
  },

  contitle: {
    alignItems: 'center',
  },
  titleMenu: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
  },

  horizontalLine: {
    borderBottomColor: '#C9C9C9',
    borderBottomWidth: 1,
    width: '80%',
    marginVertical: 10,
  },
  conEnd: {
    width: 100,
    height: 100,
  },
});
