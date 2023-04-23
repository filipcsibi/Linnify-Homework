import NetInfo from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';

export const isNetworkOnline = () => {
  const [networkStatus, setNetworkStatus] = useState<boolean | null>(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetworkStatus(state.isInternetReachable);
    });
    return () => unsubscribe();
  }, []);

  return networkStatus;
};
