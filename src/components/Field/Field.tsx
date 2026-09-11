import React from 'react';
import dayjs, { type Dayjs } from 'dayjs';
import {
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
} from 'antd';

import type { ProfileField } from '../../types/profile';

import './Field.css';

interface FieldProps {
    field: ProfileField;
}

type FormItemExtraProps = Pick<
    React.ComponentProps<typeof Form.Item>,
    'getValueProps' | 'normalize'
>;

const Field: React.FC<FieldProps> = ({ field }) => {
    if (field.hidden) {
        return null;
    }

    let control: React.ReactNode;
    let extraFormItemProps: FormItemExtraProps = {};

    switch (field.type) {
        case 'number':
            control = (
                <InputNumber
                    className="profile-field-full-width"
                    disabled={field.disabled}
                />
            );
            break;

        case 'text':
            control = (
                <Input.TextArea rows={4} disabled={field.disabled} />
            );
            break;

        case 'date':
            control = (
                <DatePicker
                    className="profile-field-full-width"
                    format="DD.MM.YYYY"
                    disabled={field.disabled}
                />
            );

            extraFormItemProps = {
                getValueProps: (value?: string | null) => ({
                    value: value ? dayjs(value) : undefined,
                }),
                normalize: (value?: Dayjs | null) =>
                    value ? value.format('YYYY-MM-DD') : null,
            };
            break;

        case 'select':
            control = (
                <Select
                    className="profile-field-full-width"
                    options={field.options}
                    disabled={field.disabled}
                    allowClear
                />
            );
            break;

        case 'checkbox':
            control = (
                <Checkbox.Group
                    options={field.options}
                    disabled={field.disabled}
                />
            );
            break;

        case 'radio':
            control = (
                <Radio.Group
                    options={field.options}
                    disabled={field.disabled}
                />
            );
            break;

        case 'string':
        default:
            control = <Input disabled={field.disabled} />;
            break;
    }

    return (
        <Form.Item
            name={field.name}
            label={field.label}
            {...extraFormItemProps}
        >
            {control}
        </Form.Item>
    );
};

export default Field;