import { addDays } from 'date-fns';
import { Platform } from 'react-native';

export function getPlatformDate(date: Date) {
  return addDays(date, 1);
  // added 1 day to the date because the marking was getting one day less, if it only happens in IOS do the if
  // if (Platform.OS === 'ios') {
  //   return addDays(date, 1);
  // } else {
  //   return date;
  // }
}
