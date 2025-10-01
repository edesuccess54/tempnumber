import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  placeholder?: string;
}

const InputField = forwardRef<TextInput, InputFieldProps>(
  ({ placeholder, ...rest }, ref) => (
    <TextInput
      ref={ref}
      placeholder={placeholder}
      placeholderTextColor="#283618"
      className="text-base border border-border-default text-text-primary h-[60px] rounded-2xl px-5  mb-8"
      {...rest}
    />
  )
);

export default InputField