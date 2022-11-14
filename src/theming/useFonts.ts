//@ts-ignore
import SpartanBlack from '../assets/fonts/Spartan-Black.ttf';
//@ts-ignore
import SpartanBold from '../assets/fonts/Spartan-Bold.ttf';
//@ts-ignore
import SpartanExtraBold from '../assets/fonts/Spartan-ExtraBold.ttf';
//@ts-ignore
import SpartanExtraLight from '../assets/fonts/Spartan-ExtraLight.ttf';
//@ts-ignore
import SpartanLight from '../assets/fonts/Spartan-Light.ttf';
//@ts-ignore
import SpartanMedium from '../assets/fonts/Spartan-Medium.ttf';
//@ts-ignore
import SpartanRegular from '../assets/fonts/Spartan-Regular.ttf';
//@ts-ignore
import SpartanSemiBold from '../assets/fonts/Spartan-SemiBold.ttf';
//@ts-ignore
import SpartanThin from '../assets/fonts/Spartan-Thin.ttf';


import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export const useResources = () => {
  const [isFontReady, setIsFontReady] = useState(false);

  const loadFontAsync = async () => {
    try {
      await Font.loadAsync({
        SpartanBlack: {
          uri: SpartanBlack as any,
          display: Font.FontDisplay.SWAP,
        },
        SpartanBold: {
          uri: SpartanBold as any,
          display: Font.FontDisplay.SWAP,
        },
        SpartanExtraBold: {
          uri: SpartanExtraBold as any,
          display: Font.FontDisplay.SWAP,
        },
        SpartanExtraLight: {
          uri: SpartanExtraLight as any,
          display: Font.FontDisplay.SWAP,
        },
        SpartanLight: {
          uri: SpartanLight as any,
          display: Font.FontDisplay.SWAP,
        },
        SpartanMedium: {
          uri: SpartanMedium as any,
          display: Font.FontDisplay.SWAP,
        },
        SpartanRegular: {
          uri: SpartanRegular as any,
          display: Font.FontDisplay.SWAP,
        },
        SpartanSemiBold: {
          uri: SpartanSemiBold as any,
          display: Font.FontDisplay.SWAP,
        },
        SpartanThin: {
          uri: SpartanThin as any,
          display: Font.FontDisplay.SWAP,
        },
      });
    } catch (error) {
      console.log('Font Load Error:', error)
    } finally {
      setIsFontReady(true);
    }
  }

  useEffect(() => {
    loadFontAsync();
  }, []);

  return {
    isFontReady
  }
};