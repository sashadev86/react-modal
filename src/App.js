import { useState } from 'react';
import './index.scss';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);


  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>
        ✨ Открыть окно
      </button>

      <Modal open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='' />
        <button>Кнопка</button>
        <h3>Заголовок</h3>
      </Modal>
    </div>
  );
}

export default App;
