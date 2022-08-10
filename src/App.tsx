import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { NovelsPage } from './components/NovelsPage';


import { Raarxdeba } from './novelcomponents/Raarxdeba';
import { EveryThingHappens } from './novelcomponents/EveryThingHappens';
import { Ubanshi } from './novelcomponents/Ubanshi';
import { OjaxisQali } from './novelcomponents/OjaxisQali';
import { SxvaDroa } from './novelcomponents/SxvaDroa';
import { AtBusStop } from './novelcomponents/AtBusStop';
import { Ojaxi } from './novelcomponents/Ojaxi';
import { AtChurch } from './novelcomponents/AtChurch';
import { Anegdotebi } from './novelcomponents/Anegdotebi';
import { SiketisPasi } from './novelcomponents/SiketisPasi';
import { IamMan } from './novelcomponents/IamMan';
import { Eka } from './novelcomponents/Eka';
import { Friends } from './novelcomponents/Friends';
import { Life } from './novelcomponents/Life';
import { Lado } from './novelcomponents/Lado';
import { Madlieri } from './novelcomponents/Madlieri';
import { FatherAndGun } from './novelcomponents/FatherAndGun';
import { UcnauriKaci } from './novelcomponents/UcnauriKaci';
import { SchoolMeeting } from './novelcomponents/SchoolMeeting';
import { RasArgGaigebs } from './novelcomponents/RasArGaigebs';
import { Rigi } from './novelcomponents/Rigi';
import { BatoniGivi } from './novelcomponents/BatoniGivi';
import { PatiosaniKaci } from './novelcomponents/PatiosaniKaci';
import { RatomXdebaASe } from './novelcomponents/RatomXdebaAse';
import { LifeRules } from './novelcomponents/LifeRules';
import { BookPresentation } from './novelcomponents/BookPresentation';


const App: React.FC = () => {


  return (
<BrowserRouter>
    <div className="app">
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/novels" element={<NovelsPage />} />

          <Route path="/novels/novel-1" element={<Raarxdeba />} />
          <Route path="/novels/novel-2" element={<EveryThingHappens />} />
          <Route path="/novels/novel-3" element={<Ubanshi />} />
          <Route path="/novels/novel-4" element={<OjaxisQali />} />
          <Route path="/novels/novel-5" element={<SxvaDroa />} />
          <Route path="/novels/novel-6" element={<AtBusStop />} />
          <Route path="/novels/novel-7" element={<Ojaxi />} />
          <Route path="/novels/novel-8" element={<AtChurch />} />
          <Route path="/novels/novel-9" element={<Anegdotebi />} />
          <Route path="/novels/novel-10" element={<SiketisPasi />} />
          <Route path="/novels/novel-11" element={<IamMan />} />
          <Route path="/novels/novel-12" element={<Eka />} />
          <Route path="/novels/novel-13" element={<Friends />} />
          <Route path="/novels/novel-14" element={<Life />} />
          <Route path="/novels/novel-15" element={<Lado />} />
          <Route path="/novels/novel-16" element={<Madlieri />} />
          <Route path="/novels/novel-17" element={<FatherAndGun />} />
          <Route path="/novels/novel-18" element={<UcnauriKaci />} />
          <Route path="/novels/novel-19" element={<SchoolMeeting />} />

          <Route path="/novels/novel-20" element={<RasArgGaigebs />} />
          <Route path="/novels/novel-21" element={<Rigi />} />
          <Route path="/novels/novel-22" element={<BatoniGivi />} />
          <Route path="/novels/novel-23" element={<PatiosaniKaci />} />
          <Route path="/novels/novel-24" element={<RatomXdebaASe />} />
          <Route path="/novels/novel-25" element={<LifeRules />} />
          <Route path="/novels/novel-26" element={<BookPresentation />} />


        </Routes>
      </main>
      <Footer />
    </div>
</BrowserRouter>
  );
}

export default App;
