import { Input } from 'antd';
import '../styles/overlay.css';

export const Overlay = () => {
  return (
      <section className="fixed right-0 bottom-0 flex justify-end min-w-60 mr-20 mb-14 pointer-events-none">
        <div className="container">
          <h1 className='text-2xl font-bold p-4' style={{ color: '#ff63d2'}}>Search for a pattern</h1>
          <input type='text' className='search glass p-2 w-full text-xl' />
        </div>
      </section>
  );
}
