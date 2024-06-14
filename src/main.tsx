import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const body = document.body;
const div: HTMLDivElement = document.createElement('div');

if (body) {
    document.body.appendChild(div);
    ReactDOM.createRoot(div!).render(<App />);
} else {
    let observer: MutationObserver | null = new MutationObserver(() => {
        const body = document.body;
        if (body) {
            if (observer) {
                observer.disconnect();
                observer = null;
            }

            document.body.appendChild(div);
            ReactDOM.createRoot(div!).render(<App />);
        }
    });
    observer.observe(document, { subtree: true, childList: true });
}
