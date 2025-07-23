import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { profileData } from '../../data/ProfileData'
import { profileStyles } from './ProfileStyles'

const ProfileScreen: React.FC = () => {
	const handleSocialPress = async (url: string): Promise<void> => {
		try {
			const supported = await Linking.canOpenURL(url)
			if (supported) {
				await Linking.openURL(url)
			} else {
				Alert.alert('Erro', 'Não foi possível abrir o link')
			}
		} catch (error) {
			Alert.alert(
				'Erro',
				'Ocorreu um erro ao tentar abrir o link'
			)
		}
	}

	const handleEmailPress = async (): Promise<void> => {
		try {
			const emailUrl = `mailto:${profileData.email}`
			const supported = await Linking.canOpenURL(emailUrl)
			if (supported) {
				await Linking.openURL(emailUrl)
			} else {
				Alert.alert(
					'Erro',
					'Não foi possível abrir o cliente de email'
				)
			}
		} catch (error) {
			Alert.alert(
				'Erro',
				'Ocorreu um erro ao tentar abrir o email'
			)
		}
	}

	return (
			<ScrollView style={profileStyles.container}>
				<View style={profileStyles.header}>
					<View
						style={
							profileStyles.profileImageContainer
						}
					>
						<Image
							source={{
								uri: profileData.photo,
							}}
							style={
								profileStyles.profileImage
							}
						/>
						<View
							style={
								profileStyles.statusIndicator
							}
						/>
					</View>
					<Text style={profileStyles.name}>
						{profileData.name}
					</Text>
					<Text style={profileStyles.title}>
						{profileData.title}
					</Text>
					<Text style={profileStyles.location}>
						{profileData.location}
					</Text>
				</View>

				<View style={profileStyles.aboutSection}>
					<Text style={profileStyles.sectionTitle}>
						Sobre
					</Text>
					<Text style={profileStyles.aboutText}>
						{profileData.about}
					</Text>
				</View>

				<View style={profileStyles.socialSection}>
					<Text style={profileStyles.sectionTitle}>
						Conecte-se comigo
					</Text>

					<TouchableOpacity
						style={profileStyles.socialButton}
						onPress={() =>
							handleSocialPress(
								profileData.social
									.linkedin
							)
						}
					>
						<Ionicons
							name="logo-linkedin"
							size={24}
							color="#0077b5"
						/>
						<Text
							style={
								profileStyles.socialText
							}
						>
							LinkedIn
						</Text>
						<Ionicons
							name="chevron-forward"
							size={20}
							color="#64748b"
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={profileStyles.socialButton}
						onPress={() =>
							handleSocialPress(
								profileData.social
									.github
							)
						}
					>
						<Ionicons
							name="logo-github"
							size={24}
							color="#333"
						/>
						<Text
							style={
								profileStyles.socialText
							}
						>
							GitHub
						</Text>
						<Ionicons
							name="chevron-forward"
							size={20}
							color="#64748b"
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={profileStyles.socialButton}
						onPress={handleEmailPress}
					>
						<Ionicons
							name="mail"
							size={24}
							color="#dc2626"
						/>
						<Text
							style={
								profileStyles.socialText
							}
						>
							Email
						</Text>
						<Ionicons
							name="chevron-forward"
							size={20}
							color="#64748b"
						/>
					</TouchableOpacity>
				</View>

				<View style={profileStyles.statsSection}>
					<View style={profileStyles.statItem}>
						<Text
							style={
								profileStyles.statNumber
							}
						>
							{profileData.stats.projects}
						</Text>
						<Text style={profileStyles.statLabel}>
							Projetos
						</Text>
					</View>
					<View style={profileStyles.statDivider} />
					<View style={profileStyles.statItem}>
						<Text
							style={
								profileStyles.statNumber
							}
						>
							{profileData.stats.experience}
						</Text>
						<Text style={profileStyles.statLabel}>
							Anos
						</Text>
					</View>
					<View style={profileStyles.statDivider} />
					<View style={profileStyles.statItem}>
						<Text
							style={
								profileStyles.statNumber
							}
						>
							{profileData.stats.clients}
						</Text>
						<Text style={profileStyles.statLabel}>
							Clientes
						</Text>
					</View>
				</View>
			</ScrollView>
	)
}

export default ProfileScreen
