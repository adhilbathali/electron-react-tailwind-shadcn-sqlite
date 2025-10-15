import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import { Button } from './components/ui/button';
import TodoBox from './components/todo';

const root = createRoot(document.body);
root.render(
    <div>
    <main className="min-h-screen flex items-center justify-center bg-background">
        <TodoBox/>
    </main>
    </div>
);