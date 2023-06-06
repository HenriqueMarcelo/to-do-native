import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
input: {
    backgroundColor: '#262626',
    borderRadius: 6,
    height: 56,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    flex: 1,
    borderWidth: 1,
    borderColor: '#0D0D0D',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  form: {
    marginTop: -24,
    marginBottom: 48,
    flexDirection: 'row',
    width: '100%',
    gap: 12,
  },
});