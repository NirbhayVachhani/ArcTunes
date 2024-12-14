import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FAQ = () => {
  const navigation = useNavigation();

  const faqs = [
    {
      question: '1️⃣ How do I create a playlist?',
      answer: 'To create a playlist, navigate to your library and tap the "Create Playlist" button.',
    },
    {
      question: '2️⃣ How do I download music for offline listening?',
      answer: 'You can download songs by tapping the download icon next to the content.',
    },
    {
      question: '3️⃣ What is a subscription plan and what are the benefits?',
      answer: 'A subscription plan offers premium features such as ad-free listening, offline downloads, and higher audio quality.',
    },
    {
      question: '4️⃣ How do I create an account and sign in?',
      answer: 'To create an account, go to the sign-up page and follow the instructions. To sign in, enter your credentials on the login page.',
    },
    {
      question: '5️⃣ How do I update my account information?',
      answer: 'You can update your account information in the account settings section of the app.',
    },
    {
      question: '6️⃣ How do I contact customer support?',
      answer: 'You can contact customer support through the help section in the app or by visiting our website.',
    },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Frequently Asked Questions</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <View key={index} style={styles.faqItem}>
              <Text style={styles.question}>{faq.question}</Text>
              <Text style={styles.answer}>{faq.answer}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#1E1E2C',
  },
  header: {
    flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#333',
  },
  headerTitle: {
    color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 10,
  },
  scrollView: {
    flex: 1,
  },
  faqContainer: {
    padding: 20,
  },
  faqItem: {
    marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#333', paddingBottom: 10,
  },
  question: {
    color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 5,
  },
  answer: {
    color: '#fff', fontSize: 16,
  },
});

export default FAQ;
