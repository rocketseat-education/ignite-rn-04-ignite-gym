import { useContext } from 'react';

import { useTheme, Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthContext } from '@contexts/AuthContext';

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } = useTheme();

  const contextData = useContext(AuthContext);

  console.log("USUÁRIO LOGADO =>", contextData);

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}