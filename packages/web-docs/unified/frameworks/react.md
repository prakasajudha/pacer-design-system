# React Guide

Complete guide for using PACER components in React applications.

## Installation

```bash
npm install @pacer-ui/react
```

## Setup

### 1. Import Styles

Add the PACER styles to your main entry file:

```tsx
// main.tsx or App.tsx
import '@pacer-ui/react/styles.css';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
```

### 2. Configure Tailwind (Optional)

If you're using Tailwind CSS in your project:

```js
// tailwind.config.js
import { pacerPreset } from '@pacer-ui/tailwind';

export default {
  presets: [pacerPreset],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@pacer-ui/react/**/*.{js,jsx}'],
};
```

## Basic Usage

```tsx
import { Button, Card, Input, Avatar } from '@pacer-ui/react';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email:', email);
  };

  return (
    <Card>
      <h2>Contact Form</h2>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        fullWidth
      />
      <Button variant="primary" onClick={handleSubmit} fullWidth>
        Submit
      </Button>
    </Card>
  );
}
```

## Component Patterns

### State Management

```tsx
import { Button, Input } from '@pacer-ui/react';
import { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <>
      <Input value={formData.name} onChange={handleChange('name')} />
      <Input value={formData.email} onChange={handleChange('email')} />
      <Button onClick={() => console.log(formData)}>Submit</Button>
    </>
  );
}
```

### Form Validation

```tsx
import { Input, Button } from '@pacer-ui/react';
import { useState } from 'react';

function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validate = () => {
    if (!email.includes('@')) {
      setError('Invalid email address');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Valid!', email);
    }
  };

  return (
    <>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        status={error ? 'error' : 'default'}
        helperText={error}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}
```

## TypeScript Support

All components are fully typed:

```tsx
import type { ButtonProps, InputProps } from '@pacer-ui/react';

// Type-safe props
const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'lg',
  disabled: false,
};

// Type-safe event handlers
const handleChange: InputProps['onChange'] = (e) => {
  console.log(e.target.value);
};
```

## Composition

```tsx
import { Card, CardHeader, CardContent, CardFooter, Button } from '@pacer-ui/react';

function ProfileCard({ user }) {
  return (
    <Card>
      <CardHeader>
        <img src={user.avatar} alt={user.name} />
        <h3>{user.name}</h3>
      </CardHeader>
      <CardContent>
        <p>{user.bio}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">View Profile</Button>
        <Button variant="primary">Follow</Button>
      </CardFooter>
    </Card>
  );
}
```

## Styling

### Using className

```tsx
<Button className="custom-class">Styled Button</Button>
```

### Using inline styles

```tsx
<Button style={{ marginTop: '1rem' }}>Styled Button</Button>
```

### Using Tailwind

```tsx
<Button className="mt-4 shadow-lg">Styled Button</Button>
```

## Integration with React Router

```tsx
import { Button } from '@pacer-ui/react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate('/home')}>Home</Button>
      <Button onClick={() => navigate('/about')}>About</Button>
    </div>
  );
}
```

## Server-Side Rendering (Next.js)

PACER components work with Next.js:

```tsx
// app/layout.tsx
import '@pacer-ui/react/styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/page.tsx
('use client');

import { Button } from '@pacer-ui/react';

export default function Page() {
  return <Button>Click me</Button>;
}
```

## Testing

### Jest + React Testing Library

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@pacer-ui/react';

test('button click handler', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## Best Practices

### ✅ Do

- Import only the components you need for tree-shaking
- Use TypeScript for type safety
- Handle loading and error states
- Use semantic button variants appropriately

### ❌ Don't

- Don't import the entire library
- Don't override component internals
- Don't skip error handling
- Don't ignore accessibility warnings

## Performance Tips

1. **Code Splitting**: Import components dynamically

```tsx
const Button = lazy(() => import('@pacer-ui/react').then((mod) => ({ default: mod.Button })));
```

2. **Memoization**: Use React.memo for expensive components

```tsx
const MemoizedCard = memo(Card);
```

3. **Virtualization**: For long lists, use react-window

## Examples

See complete examples in our [Storybook](https://storybook.pacer-ui.com).

## Troubleshooting

### Styles not loading

Make sure you import the CSS:

```tsx
import '@pacer-ui/react/styles.css';
```

### TypeScript errors

Ensure TypeScript version is 5+:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

## Next Steps

- Browse [All Components](/components/)
- Learn about [Design Tokens](/tokens)
- View [Live Examples](https://storybook.pacer-ui.com)
