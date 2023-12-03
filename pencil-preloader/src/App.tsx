import Pencil from './components/PreloaderPencil';

export const App = () => {
  return (
    <div
      style={{ width: '300px', backgroundColor: 'hsl(var(--hue), 90%, 90%)' }}
    >
      <Pencil />
    </div>
  );
};

export default App;
