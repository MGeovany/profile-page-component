import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-rapi-ui";
import Login from "./src/screens/auth/Login";
import Register from "./src/screens/auth/Register";

export default function App() {
  return (
    <ThemeProvider theme="dark">
      <Login />
    </ThemeProvider>
  );
}
