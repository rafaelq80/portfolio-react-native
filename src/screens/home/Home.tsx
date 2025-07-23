import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React, { JSX } from 'react'
import ProfileScreen from '../profile/Profile'
import SkillsScreen from '../skills/Skills'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export type RootTabParamList = {
	Profile: undefined
	Skills: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

export default function Home(): JSX.Element {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({
								focused,
								color,
								size,
							}) => {
								let iconName: keyof typeof Ionicons.glyphMap

								if (
									route.name ===
									'Profile'
								) {
									iconName =
										focused
											? 'person'
											: 'person-outline'
								} else if (
									route.name ===
									'Skills'
								) {
									iconName =
										focused
											? 'code-slash'
											: 'code-slash-outline'
								} else {
									iconName =
										'help-outline'
								}

								return (
									<Ionicons
										name={
											iconName
										}
										size={
											size
										}
										color={
											color
										}
									/>
								)
							},
							tabBarActiveTintColor:
								'#6366f1',
							tabBarInactiveTintColor:
								'#64748b',
							tabBarStyle: {
								backgroundColor:
									'#ffffff',
								borderTopWidth: 0,
								elevation: 0,
								shadowColor: '#000',
								shadowOffset: {
									width: 0,
									height: -2,
								},
								shadowOpacity: 0.1,
								shadowRadius: 4,
								height: 60,
								paddingBottom: 8,
							},
							headerShown: false,
						})}
					>
						<Tab.Screen
							name="Profile"
							component={ProfileScreen}
							options={{
								tabBarLabel: 'Perfil',
							}}
						/>
						<Tab.Screen
							name="Skills"
							component={SkillsScreen}
							options={{
								tabBarLabel:
									'Habilidades',
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
