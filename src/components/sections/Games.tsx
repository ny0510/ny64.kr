import { MaimaiProfile } from '@/components/games/MaimaiProfile';

export default function GamesSection() {
  return (
    <section className="games-section space-y-3">
      <h3 className="text-xl font-medium">게임</h3>
      <div className="grid min-w-0 grid-cols-1 gap-1">
        <MaimaiProfile />
      </div>
    </section>
  );
}
