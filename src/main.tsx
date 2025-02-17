import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Canvas } from '@react-three/fiber'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Canvas camera={{ position: [5, 5, 5] }}>
            <App />
        </Canvas>
    </React.StrictMode>,
)
