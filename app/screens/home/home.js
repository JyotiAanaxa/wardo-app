import React, { useState, useEffect } from 'react';
import { RootNavigator, StylistRootNavigator } from '../../navigation/bottom-navigation';
import AuthService, { userRoleSubject } from '../../services/auth';
import { AppConstants } from '../../utils/app-constants';
import { FlexContainer } from '../../utils/app-container';
import { Loader } from '../../components/loader/loader';
import { Colors } from '../../theme';

export const Home = () => {
    const [currentRole, setCurrentRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getUserCurrentRole = async () => {
        const userRole = await AuthService.getUserRole();
        setCurrentRole(userRole);
        setIsLoading(false);
    }

    const userRoleSubjectSubscribe = () => {
        userRoleSubject.subscribe(() => {
            getUserCurrentRole();
        });
        return () => { };
    }

    const setConfigData = async () => {
        AuthService.config().subscribe(
            async (config) => { },
            (err) => {
                if (err && err.response) {
                    DEFAULT_ERROR_CALLBACK(err)
                }
            }
        )
    }


    useEffect(() => { userRoleSubjectSubscribe(); }, [userRoleSubject]);
    useEffect(() => { setConfigData() }, []);

    return (
        isLoading ? <FlexContainer>
            <Loader color={Colors.PRIMARY} size={40} />
        </FlexContainer> : currentRole === AppConstants.ROLE.CONSUMER ? <RootNavigator /> : <StylistRootNavigator />
    );
}

export default Home;