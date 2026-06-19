import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Button, Image, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from "expo-camera";


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    fetch("https://ap-south-1.aws.data.mongodb-api.com/app/data-vkgii/endpoint/data/v1/action/findOne", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": "7UiTzUI6qjF1JMi6W0SwyL8D8inO8YKfn1d515UAXERozLwhnWjJdy31nb7qsZ0k"
      },
      body: JSON.stringify({
        "collection": "Trolley",
        "database": "Item",
        "dataSource": "Cluster0",
        "filter": {
          "Trolley_number": `${data}`.replace('<', '').replace('>', '')
        }
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        //console.log(JSON.stringify(responseData));
        var obj = JSON.parse(JSON.stringify(responseData));
        var st = ""
        for (var key in obj.document) {
          if (key != "_id") st += `${key} : ${obj.document[key]}\n`;
        }
        if (st == "") {
          st = "Details not found in Database";
        }
        console.log(st);
        Alert.alert('Details', st, [
          { text: 'OK', onPress: () => { setScanned(false); console.log(st); } },
        ]);
      })
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    //setScanned(false);
  };

  const renderCamera = () => {
    return (
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        ratio='16:9'
        style={styles.camera}
      />
    );
  };
  while (scanned === true) {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: '100%', height: '100%' }}
          source={require("./assets/loading.gif")}
          contentFit="fill"
        />
      </View>
    );
  }

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Camera permission not granted</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={{ alignSelf: 'center' }}
        source={require("./assets/NokiaLogo.png")}></Image>
      <Text style={styles.title}>Welcome to the Third Eye</Text>
      {renderCamera()}
      <Button
        title="Scan QRcode"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: 'center',
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 40,
    marginTop: 40,
    padding: 10,
    get alignItems() {
      return this._alignItems;
    },
    set alignItems(value) {
      this._alignItems = value;
    },
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  camera: {
    flex: 1,
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    background: 'transparent'
  }
});