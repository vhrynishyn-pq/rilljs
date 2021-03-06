import React, { useState } from 'react';

import { InputField } from '../../../Components';
import { Text } from '../../../../library';
import { DataDrawerProps } from '../../props';

export interface TextDataDrawerProps extends DataDrawerProps<string, Text> {
}

export function TextDataDrawer(props: TextDataDrawerProps) {
    const {
        value,
        options,
        onValueChange
    } = props;

    const { readonly } = options;
    const [, redraw] = useState({});

    function onChange(event: React.FormEvent<HTMLInputElement>) {
        const v = event.currentTarget.value;
        onValueChange(v);
        redraw({});
    }

    return (
        <InputField
            value={value.value || ''}
            onChange={onChange}
            disabled={readonly}
        />
    );    
}