import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

import { MantineProvider } from '@mantine/core'
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'FurrApp';

createInertiaApp({
    title: (title) => `${title} / ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#fa8000',
    },
});
/*
 CONFIGURACIÓN CON MANTINE (AÑADIR TEMAS: CLARO|OSCURO)
<MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'light',}}>
    <App {...props} />
</MantineProvider>
*/