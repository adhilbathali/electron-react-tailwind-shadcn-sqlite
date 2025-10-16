import TodoBox from './components/todo';
import electron from './asset/electron-icon.svg';
import reactJs from './asset/react-js-icon.svg';
import tailwindCss from './asset/tailwind-css-icon.svg';
import shadcnUi from './asset/shadcn-ui-icon.svg';
import sqlite from './asset/sqlite-icon.svg';
import './App.css'


function App() {
  const icons = [electron, reactJs, tailwindCss, shadcnUi, sqlite];

  return (
    <>
      <main className="min-h-screen flex flex-col gap-10 items-center justify-center">
        <div className="flex gap-4">
            {icons.map((src, index) => (
                <img key={index} src={src} className="w-15 h-15" />
            ))}
        </div>
        <TodoBox/>
    </main>
    </>
  )
}

export default App