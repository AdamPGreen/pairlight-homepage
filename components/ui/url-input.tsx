'use client';

import * as React from 'react';
import { Input } from '@/components/ui/input';

interface UrlInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: boolean;
}

export function UrlInput({ value, onChange, onBlur, error, ...props }: UrlInputProps) {
  const [formattedValue, setFormattedValue] = React.useState(value);

  React.useEffect(() => {
    setFormattedValue(value);
  }, [value]);

  const normalizeUrl = (url: string): string => {
    if (!url) return '';
    
    // Remove any whitespace
    url = url.trim();
    
    // If it's already a valid URL, return it
    try {
      new URL(url);
      return url;
    } catch {
      // If not a valid URL, try to fix it
    }

    // If it starts with www., add https://
    if (url.startsWith('www.')) {
      return `https://${url}`;
    }

    // If it doesn't start with http:// or https://, add https://
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return `https://${url}`;
    }

    return url;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setFormattedValue(inputValue);
    onChange(inputValue);
  };

  const handleBlur = () => {
    const normalizedUrl = normalizeUrl(formattedValue);
    setFormattedValue(normalizedUrl);
    onChange(normalizedUrl);
    onBlur?.();
  };

  return (
    <Input
      {...props}
      type="url"
      value={formattedValue}
      onChange={handleChange}
      onBlur={handleBlur}
      className={error ? 'border-red-500' : ''}
      placeholder="example.com"
    />
  );
} 