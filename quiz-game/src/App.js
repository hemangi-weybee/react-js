import { Routes, Route } from 'react-router-dom';

import './assets/styles/style.scss';

import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';
import ScorePage from './pages/ScorePage';

import { QuestionProvider } from './helpers/questionHelper';

function App() {
  const context = new AudioContext();
  context.resume();

  return (
    <QuestionProvider>
      <main>
        <Routes>
          <Route path='/' element={<HomePage context={context} />}></Route>
          <Route path='question' element={<QuestionPage context={context} />}></Route>
          <Route path='score' element={<ScorePage context={context} />}></Route>
        </Routes>
      </main>
    </QuestionProvider>
  )
}

export default App;
