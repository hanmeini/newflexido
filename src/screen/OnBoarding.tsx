import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const data = [
  {
    image: require('../../assets/image/Onboarding 1.png'),
  },
  {
    image: require('../../assets/image/Onboarding 2.png'),
  },
  {
    image: require('../../assets/image/Onboarding 3.png'),
  },
];

function OnboardingScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = () => {
    navigation.navigate("Started");
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1); // Pindah ke slide berikutnya
    } else {
      navigation.replace("Started"); // Navigasi ke Login jika di slide terakhir
    }
  };

  return (
    <View style={styles.container}>
      {/** Swiper untuk menampilkan gambar */}
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        index={currentIndex}
        onIndexChanged={setCurrentIndex}
        dot={<View />} // Hilangkan dots bawaan
        activeDot={<View />} // Hilangkan dots bawaan
      >
        {data.map((item, index) => (
          <View style={styles.slide} key={index}>
            <ImageBackground source={item.image} style={styles.imageBackground}>
              {/** Dot indikator di atas gambar */}
              <View style={styles.overlay}>
                <View style={styles.dotContainer}>
                  {data.map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.dot,
                        currentIndex === i && styles.activeDot, // Aktifkan dot sesuai indeks
                      ]}
                    />
                  ))}
                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </Swiper>

      {/** Footer dengan tombol Skip dan Next */}
      <View style={styles.footer}>
        {/** Tampilkan tombol Skip kecuali di slide terakhir */}
        {currentIndex !== data.length - 1 && (
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.buttonSkip}>Skip</Text>
          </TouchableOpacity>
        )}

        {/** Tombol Next dengan ikon panah kanan atau roket */}
        <TouchableOpacity
            onPress={handleNext}
            style={[
                styles.nextButtonWrapper, 
                currentIndex === data.length - 1 && styles.rocketWrapper,
            ]}
            >
            <View style={styles.nextButton}>
                {currentIndex === data.length - 1 ? (
                <Ionicons name="rocket-outline" size={24} color="#000" /> 
                ) : (
                <Ionicons name="arrow-forward-outline" size={24} color="#000" /> 
                )}
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  wrapper: {},
  slide: {
    flex: 1,
  },
  imageBackground: {
    width: width,
    flex: 1,
    justifyContent: "flex-start", // Supaya konten muncul dari atas
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: "7%", // Posisi di atas gambar
    width: "100%",
    paddingTop: 20, // Jarak atas
    paddingBottom: 10,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    backgroundColor: "#383838",
    width: "27%",
    height: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#ffff",
    width: "27%",
    height: 5,
    borderRadius: 6,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    gap:"50%",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: "10%",
    backgroundColor:"transparent"
  },
  skipButton: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  containerRocket:{
    backgroundColor:'#fff',
    padding:1,
    width:"auto",
    height:"auto"
  },
  rocketButton: {
    alignSelf: "center",
    justifyContent: "center",
    borderColor: "#000",
    padding: 20,
  },
  buttonSkip: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    fontFamily:'Inter-Regular'
  },
  nextButtonWrapper: {
    alignItems: "center", // Posisi di tengah
    justifyContent: "center",
  },
  rocketWrapper: {
    borderWidth: 2, // Cincin putih
    borderColor: "#fff", // Warna cincin putih
    borderRadius: 50, // Lingkaran sempurna
    padding: 2, // Jarak antara cincin dan tombol
    width:100,
    height:100
  },
  nextButton: {
    backgroundColor: "#fff",
    padding:20,
    borderRadius: 50, //
  },
});
