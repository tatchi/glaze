import { useStyling } from 'glaze';
import * as React from 'react';

const Foo = {
  useCustomHook: () => {
    return <div sx={{ color: 'blue' }}>hello</div>;
  },
};

const App = () => {
  const Element = Foo.useCustomHook();
  const InnerComponent = () => <div sx={{ color: 'blue' }}>hello</div>;

  return (
    <p
      sx={{
        px: 4,
        color: 'white',
        bg: 'red',
      }}
    >
      Hello, world!
    </p>
  );
};
