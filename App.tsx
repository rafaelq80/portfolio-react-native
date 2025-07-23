import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Platform, View, StyleSheet } from 'react-native'
import Home from './src/screens/home/Home'

export default function App() {
	return (
		<>
			{/* Fundo branco abaixo da status bar */}
			{Platform.OS === 'android' && <View style={styles.statusBarBackground} />}

			{/* Ícones escuros */}
			<StatusBar style="dark" translucent />

			<Home />
		</>
	)
}

const styles = StyleSheet.create({
	statusBarBackground: {
		height: 24, // ou use Constants.statusBarHeight se quiser ser mais preciso
		backgroundColor: '#ffffff',
	},
})
