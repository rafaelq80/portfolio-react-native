import { Ionicons } from '@expo/vector-icons'
import React, { JSX } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { skillsData } from '../../data/SkillsData'
import { SkillCategory } from '../../types'
import { skillsStyles } from './SkillsStyles'

const SkillsScreen: React.FC = () => {
	const renderStars = (level: number): JSX.Element[] => {
		const stars: JSX.Element[] = []
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<Ionicons
					key={i}
					name={i <= level ? 'star' : 'star-outline'}
					size={16}
					color={i <= level ? '#fbbf24' : '#d1d5db'}
					style={skillsStyles.star}
				/>
			)
		}
		return stars
	}

	const renderSkillCategory = (category: SkillCategory): JSX.Element => (
		<View
			key={category.category}
			style={skillsStyles.categoryContainer}
		>
			<View style={skillsStyles.categoryHeader}>
				<Ionicons
					name={category.icon}
					size={20}
					color="#6366f1"
				/>
				<Text style={skillsStyles.categoryTitle}>
					{category.category}
				</Text>
			</View>

			{category.skills.map((skill, index) => (
				<View key={index} style={skillsStyles.skillItem}>
					<View style={skillsStyles.skillHeader}>
						<Text style={skillsStyles.skillName}>
							{skill.name}
						</Text>
						<Text style={skillsStyles.skillLevel}>
							{skill.level}/5
						</Text>
					</View>
					<View style={skillsStyles.starsContainer}>
						{renderStars(skill.level)}
					</View>
					<View style={skillsStyles.progressBar}>
						<View
							style={[
								skillsStyles.progressFill,
								{
									width: `${
										(skill.level /
											5) *
										100
									}%`,
								},
							]}
						/>
					</View>
				</View>
			))}
		</View>
	)

	return (
			<ScrollView style={skillsStyles.container}>
				<View style={skillsStyles.header}>
					<View
						style={
							skillsStyles.profileImageContainer
						}
					>
						<Image
							source={{
								uri: skillsData.photo,
							}}
							style={
								skillsStyles.profileImage
							}
						/>
					</View>
					<Text style={skillsStyles.name}>
						{skillsData.name}
					</Text>
					<Text style={skillsStyles.subtitle}>
						Minhas Habilidades Técnicas
					</Text>
				</View>

				<View style={skillsStyles.skillsContainer}>
					{skillsData.skillCategories.map(
						renderSkillCategory
					)}
				</View>

				<View style={skillsStyles.footer}>
					<Text style={skillsStyles.footerText}>
						Sempre em busca de novos desafios e
						aprendizados!
					</Text>
				</View>
			</ScrollView>
	)
}

export default SkillsScreen
