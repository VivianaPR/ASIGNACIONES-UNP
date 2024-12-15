import React, { useEffect, useState } from 'react';

const WebSocketComponent: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        // Establecer la conexión WebSocket
        const socket = new WebSocket('ws://localhost:8000/ws/some_path/');

        // Evento cuando se abre la conexión
        socket.onopen = () => {
            console.log('Conexión WebSocket establecida.');
        };

        // Evento cuando se recibe un mensaje
        socket.onmessage = (event) => {
            setMessage(event.data);
        };

        // Limpiar la conexión cuando el componente se desmonta
        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h1>Demo de WebSocket</h1>
            <p>Mensaje recibido: {message}</p>
        </div>
    );
};

export default WebSocketComponent;