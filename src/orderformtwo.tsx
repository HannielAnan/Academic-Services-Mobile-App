import React, { useState, useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import emailjs from 'emailjs-com';

interface FormData {
  subject_name?: string;
  course_code?: string;
  pages?: number;
  words?: number;
  date?: string;
}

interface ExtendedFormData extends FormData {
  name: string;
  email: string;
  whatsapp: string;
  referencingStyle: string;
  additionalInfo: string;
}

const SecondForm: React.FC<{ onClose: () => void; firstFormData: FormData }> = ({
  onClose,
  firstFormData,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [referencingStyle, setReferencingStyle] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef<PhoneInput>(null);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !whatsapp.trim()) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    const combinedData: ExtendedFormData = {
      ...firstFormData,
      name: name.trim(),
      email: email.trim(),
      whatsapp: formattedValue,
      referencingStyle: referencingStyle.trim(),
      additionalInfo: additionalInfo.trim(),
    };

    console.log('Submitting combined data:', combinedData);
    await sendCombinedDataEmail(combinedData);
  };

  const sendCombinedDataEmail = async (combinedData: ExtendedFormData) => {
    try {
      const emailResult = await emailjs.send(
        'service_6hmtgb9',
        'template_6uc1caw',
        combinedData as any,
        '_zeHKYr1xaZ2stu8-'
      );
      console.log('Order email sent to admin!', emailResult.text);

      const userConfirmationResult = await emailjs.send(
        'service_6hmtgb9',
        'template_6uc1caw',
        {
          ...combinedData,
          to_email: combinedData.email,
        },
        '_zeHKYr1xaZ2stu8-'
      );
      console.log('Confirmation email sent to user!', userConfirmationResult.text);

      Alert.alert("Success", "Form submitted successfully", [
        { text: "OK", onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.error('Failed to send emails.', error);
      Alert.alert("Error", "There was a problem submitting your form. Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={[styles.headingStyle3, { color: 'black' }]}
        onChangeText={setName}
        value={name}
        placeholder="Name"
        placeholderTextColor="black" 
      />
      <TextInput
      style={[styles.headingStyle3, { color: 'black' }]}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        placeholderTextColor="black" 
      />
      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="GB" // Set default code to GB for United Kingdom
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
          setWhatsapp(text);
        }}
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textInputContainer} 
        withDarkTheme
        withShadow
        autoFocus
      />
      <TextInput
       style={[styles.headingStyle3, { color: 'black' }]}
        onChangeText={setReferencingStyle}
        value={referencingStyle}
        placeholder="Referencing Style"
        placeholderTextColor="black" 
      />
      <TextInput
    style={[styles.headingStyle3, { color: 'black' }]}
        onChangeText={setAdditionalInfo}
        value={additionalInfo}
        placeholder="Additional Info"
        placeholderTextColor="black" 
      />
      <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    padding: 10,
    color: 'black',
  
  },
  headingStyle3: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 16, // Larger font size
    backgroundColor: 'white',
  },
  textInputContainer: {
    paddingVertical: 0, // Ensure padding is not adding extra height
    paddingHorizontal: 0,
    width: 5,
  },
  phoneInputContainer: {
    flex: 0, // Do not allow the container to grow
    // Other styles as necessary
    width: 275,
  },
  // Add more styles as needed
  closeButton: {
    marginTop: -40, // Move the close button up above the submit button
    alignSelf: 'flex-end', // Align the close button to the right
    marginRight: 20, // Add some margin to the right
    backgroundColor: '#ccc', // A different background color for the close button
    width: 30, // A smaller fixed width
    height: 30, // A smaller fixed height
    borderRadius: 15, // Half the width/height to make it circular
    justifyContent: 'center', // Center the '×' symbol vertically
    alignItems: 'center', // Center the '×' symbol horizontally
  },
  closeButtonText: {
    color: 'black', // Color of the '×' symbol
    fontSize: 24, // Larger font size to make the '×' symbol more prominent
    fontWeight: 'bold', // Make the '×' symbol bold
  },
});

export default SecondForm;
