'use client';

import * as React from 'react';
import { Input } from '@/components/ui/input';

interface SocialInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: boolean;
  platform: 'twitter' | 'instagram';
}

export function SocialInput({ value, onChange, onBlur, error, platform, ...props }: SocialInputProps) {
  const [formattedValue, setFormattedValue] = React.useState(value);

  React.useEffect(() => {
    setFormattedValue(value);
  }, [value]);

  const normalizeSocialValue = (input: string): string => {
    if (!input) return '';
    
    // Remove any whitespace
    input = input.trim();
    
    // If it's already a valid URL, return it
    try {
      new URL(input);
      return input;
    } catch {
      // If not a valid URL, handle as a handle
    }

    // Remove @ if present
    const handle = input.startsWith('@') ? input.slice(1) : input;
    
    // If it's a handle, format it with @
    if (handle && !handle.includes('.')) {
      return `@${handle}`;
    }

    // If it looks like a URL but missing protocol, add https://
    if (handle.includes('.') && !handle.startsWith('http://') && !handle.startsWith('https://')) {
      return `https://${handle}`;
    }

    return input;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setFormattedValue(inputValue);
    onChange(inputValue);
  };

  const handleBlur = () => {
    const normalizedValue = normalizeSocialValue(formattedValue);
    setFormattedValue(normalizedValue);
    onChange(normalizedValue);
    onBlur?.();
  };

  const getPlaceholder = () => {
    switch (platform) {
      case 'twitter':
        return '@username';
      case 'instagram':
        return '@username';
      default:
        return '';
    }
  };

  return (
    <Input
      {...props}
      type="text"
      value={formattedValue}
      onChange={handleChange}
      onBlur={handleBlur}
      className={error ? 'border-red-500' : ''}
      placeholder={getPlaceholder()}
    />
  );
} 