// src/theme/appStyles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa', // Fondo cyan claro
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: '800',
    color: '#006064',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#546e7a',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputStyle: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    marginBottom: 16,
    elevation: 2, // Sombra en Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: '#00acc1',
    borderRadius: 14,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textRedirect: {
    fontSize: 15,
    color: '#00838f',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  // Estilos para el Snackbar (mensajes)
  snackbar: {
    borderRadius: 10,
    marginBottom: 20,
  },
  containerActivity:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",

}
});