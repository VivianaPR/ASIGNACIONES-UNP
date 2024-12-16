import React, { useEffect, useState } from 'react';

interface WebSocketComponentProps {
    registro: string;
}

interface DataState {
    en_gestion: any[];
    por_gestionar: any[];
}

const WebSocketComponent: React.FC<WebSocketComponentProps> = ({ registro }) => {
    const [data, setData] = useState<DataState>({ en_gestion: [], por_gestionar: [] });

    useEffect(() => {
        const socket = new WebSocket(`ws://localhost:8000/ws/some_path/?registro=${registro}`);

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('WebSocket message received:', message);
            setData(message.message); // Actualiza el estado con los datos recibidos
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close();
        };
    }, [registro]);

    return (
        <div>
            <h1>WebSocket Data</h1>
            <h2>En Gestión</h2>
            <ul>
                {data.en_gestion && data.en_gestion.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
            <h2>Por Gestionar</h2>
            <ul>
                {data.por_gestionar && data.por_gestionar.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketComponent;