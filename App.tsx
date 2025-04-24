import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';

const img1 = 'https://picsum.photos/200/300';
const img2 = 'https://picsum.photos/200/300';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.walletContainer}>
        <Text style={styles.walletTitle}>Wallet</Text>
        <Text style={styles.walletValue}>Total Portfolio Value</Text>
        <Text style={styles.walletAmount}>$0.00</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageSlider}>
        <Image source={{ uri: img2 }} style={styles.sliderImage} />
        <Image source={{ uri: img1 }} style={styles.sliderImage} />
      </ScrollView>


      <View style={styles.containerimage}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Other things</Text>

        <TouchableOpacity style={styles.item}>
          {/* <Image
            source={require('./assets/book-icon.png')} // Add your own icon or image source
            style={styles.icon}
          /> */}
          <Text style={styles.itemText}>Education center</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          {/* <Image
            source={require('./assets/settings-icon.png')} // Add your own icon or image source
            style={styles.icon}
          /> */}
          <Text style={styles.itemText}>Settings and support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          {/* <Image
            source={require('./assets/heart-icon.png')} // Add your own icon or image source
            style={styles.icon}
          /> */}
          <Text style={styles.itemText}>Donate</Text>
        </TouchableOpacity>

        <View style={styles.guidesSection}>
          <Text style={styles.sectionSubTitle}>Getting started guides</Text>
          <Text style={styles.guidesText}>Learn what can you do in MEW and how to do it.</Text>
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.sectionSubTitle}>Contact support</Text>
          <Text style={styles.contactText}>Our friendly support team is here to help.</Text>
        </View>

        <Text style={styles.footer}>
          MyEtherWallet Inc. is an independent, self-funded company. We provide a free, open-source, client-side tool for interacting with the blockchain.
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F8',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  walletContainer: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  walletTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },
  walletValue: {
    fontSize: 14,
    color: '#8E8E8E',
    marginTop: 4,
  },
  walletAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginTop: 8,
  },
  accountTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 24,
    color: '#2D2D2D',
  },
  accountValue: {
    fontSize: 14,
    color: '#8E8E8E',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#4C8BF5',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  adContainer: {
    backgroundColor: '#F8F8F8',
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  adImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  adText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  walletButton: {
    backgroundColor: '#4C8BF5',
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  walletButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageSlider: {
    marginTop: 20,
  },
  sliderImage: {
    width: 300,
    height: 180,
    marginRight: 16,
    borderRadius: 12,
  },
  containerimage: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  section: {
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D2D2D',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  itemText: {
    fontSize: 16,
    color: '#2D2D2D',
  },
  guidesSection: {
    marginTop: 20,
  },
  sectionSubTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D2D2D',
  },
  guidesText: {
    fontSize: 14,
    color: '#8E8E8E',
    marginTop: 4,
  },
  contactSection: {
    marginTop: 16,
  },
  contactText: {
    fontSize: 14,
    color: '#8E8E8E',
    marginTop: 4,
  },
  footer: {
    fontSize: 12,
    color: '#8E8E8E',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default App;
