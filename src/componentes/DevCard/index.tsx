import { Text, View } from "react-native";
import { styles } from "./styles";

export function DevCard() {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardAvatarContainer}>
                <View style={styles.cardAvatarSubContainer}>
                    <Text style={styles.cardAvatarLetter}>A</Text>
                </View>
            </View>

            <View style={styles.cardTextGroup}>
                <Text style={styles.cardTitle}>Arlen Augusto</Text>
                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardText}>Arquiteto de Software</Text>
                    <Text style={styles.cardSubtitle}>IBM</Text>
                </View>
            </View>


            <View style={styles.cardSeparator} />

            <View style={styles.cardTextGroup}>
                <Text style={styles.cardSubtitle}>Especialista em</Text>
                <Text style={styles.cardRole} >Frontand</Text>
            </View>

            <View style={[styles.cardBadgeContainer, { marginTop: 8 }]}>
                <Text style={styles.cardBadgeText}>Especialista</Text>
            </View>

            <Text style={styles.cardSubtitle}>2 anos de experiência</Text>
        </View>
    )
}

