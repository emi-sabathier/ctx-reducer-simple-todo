import React, { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './assets/styles.css';
import add from './assets/images/plus-box.png';
import { Header } from './components/Header';
import { useStore } from './store/StoreCtx';

function App() {
    const { dispatch } = useStore();
    const [value, setValue] = useState<string>('');

    return (
        <div>
            <Header />
            <section className="input-section">
                <input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'ADD_TODO',
                            payload: {
                                id: uuidv4(),
                                content: value,
                            },
                        })
                    }>
                    <img src={add} alt="ajouter une note" />
                </button>
            </section>
        </div>
    );
}

export default App;
