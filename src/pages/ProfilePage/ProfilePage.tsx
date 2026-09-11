import React from 'react';
import {
    Col,
    Row,
    Typography,
    message,
} from 'antd';

import Page from '../../components/Page/Page';
import EditView from '../../components/EditView/EditView';

import { profileFields } from '../../constants/profileFields';
import { updateProfile } from '../../store/slices/profileSlice';

import {
    useAppDispatch,
    useAppSelector,
} from '../../store/hooks';

import type { ProfileState } from '../../types/profile';

const { Title, Paragraph } = Typography;

const ProfilePage: React.FC = () => {
    const dispatch = useAppDispatch();

    const profile = useAppSelector(
        (state) => state.profile,
    );

    const [messageApi, contextHolder] =
        message.useMessage();

    const handleSubmit = (values: ProfileState) => {
        dispatch(updateProfile(values));

        messageApi.success(
            'Профиль успешно сохранен',
        );
    };

    return (
        <Page>
            {contextHolder}

            <Title level={1}>Мой профиль</Title>

            <Paragraph type="secondary">
                Здесь вы можете посмотреть и изменить
                информацию о своем профиле.
            </Paragraph>

            <Row>
                <Col xs={24}>
                    <EditView
                        fields={profileFields}
                        values={profile}
                        onSubmit={handleSubmit}
                    />
                </Col>
            </Row>
        </Page>
    );
};

export default ProfilePage;