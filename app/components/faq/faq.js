import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { FaqOpenIcon } from '../../icons/faq-open';
import { FaqCloseIcon } from '../../icons/faq-close';

export const FAQ = ({ faqItems, style }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(false);

    const toggleFaqQuestion = () => {
        setIsOpen(!isOpen);
    }

    return (
        <View style={[styles.contentContainer, style]}>
            {faqItems.map((item, index) => (
                <View style={styles.accordionContainer} key={index}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleStyle}>{item.title}</Text>
                        <TouchableOpacity onPress={() => {
                            index === activeIndex ? toggleFaqQuestion() : setIsOpen(true);
                            setActiveIndex(index);
                        }}
                            style={styles.touchableContainer}>
                            <View style={styles.toggleIconContainer}>
                                {isOpen && activeIndex === index ? <FaqCloseIcon /> : <FaqOpenIcon />}
                            </View>
                        </TouchableOpacity>
                    </View>
                    {isOpen && activeIndex === index && <Text style={styles.bodyTxtStyle}>{item.body}</Text>}
                </View>
            ))}
        </View>
    );
}

export default FAQ;
