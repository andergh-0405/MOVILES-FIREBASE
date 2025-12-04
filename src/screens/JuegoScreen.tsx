import React, { useState, useEffect } from 'react';
import {View,Text,TextInput,Pressable,StyleSheet,Alert,} from 'react-native';

export const JuegoScreen: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [guess, setGuess] = useState<string>('');
  const [message, setMessage] = useState<string>('¡Adivina un número entre 1 y 100!');
  const [attempts, setAttempts] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(randomNum);
    console.log('Número secreto:', randomNum);
  }, []);

  const handleInputChange = (value: string) => {
    if (/^\d*$/.test(value)) {
      setGuess(value);
    }
  };

  const handleSubmit = () => {
    const guessNum = parseInt(guess, 10);

    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      Alert.alert('Entrada inválida', 'Ingresa un número entre 1 y 100.');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (guessNum === targetNumber) {
      setMessage(`🎉 ¡Correcto! Era ${targetNumber}.\nLo lograste en ${newAttempts} intentos.`);
      setGameOver(true);
    } else if (guessNum < targetNumber) {
      setMessage('🔽 Demasiado bajo\n¡Intenta un número más alto!');
    } else {
      setMessage('🔼 Demasiado alto\n¡Intenta un número más bajo!');
    }

    setGuess('');
  };

  const handleRestart = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setTargetNumber(randomNum);
    setGuess('');
    setMessage('¡Adivina un número entre 1 y 100!');
    setAttempts(0);
    setGameOver(false);
    console.log('Numero secreto:', randomNum);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🔢 Adivina el Número</Text>
        
        <Text style={styles.attempts}>Intentos: {attempts}</Text>

        <Text style={styles.message}>{message}</Text>

        {!gameOver ? (
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={guess}
              onChangeText={handleInputChange}
              placeholder="1-100"
              keyboardType="numeric"
              maxLength={3}
            />
            <Pressable style={styles.guessButton} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Adivinar</Text>
            </Pressable>
          </View>
        ) : (
          <Pressable style={styles.restartButton} onPress={handleRestart}>
            <Text style={styles.buttonText}>Jugar de nuevo</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa', 
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8, 
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#006064', 
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  attempts: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00838f', 
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 28,
    color: '#263238', 
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    borderWidth: 2,
    borderColor: '#80deea', 
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: '#006064',
    backgroundColor: '#f1f8e9', 
    flex: 1,
    maxWidth: 120,
  },
  guessButton: {
    backgroundColor: '#00bfa5', 
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 14,
    minWidth: 100,
    alignItems: 'center',
  },
  restartButton: {
    backgroundColor: '#00acc1', 
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 14,
    minWidth: 180,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});