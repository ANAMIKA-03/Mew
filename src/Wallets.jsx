import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker'; 

const Wallets = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('Ethereum');
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
       <Picker
          selectedValue={selectedNetwork}
          onValueChange={(itemValue) => setSelectedNetwork(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="Ethereum" value="Ethereum" />
          <Picker.Item label="BNB Smart Chain" value="BNB Smart Chain" />
          <Picker.Item label="Polygon" value="Polygon" />
          <Picker.Item label="zkSync Era" value="zkSync Era" />
          <Picker.Item label="Base" value="Base" />
          <Picker.Item label="Arbitrum" value="Arbitrum" />
          <Picker.Item label="Optimism" value="Optimism" />
        </Picker>
      
      <View style={styles.walletContainer}>
        <Text style={styles.walletTitle}>Wallet</Text>
        <Text style={styles.walletValue}>TOTAL PORTFOLIO VALUE</Text>
        <Text style={styles.walletAmount}>$0.00</Text>

        <View style={styles.gradientBox}>
          <Text style={styles.accountText}>My main account</Text>
          <Text style={styles.walletAddress}>0xEA5D--F772</Text>
          <Text style={styles.walletAmount}>$0.00</Text>
          <Text style={styles.tokenInfo}>0 ETH and no tokens</Text>
        </View>

        
        {/* <LottieView
          source={require('./animation.json')} // Add your Lottie animation JSON here
          autoPlay
          loop
          style={styles.lottie}
        /> */}
      </View>

      <View style={styles.containerbox}>
      <TouchableOpacity style={styles.cardbox}>
        <View style={styles.iconContainer}>
          <Icon name="credit-card" size={24} color="#00B0FF" />
        </View>
        <View style={styles.textContainerbox}>
          <Text style={styles.cardTitle}>Buy Crypto</Text>
          <Text style={styles.cardSubtitle}>Visa or Mastercard</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardbox}>
        <View style={styles.iconContainer}>
          <Icon name="credit-card" size={24} color="#00B0FF" />
        </View>
        <View style={styles.textContainerbox}>
          <Text style={styles.cardTitle}>Buy Crypto</Text>
          <Text style={styles.cardSubtitle}>Visa or Mastercard</Text>
        </View>
      </TouchableOpacity>
    </View>

      <View style={styles.walletContainer}>
      <Text style={styles.headertext}>Other things</Text>

      <View style={styles.optionContainer}>
        <Icon name="book" size={30} color="#4D4D4D" />
        <Text style={styles.optionText}>Education center</Text>
      </View>

      <View style={styles.optionContainer}>
        <Icon name="cogs" size={30} color="#4D4D4D" />
        <Text style={styles.optionText}>Settings and support</Text>
      </View>

      <View style={styles.optionContainer}>
        <Icon name="heart" size={30} color="#4D4D4D" />
        <Text style={styles.optionText}>Donate</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          {/* <Image
            source={require('./astronaut.png')} // Replace with actual image path
            style={styles.icon}
          /> */}
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Getting started guides</Text>
            <Text style={styles.cardDescription}>Learn what you can do in MEW and how to do it.</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          {/* <Image
            source={require('./support.png')} // Replace with actual image path
            style={styles.icon}
          /> */}
          <View style={styles.textContainer}>
            <Text style={styles.cardTitlebox}>Contact support</Text>
            <Text style={styles.cardDescription}>Our friendly support team is here to help.</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          MyEtherWallet Inc. is an independent, self-funded company. We provide a free, open-source, client-side tool for interacting with the blockchain. We do not collect, hold, or store keys, account information, or passwords. We do not collect data passively, do not monetize the collection of data, and do not use your data for marketing or advertising.
        </Text>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  walletContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    textAlign: "left"
  },
  walletContainerScreen: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    textAlign: "left"
  },
  walletTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  walletValue: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  walletAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D4D4D',
    marginVertical: 10,
  },
  gradientBox: {
    backgroundColor: 'linear-gradient(180deg, rgba(255, 153, 102, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)', 
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  accountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  walletAddress: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  tokenInfo: {
    fontSize: 12,
    color: '#B0B0B0',
    marginTop: 5,
  },
  dropdown: {
    height: 50,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  receiveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#00B0FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  lottie: {
    width: 100,
    height: 100,
    marginVertical: 15,
    alignSelf: 'center',
  },
  headertext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D4D4D',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    color: '#4D4D4D',
    marginLeft: 10,
    borderBottomWidth: 1,
    borderTopColor: '#ccc',
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  cardDescription: {
    fontSize: 14,
    color: '#B0B0B0',
    marginTop: 5,
  },
  footer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerText: {
    fontSize: 12,
    color: '#B0B0B0',
    textAlign: 'center',
  },
  
  containerbox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection:"row",
    gap:10,
  },
  cardbox: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '60%',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: 'rgba(0, 176, 255, 0.1)',
    borderRadius: 30,
    padding: 10,
  },
  textContainerbox: {
    marginLeft: 20,
  },
  cardTitlebox: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D4D4D',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#B0B0B0',
  },
});

export default Wallets;
