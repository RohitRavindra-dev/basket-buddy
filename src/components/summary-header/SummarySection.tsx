import {Text, View} from 'react-native';
import {SummarySectionProps} from './types';
import {summarySectionStyles as ss} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const SummarySection = ({countsTotal, countsComplete, weight=0}: SummarySectionProps) => {
  return (
    <View style={ss.section}>
      <View style={ss.infoCntr}>
        <MaterialCommunityIcons
          name="format-list-checks"
          color={'white'}
          size={22}
        />
        <Text style={ss.infoText}>{countsTotal} Left</Text>
      </View>
      <View style={ss.infoCntr}>
        <MaterialCommunityIcons
          name="check-all"
          color={'white'}
          size={22}
        />
        <Text style={ss.infoText}>{countsComplete} Received</Text>
      </View>
      <View style={ss.infoCntr}>
        <MaterialCommunityIcons
          name="weight-kilogram"
          color={'white'}
          size={22}
        />
        <Text style={ss.infoText}>+{weight} Kgs</Text>
      </View>
    </View>
  );
};

