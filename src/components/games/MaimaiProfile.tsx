import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { GameProfileCard } from './GameProfileCard';
import { EasterEggHint } from './EasterEggHint';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import ky from 'ky';
import { maimaiProfile } from '@/data/content';
import { maimaiProfileSchema, type MaimaiProfileData } from '@/data/maimai';

type RatingState = { readonly status: 'loading' } | { readonly status: 'ready'; readonly data: MaimaiProfileData } | { readonly status: 'unavailable' };

type CopyStatus = 'idle' | 'copying' | 'copied' | 'failed';

function getRatingLabel(state: RatingState): { readonly label: string; readonly title: string; readonly stale: boolean } {
  switch (state.status) {
    case 'loading':
      return { label: '—', title: '레이팅 불러오는 중', stale: false };
    case 'ready':
      return {
        label: new Intl.NumberFormat('en-US').format(state.data.rating),
        title: `${state.data.stale ? '이전 기록 · ' : ''}마지막 동기화: ${new Date(state.data.syncedAt).toLocaleString('ko-KR', { dateStyle: 'short', timeStyle: 'short' })}`,
        stale: state.data.stale,
      };
    case 'unavailable':
      return { label: '기록 보기', title: 'maishift에서 레이팅 확인', stale: false };
    default: {
      const unreachable: never = state;
      return unreachable;
    }
  }
}

export function MaimaiProfile() {
  const [rating, setRating] = useState<RatingState>({ status: 'loading' });
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const [clickProgress, setClickProgress] = useState<readonly number[]>([]);
  const friendCodeRef = useRef<HTMLSpanElement>(null);
  const friendCodeClicks = useRef<readonly number[]>([]);
  const ratingLabel = getRatingLabel(rating);

  useEffect(() => {
    const controller = new AbortController();
    ky.get('/api/maimai', { signal: controller.signal, retry: 0, timeout: 6000 })
      .json<unknown>()
      .then((body) => {
        const data = maimaiProfileSchema.parse(body);
        if (!controller.signal.aborted) setRating({ status: 'ready', data });
      })
      .catch((error: unknown) => {
        if (!(error instanceof Error)) throw error;
        if (!controller.signal.aborted) setRating({ status: 'unavailable' });
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (copyStatus !== 'copied') return;
    const timeout = window.setTimeout(() => setCopyStatus('idle'), 2000);
    return () => window.clearTimeout(timeout);
  }, [copyStatus]);

  useEffect(() => {
    if (clickProgress.length === 0) return;
    const timeout = window.setTimeout(() => {
      friendCodeClicks.current = [];
      setClickProgress([]);
    }, 2000);
    return () => window.clearTimeout(timeout);
  }, [clickProgress]);

  async function copyFriendCode() {
    const now = performance.now();
    friendCodeClicks.current = [...friendCodeClicks.current.filter((time) => now - time < 2000), now];
    setClickProgress(friendCodeClicks.current);
    if (friendCodeClicks.current.length >= 5) {
      window.location.assign('/?maimai');
      return;
    }
    if (copyStatus === 'copying') return;

    const code = friendCodeRef.current;
    const selection = window.getSelection();
    if (code && selection) {
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    if (!navigator.clipboard) {
      setCopyStatus('failed');
      return;
    }
    setCopyStatus('copying');
    try {
      await navigator.clipboard.writeText(maimaiProfile.friendCode);
      setCopyStatus('copied');
    } catch (error: unknown) {
      if (!(error instanceof Error)) throw error;
      setCopyStatus('failed');
    }
  }

  return (
    <GameProfileCard
      title="maimai DX"
      name={maimaiProfile.name}
      href={maimaiProfile.url}
      statistic={
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="flex flex-wrap items-center gap-x-1">
              <span className="text-xs text-muted-foreground">레이팅</span>
              <span className="font-medium tabular-nums" aria-live="polite">
                {ratingLabel.label}
              </span>
              {ratingLabel.stale && <span className="text-xs text-muted-foreground">이전 기록</span>}
            </span>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={0} className="max-w-72">
            {ratingLabel.title}
          </TooltipContent>
        </Tooltip>
      }>
      <div className="flex flex-wrap items-center gap-x-1">
        <p className="text-xs text-muted-foreground">친구 코드</p>
        <span className="relative isolate inline-flex">
          <button
            type="button"
            onClick={copyFriendCode}
            aria-label={copyStatus === 'copied' ? '친구 코드 복사 완료' : '친구 코드 복사'}
            aria-busy={copyStatus === 'copying'}
            className="inline-flex cursor-pointer items-center text-left text-base font-medium leading-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
            <span ref={friendCodeRef} className="select-text tabular-nums">
              {maimaiProfile.friendCode}
            </span>
            <span className="sr-only" aria-live="polite">
              {copyStatus === 'copied' ? '친구 코드를 복사했습니다.' : ''}
            </span>
          </button>
          <Check
            size={14}
            aria-hidden="true"
            className={`pointer-events-none absolute -right-1 top-1/2 size-3 -translate-y-1/2 translate-x-full transition-opacity duration-150 sm:size-3.5 ${copyStatus === 'copied' ? 'opacity-100' : 'opacity-0'}`}
          />
          <EasterEggHint progress={clickProgress.length} />
        </span>
      </div>
      {copyStatus === 'failed' && (
        <p role="status" className="mt-2 break-keep text-xs text-muted-foreground">
          복사할 수 없습니다. 친구 코드를 직접 선택해 복사해 주세요.
        </p>
      )}
    </GameProfileCard>
  );
}
