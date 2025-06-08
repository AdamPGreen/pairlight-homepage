'use client';

import * as React from 'react';
import { Input } from '@/components/ui/input';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';

interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: boolean;
}

export function PhoneInput({ value, onChange, onBlur, error, ...props }: PhoneInputProps) {
  const [formattedValue, setFormattedValue] = React.useState(value);

  React.useEffect(() => {
    if (value) {
      try {
        const phoneNumber = parsePhoneNumber(value);
        if (phoneNumber) {
          setFormattedValue(phoneNumber.formatInternational());
        }
      } catch {
        setFormattedValue(value);
      }
    } else {
      setFormattedValue('');
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    
    // Remove any non-digit characters except + for parsing
    const digitsOnly = inputValue.replace(/[^\d+]/g, '');
    
    // If the user is typing and hasn't included +, add it
    if (digitsOnly && !digitsOnly.startsWith('+')) {
      inputValue = '+' + digitsOnly;
    }
    
    setFormattedValue(inputValue);
    
    try {
      const phoneNumber = parsePhoneNumber(inputValue);
      if (phoneNumber) {
        onChange(phoneNumber.formatInternational());
      } else {
        onChange(inputValue);
      }
    } catch {
      onChange(inputValue);
    }
  };

  const handleBlur = () => {
    try {
      const phoneNumber = parsePhoneNumber(formattedValue);
      if (phoneNumber) {
        setFormattedValue(phoneNumber.formatInternational());
        onChange(phoneNumber.formatInternational());
      }
    } catch {
      // Keep the current value if parsing fails
    }
    onBlur?.();
  };

  return (
    <Input
      {...props}
      type="tel"
      value={formattedValue}
      onChange={handleChange}
      onBlur={handleBlur}
      className={error ? 'border-red-500' : ''}
      placeholder="+1 (555) 123-4567"
    />
  );
} 