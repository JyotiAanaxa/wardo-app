import React from 'react';
import { View, Text ,Platform} from 'react-native';
import { styles } from './style';
import { Button } from 'native-base';
import { DefModal } from '../../../components/modals/default-modal/default-modal';
import { DeleteItemIcon } from '../../../icons/delete-item';

export const DeletePermissionModal = ({ isVisible, onSuccess, onCancel }) => {

    const BodyComponent = () => {
        return (
            <View style={styles.modalContainer}>
                <DeleteItemIcon />
                <Text style={styles.modalTitleStyle}>Delete Outfit</Text>
                <Text style={styles.modalTxtStyle}>Are you sure you want to remove this item?</Text>

                <View style={styles.btnRowContainer}>
                    <Button
                        onPress={onCancel}
                        style={styles.activeBtnContainer}
                    >
                        <Text style={styles.activebtnTxtStyle}>Cancel</Text>
                    </Button>

                    <Button
                        onPress={onSuccess}
                        style={styles.inactiveBtnContainer}
                    >
                        <Text style={styles.inactivebtnTxtStyle}>Delete</Text>
                    </Button>
                </View>
            </View>
        );
    }
    return (
        <DefModal
            isVisible={isVisible}
            onCancel={onCancel}
            body={<BodyComponent />}
        />
    );
}


export default DeletePermissionModal;