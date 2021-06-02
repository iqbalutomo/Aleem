import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUstadz1, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

const RatedUstadz = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUstadz1} style={styles.avatar} />
      <View style={styles.wrapperText}>
        <Text style={styles.name}>Ameer Thalib</Text>
        <Text style={styles.babKonsultasi}>Fiqih</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default RatedUstadz;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  wrapperText: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  babKonsultasi: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 2,
  },
  rate: {
    flexDirection: 'row',
  },
});
