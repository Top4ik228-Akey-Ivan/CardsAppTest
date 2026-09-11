import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    Col,
    Form,
    Row,
} from 'antd';

import Field from '../Field/Field';

import type { ProfileField, ProfileState } from '../../types/profile';

interface EditViewProps {
    fields: ProfileField[];
    values: ProfileState;
    onSubmit: (values: ProfileState) => void;
}

const EditView: React.FC<EditViewProps> = ({
    fields,
    values,
    onSubmit,
}) => {
    const [form] = Form.useForm<ProfileState>();
    const [isInitialized, setIsInitialized] = useState(false);

    const employmentStatus = Form.useWatch('employmentStatus', form);

    useEffect(() => {
        form.setFieldsValue(values);
        setIsInitialized(true);
    }, [form, values]);

    useEffect(() => {
        if (!isInitialized) {
            return;
        }

        if (employmentStatus === 'student') {
            form.setFieldsValue({
                companyName: '',
                jobPosition: 'Студент',
            });
        }

        if (employmentStatus === 'job_seeker') {
            form.setFieldsValue({
                companyName: '',
                jobPosition: '',
            });
        }
    }, [employmentStatus, isInitialized, form]);

    const preparedFields = fields.map((field) => {
        if (field.name === 'companyName') {
            if (employmentStatus === 'student' || employmentStatus === 'job_seeker') {
                return { ...field, hidden: true };
            }
        }

        if (field.name === 'jobPosition') {
            if (employmentStatus === 'student') {
                return { ...field, disabled: true };
            }

            if (employmentStatus === 'job_seeker') {
                return { ...field, hidden: true };
            }
        }

        return field;
    });

    return (
        <Card title="Редактирование профиля" className="edit-view">
            <Form form={form} layout="vertical" onFinish={onSubmit}>
                <Row gutter={[24, 0]}>
                    {preparedFields.map((field) => (
                        <Col
                            key={field.name}
                            xs={24}
                            md={field.type === 'text' ? 24 : 12}
                        >
                            <Field field={field} />
                        </Col>
                    ))}
                </Row>

                <Button type="primary" htmlType="submit">
                    Сохранить изменения
                </Button>
            </Form>
        </Card>
    );
};

export default EditView;