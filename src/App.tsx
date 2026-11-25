import { HubShell } from './components/layout/HubShell';
import { HubProvider } from './context/HubContext';
import { EventsSection } from './features/events/EventsSection';
import { FactLibrarySection } from './features/facts/FactLibrarySection';
import { FeedbackSection } from './features/feedback/FeedbackSection';
import { HeroFactSection } from './features/hero/HeroFactSection';
import { MediaLibrarySection } from './features/media/MediaLibrarySection';
import { StoriesSection } from './features/stories/StoriesSection';
import { LeaderToolkitSection } from './features/toolkit/LeaderToolkitSection';

export function App() {
  return (
    <HubProvider>
      <HubShell>
        <HeroFactSection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <FactLibrarySection />
          <StoriesSection />
          <EventsSection />
          <LeaderToolkitSection />
        </div>
        <MediaLibrarySection />
        <FeedbackSection />
      </HubShell>
    </HubProvider>
  );
}

export default App;
