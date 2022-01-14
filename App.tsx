import React, { useState, useEffect, useCallback } from "react";
import { I18nManager } from "react-native";
import { observer } from "mobx-react-lite";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNav, TabNav } from "./nativeNavigation";

import { getLoggedIn, initToken } from "./app/authentication";

function AppComponent() {
  I18nManager.allowRTL(false);
  const isSignedIn = getLoggedIn();
  const [isAppReady, setAppReady] = useState<boolean>(false);
  const [fontsLoaded] = useFonts({
    TaskynIcon: require("./assets/fonts/icomoon.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      try {
        await Promise.all([SplashScreen.preventAutoHideAsync(), initToken()]);
      } catch (error) {
        console.warn(error);
      } finally {
        setAppReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (isAppReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady, fontsLoaded]);
  if (!isAppReady || !fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer onReady={onLayoutRootView}>
        {isSignedIn ? <TabNav /> : <AuthNav />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export const App = observer(AppComponent);
