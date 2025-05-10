import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // const { isLoggedIn, loading } = useUser(); // 从 context 中获取登录状态
  const router = useRouter();

  // useEffect(() => {
  //   if (!loading) {
  //     if (!isLoggedIn) {
  //       router.replace({ pathname: "/login" });
  //       // 如果未登录，跳转到登录页
  //     }
  //   }
  // }, [isLoggedIn, loading]);

  // if (!loaded || loading) {
  //   // 字体或用户状态加载中时，先不渲染页面
  //   return null;
  // }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* 登录页面 */}
        <Stack.Screen name="login" options={{ headerShown: false }} />
        {/* 主应用页面 */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                {/* 404页面 */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
