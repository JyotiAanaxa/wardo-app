import React, { useState } from 'react';
import { FooterSteps } from '../../components/form/footer-steps';
import { FormHeader } from '../../components/form/form-header';
import { Heading } from '../../components/heading/heading';
import { FlexContainer } from '../../utils/app-container';
import { styles } from './style';

export const BrandStores = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    }

    return (
        <FlexContainer style={styles.container}>
            <FormHeader
                step={1}
                nextText={'Skip'}
                backSubmit={() => { navigation.goBack() }}
                textStyles={styles.headerTxtStyle} />
            <Heading
                title='Brands & Stores'
                subTitle='Your Preferences'
            />
            <FooterSteps />
        </FlexContainer>
    );

}

export default BrandStores;