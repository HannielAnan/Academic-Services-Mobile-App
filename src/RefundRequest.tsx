import React, { useState } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import emailjs from 'emailjs-com';

const RefundRequestForm: React.FC = () => {
  const [name, setName] = useState('');
  const [order, setOrder] = useState('');
  const [subject, setSubject] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    const templateParams = {
      name,
      order,
      subject,
      reason,
    };

    emailjs.send(
      'service_6hmtgb9',
      'template_cre2qif',
      templateParams,
      '_zeHKYr1xaZ2stu8-'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      Alert.alert('Form Submitted', 'Your refund request has been submitted successfully.');
    }).catch((err) => {
      console.error('FAILED...', err);
      Alert.alert('Submission Failed', 'There was an error submitting your refund request. Please try again.');
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
        allowFontScaling={false}
      />
      <TextInput
        label="Order ID"
        value={order}
        onChangeText={text => setOrder(text)}
        style={styles.input}
        allowFontScaling={false}
      />
      <TextInput
        label="Subject"
        value={subject}
        onChangeText={text => setSubject(text)}
        style={styles.input}
        allowFontScaling={false}
      />
      <TextInput
        label="Reason"
        value={reason}
        onChangeText={text => setReason(text)}
        multiline
        style={styles.input}
        allowFontScaling={false}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 12,
    //backgroundColor: '#E31838',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#E31838',
  },
});

export default RefundRequestForm;
