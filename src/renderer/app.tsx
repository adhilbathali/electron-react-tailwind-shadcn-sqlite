import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { Button } from './components/ui/button';

const root = createRoot(document.body);
root.render(
    <div>
        <Button>Hello</Button>
    </div>
);