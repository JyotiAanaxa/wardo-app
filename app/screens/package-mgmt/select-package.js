import Bro from 'brototype';
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ThemeButton from '../../components/buttons/theme-button';
import { BottomHalfModal } from '../../components/modals/bottom-half-modal/bottomhalf-modal';
import { FillQuestionIcon } from '../../icons/fill-question';
import { heightIntoDP } from '../../utils/app-util';
import { styles } from './style';
import { Colors } from '../../theme';
import Modal, { ModalContent } from 'react-native-modals';

export const SelectPackageModal = ({ isVisible, onSwipeHide, pckgTemplate, pckgObj, updatePckgSubmit, setPackageIcon }) => {
    const packageService = Bro(pckgTemplate).iCanHaz('packages');
    const [service, selectedService] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const BodyComponent = () => {
        return (
            <View style={[styles.modalContainer, { flex: 1 }]}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={[styles.modalHeading, { marginBottom: 30 }]}>
                    <Text style={styles.heading}>Select A Package</Text>
                </View>

                <ScrollView style={{ width: '85%', alignSelf: 'center', marginBottom: heightIntoDP(140) }}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ width: '100%' }}>
                        <Text style={styles.modalTitleStyle}>
                            What type of service would you like to add?
                        </Text>
                    </View>
                    <View style={styles.serviceRowContainer}>
                        {packageService.length > 0 && packageService.map((item, index) => (
                            <TouchableOpacity onPress={() => {
                                selectedService(item);
                                setPackageIcon(item);
                                setActiveIndex(index);
                            }} key={index}
                                style={{ width: '33.33%' }}>
                                <View style={[styles.serviceContainer, { borderWidth: 2, borderColor: activeIndex === index ? Colors.PRIMARY : Colors.TRANSPARENT }]}>
                                    <Image
                                        source={{ uri: item.iconUrl }}
                                        resizeMode={'contain'}
                                        style={{ height: '85%', width: '85%', borderRadius: 18, aspectRatio: 1 }}
                                    />
                                </View>
                                <Text style={styles.serviceTxtStyle}>{item.value}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

                <>
                    <View style={styles.saveContainer} />
                    {/* <View style={styles.quesPackageRow}>
                        <FillQuestionIcon />
                        <Text style={styles.quesPckgTxtStyle}>Don't see the package you want to add?</Text>
                    </View> */}
                    <ThemeButton
                        buttonStyle={styles.saveBtnContainer}
                        label='Save'
                        labelStyle={styles.labelStyle}
                        onSubmit={() => {
                            pckgObj.selectedPackage = service.value;
                            pckgObj.selectedPackageDetails = {
                                iconUrl: service.iconUrl,
                                key: service.key,
                                value: service.value
                            }
                            updatePckgSubmit(pckgObj);
                            onSwipeHide();
                        }}
                    />

                </>
            </View>
        );
    }
    return (
        <Modal.BottomModal
            visible={isVisible}
            modalStyle={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
            width={1}
            height={0.93}
            onSwipeOut={onSwipeHide}
            style={{ padding: 0 }}
        >
            <BodyComponent />
        </Modal.BottomModal>
        // <BottomHalfModal
        //     isVisible={isVisible}
        //     onSwipeHide={onSwipeHide}
        //     body={<BodyComponent />}
        //     bodyContainer={{ paddingBottom: 0, height: heightPercentageToDP('93%') }}
        // />
    );
}

export default SelectPackageModal;
