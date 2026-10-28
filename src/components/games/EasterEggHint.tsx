type EasterEggHintProps = {
  readonly progress: number;
};

export function EasterEggHint({ progress }: EasterEggHintProps) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 top-full mt-1 flex gap-1 transition-opacity duration-150 motion-reduce:transition-none ${progress > 0 ? 'opacity-100' : 'opacity-0'}`}>
      {[1, 2, 3, 4, 5].map((step) => (
        <span
          key={step}
          className={`size-1 rounded-full transition-colors duration-150 motion-reduce:transition-none ${step <= progress ? 'bg-foreground' : 'bg-muted-foreground/25'}`}
        />
      ))}
    </span>
  );
}
