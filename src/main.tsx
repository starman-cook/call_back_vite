import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const div: HTMLDivElement = document.createElement('div');
document.body.appendChild(div);

ReactDOM.createRoot(div!).render(<App />);
