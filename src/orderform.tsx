import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { StackNavigationProp } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';
import emailjs from 'emailjs-com';
import SecondForm from './orderformtwo';
import FooterNav from './FooterNav';

type MyFormStackParamList = {
  MyForm: undefined;
  SecondForm: { firstFormData: FormData };
  orderformtwo: { firstFormData: FormData };
};

interface FormData {
  subject_name: string;
  course_code: string;
  pages: number;
  words: number;
  date: string;
}

interface MyFormProps {
  navigation: StackNavigationProp<MyFormStackParamList, 'MyForm'>;
}

const MyForm: React.FC<MyFormProps> = ({ navigation }) => {
  const [subjectName, setSubjectName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [count, setCount] = useState(1);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [formData, setFormData] = useState<FormData | null>(null);

  const submitForm = async () => {
    const submissionData: FormData = {
      subject_name: subjectName,
      course_code: courseCode,
      pages: count,
      words: count * 250,
      date: date.toISOString(),
    };

    try {
      await firestore().collection('form').add(submissionData);
      console.log('Form submitted successfully');
      setFormData(submissionData); // Save the form data
      setShowSecondForm(true); // Display the SecondForm modal
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const sendEmail = async (data: FormData) => {
    try {
      const emailData = {
        ...data,
        date: data.date,
      };

      console.log('Sending email with data:', emailData);

      const emailResult = await emailjs.send(
        'service_6hmtgb9',
        'template_6uc1caw',
        emailData,
        '_zeHKYr1xaZ2stu8-'
      );
      console.log('Email successfully sent!', emailResult.text);
    } catch (error) {
      console.error('Failed to send email.', error);
    }
  };

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1));
  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showDatepicker = () => setShowDatePicker(true);
  const formatDate = (date: Date) => new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

  return (
    <><ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={[styles.headingStyle2, { color: 'black' }]} allowFontScaling={false}>Subject Area</Text>
        <TextInput
          style={[styles.headingStyle3, { color: 'black' }]}
          onChangeText={setSubjectName}
          value={subjectName}
          placeholder="Enter Subject Area"
          placeholderTextColor="black" 
          allowFontScaling={false}
          />
        <Text style={[styles.headingStyle2, { color: 'black' }]} allowFontScaling={false}>Assignment Title</Text>
        <TextInput
          style={[styles.headingStyle3, { color: 'black' }]}
          onChangeText={setCourseCode}
          value={courseCode}
          placeholder="Enter Assignment Title"
          keyboardType="default"
          placeholderTextColor="black" 
          allowFontScaling={false}/>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={decrement} style={styles.button}>


            <Text style={styles.buttonText} allowFontScaling={false}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText} allowFontScaling={false}>{`${count} Page / ${count * 250} words`} </Text>
          <TouchableOpacity onPress={increment} style={styles.button}>
            <Text style={styles.buttonText} allowFontScaling={false}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.headingStyle2, { color: 'black' }]} allowFontScaling={false}>Assignment Deadline</Text>
        <TouchableOpacity onPress={showDatepicker} style={styles.datePickerButton}>
          <Text style={styles.datePickerText}>{formatDate(date)}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            />
        )}
        <View style={styles.submitButtonContainer} >
          <TouchableOpacity
            style={styles.submitButton}
            onPress={submitForm}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        {/* Modal to show SecondForm */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showSecondForm}
          onRequestClose={() => {
            setShowSecondForm(false);
          } }>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setShowSecondForm(false)}>
                <Text style={styles.closeButtonText} allowFontScaling={false}>×</Text>
              </TouchableOpacity>
              {formData && <SecondForm onClose={() => setShowSecondForm(false)} firstFormData={formData} />}
            </View>
          </View>
        </Modal>
      </SafeAreaView>

    </ScrollView><FooterNav /></>
  );
 
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(60, 60, 60)', // Semi-transparent background
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'rgb(60, 60, 60)',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  input: {
    height: 40,
    marginHorizontal: 12,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    fontSize: 16, // Larger font size
    backgroundColor: 'white',
  },
  headingStyle3: {
    height: 40,
    marginHorizontal: 12,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    fontSize: 16, // Larger font size
    backgroundColor: 'white',
  },
  label: {
    marginHorizontal: 12,
    marginVertical: 6,
    fontWeight: 'bold',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#24336A',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  countText: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: 'black', // Set text color to black explicitly
  },
  datePickerButton: {
    height: 40,
    marginHorizontal: 12,
    marginVertical: 6,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
  },
  datePickerText: {
    color: 'black',
  },
  submitButtonContainer: {
    marginHorizontal: 12,
    marginVertical: 6,
  },
  submitButton: {
    backgroundColor: '#E31838',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalView: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
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
  headingStyle2: {
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
  },
});

export default MyForm;
