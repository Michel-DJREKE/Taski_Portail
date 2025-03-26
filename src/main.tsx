import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n/i18n.ts';
import { Suspense } from 'react';
createRoot(document.getElementById("root")!).render(
<Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Loading translations...</div>}>
<App />
</Suspense>
);