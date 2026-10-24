/**
 * Adapted from Aira-Sakuranomiya/white-aria DXTransition (AGPL-3.0).
 * Source: https://github.com/Aira-Sakuranomiya/white-aria/tree/28958634ba6ad45433b3d09f9ad3947f81c9fdc7/app/components/DXTransition
 * Modified 2026-10-24: Vue templates converted to React SVG primitives.
 * See LICENSE in this directory. Palette reference: https://nozoki.soki.moe/.
 */

type ShapeProps = { readonly className?: string };

export function Bg({ className = '' }: ShapeProps) {
  return (
    <div className={`dx-background ${className}`}>
      <div>
        <svg className="dx-mosaic" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="23" width="1" height="1" />
          <rect x="5" y="22" width="1" height="1" />
          <rect x="6" y="21" width="1" height="1" />
          <rect x="7" y="22" width="1" height="1" />
          <rect x="8" y="23" width="1" height="1" />
          <rect x="8" y="21" width="1" height="1" />
          <rect x="1" y="25" width="1" height="1" />
          <rect x="7" y="19" width="1" height="1" />
          <rect x="8" y="18" width="1" height="1" />
          <rect x="13" y="14" width="1" height="1" />
          <rect x="20" y="7" width="1" height="1" />
          <rect x="21" y="6" width="1" height="1" />
          <rect x="22" y="5" width="1" height="1" />
          <rect x="23" y="3" width="1" height="1" />
          <rect x="24" y="5" width="1" height="1" />
          <rect x="24" y="2" width="1" height="1" />
          <rect x="1" y="28" width="1" height="1" />
          <rect y="26" width="1" height="1" />
          <rect x="25" y="1" width="1" height="1" />
          <rect x="26" width="1" height="1" />
          <rect x="28" y="1" width="1" height="1" />
        </svg>
        <div className="dx-rectangle" />
      </div>
    </div>
  );
}

export function Side({ className = '' }: ShapeProps) {
  return (
    <div className={`dx-side ${className}`}>
      <div>
        <svg className="dx-mosaic dx-mosaic-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="21" width="1" height="1" />
          <rect x="4" y="20" width="1" height="1" />
          <rect x="5" y="19" width="1" height="1" />
          <rect x="6" y="20" width="1" height="1" />
          <rect x="7" y="21" width="1" height="1" />
          <rect x="7" y="19" width="1" height="1" />
          <rect y="23" width="1" height="1" />
          <rect x="6" y="17" width="1" height="1" />
          <rect x="7" y="16" width="1" height="1" />
          <rect x="12" y="12" width="1" height="1" />
          <rect x="19" y="5" width="1" height="1" />
          <rect x="20" y="4" width="1" height="1" />
          <rect x="21" y="3" width="1" height="1" />
          <rect x="22" y="1" width="1" height="1" />
          <rect x="23" y="3" width="1" height="1" />
          <rect x="23" width="1" height="1" />
        </svg>
        <div className="dx-rectangle dx-rectangle-1" />
      </div>
      <div>
        <svg className="dx-mosaic dx-mosaic-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="12" width="1" height="1" />
          <rect x="6" y="11" width="1" height="1" />
          <rect x="7" y="10" width="1" height="1" />
          <rect x="8" y="11" width="1" height="1" />
          <rect x="9" y="10" width="1" height="1" />
          <rect x="10" y="8" width="1" height="1" />
          <rect x="11" y="7" width="1" height="1" />
          <rect x="13" y="6" width="1" height="1" />
          <rect x="13" y="4" width="1" height="1" />
          <rect x="16" y="3" width="1" height="1" />
          <rect x="17" y="2" width="1" height="1" />
          <rect x="18" y="1" width="1" height="1" />
          <rect x="17" width="1" height="1" />
          <rect x="12" y="5" width="1" height="1" />
          <rect x="9" y="12" width="1" height="1" />
          <rect x="16" y="1" width="1" height="1" />
        </svg>
        <div className="dx-rectangle dx-rectangle-2" />
      </div>
    </div>
  );
}

export function Slide({ className = '' }: ShapeProps) {
  return (
    <svg className={className} viewBox="0 0 64 227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 63L32 54L48 63V75.5L32 66.5L16 75.5V63Z" />
    <path d="M16 83L32 74L48 83V95.5L32 86.5L16 95.5V83Z" />
    <path d="M16 103L32 94L48 103V115.5L32 106.5L16 115.5V103Z" />
    <path d="M16 123L32 114L48 123V135.5L32 126.5L16 135.5V123Z" />
    <path d="M16 143L32 134L48 143V155.5L32 146.5L16 155.5V143Z" />
    <path d="M16 163L32 154L48 163V175.5L32 166.5L16 175.5V163Z" />
    <path d="M16 183L32 174L48 183V195.5L32 186.5L16 195.5V183Z" />
    <path d="M16 203L32 194L48 203V215.5L32 206.5L16 215.5V203Z" />
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M36.5403 10.8433C34.7532 6.96896 29.2468 6.96896 27.4597 10.8433L23.2537 19.9618L13.2818 21.1442C9.04485 21.6465 7.34327 26.8834 10.4758 29.7803L17.8483 36.5982L15.8912 46.4474C15.0597 50.6322 19.5145 53.8688 23.2376 51.7848L32 46.88L40.7624 51.7848C44.4855 53.8688 48.9403 50.6322 48.1087 46.4474L46.1517 36.5982L53.5242 29.7803C56.6567 26.8834 54.9551 21.6465 50.7182 21.1442L40.7462 19.9618L36.5403 10.8433ZM36.5142 25.7868L32 16L27.4858 25.7868L16.7831 27.0557L24.6959 34.3733L22.5954 44.9443L32 39.68L41.4045 44.9443L39.3041 34.3733L47.2169 27.0557L36.5142 25.7868Z"
    />
  </svg>
  );
}

export function SlideLong({ className = '' }: ShapeProps) {
  return (
    <svg className={className} viewBox="0 0 64 334" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 171L32 162L48 171V334L32 325L16 334V171Z" />
    <path d="M16 64L32 55L48 64V76.5L32 67.5L16 76.5V64Z" />
    <path d="M16 85.5L32 76.5L48 85.5V98L32 89L16 98V85.5Z" />
    <path d="M16 107L32 98L48 107V119.5L32 110.5L16 119.5V107Z" />
    <path d="M16 128.5L32 119.5L48 128.5V141L32 132L16 141V128.5Z" />
    <path d="M16 150L32 141L48 150V162.5L32 153.5L16 162.5V150Z" />
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M36.5403 10.8433C34.7532 6.96896 29.2468 6.96896 27.4597 10.8433L23.2538 19.9618L13.2818 21.1442C9.04487 21.6465 7.34328 26.8834 10.4758 29.7803L17.8483 36.5982L15.8913 46.4474C15.0597 50.6322 19.5145 53.8688 23.2376 51.7848L32 46.88L40.7624 51.7848C44.4855 53.8688 48.9403 50.6322 48.1088 46.4474L46.1517 36.5982L53.5242 29.7803C56.6567 26.8834 54.9551 21.6465 50.7182 21.1442L40.7462 19.9618L36.5403 10.8433ZM36.5142 25.7868L32 16L27.4858 25.7868L16.7831 27.0557L24.6959 34.3733L22.5954 44.9443L32 39.68L41.4046 44.9443L39.3041 34.3733L47.2169 27.0557L36.5142 25.7868Z"
    />
  </svg>
  );
}

export function Hold({ className = '' }: ShapeProps) {
  return (
    <svg className={className} viewBox="0 0 48 489" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M16 324.263L5 318.076V11.9242L16 5.73674V0L0 9V321L16 330V324.263Z"
    />
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M16 1.43418L30.75 9.73106V320.269L16 328.566V330L32 321V9L16 0V1.43418ZM16 4.30255V5.73674L27 11.9242V318.076L16 324.263V325.697L16.6128 325.353L27.6128 319.165L28.25 318.807V318.076V11.9242V11.1932L27.6128 10.8348L16.6128 4.64727L16 4.30255Z"
    />
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M32 483.263L21 477.076V335.924L32 329.737V324L16 333V480L32 489V483.263Z"
    />
    <path
      fillRule="evenodd" clipRule="evenodd"
      d="M32 325.434L46.75 333.731V479.269L32 487.566V489L48 480V333L32 324V325.434ZM32 328.303V329.737L43 335.924V477.076L32 483.263V484.697L32.6128 484.353L43.6128 478.165L44.25 477.807V477.076V335.924V335.193L43.6128 334.835L32.6128 328.647L32 328.303Z"
    />
  </svg>
  );
}

export function Center({ className = '' }: ShapeProps) {
  return (
    <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd" clipRule="evenodd"
              d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM51.5 49C51.7761 49 52 48.7761 52 48.5C52 48.2239 51.7761 48 51.5 48C51.2239 48 51 48.2239 51 48.5C51 48.7761 51.2239 49 51.5 49ZM48.5 52C48.7761 52 49 51.7761 49 51.5C49 51.2239 48.7761 51 48.5 51C48.2239 51 48 51.2239 48 51.5C48 51.7761 48.2239 52 48.5 52ZM53.5 32C53.5 43.8741 43.8741 53.5 32 53.5C20.1259 53.5 10.5 43.8741 10.5 32C10.5 26.9623 12.2326 22.3293 15.1345 18.6643C14.7399 18.2223 14.5 17.6392 14.5 17C14.5 15.6193 15.6193 14.5 17 14.5C17.6392 14.5 18.2223 14.7399 18.6643 15.1345C22.3293 12.2326 26.9623 10.5 32 10.5C37.0377 10.5 41.6707 12.2326 45.3357 15.1345C45.7777 14.7399 46.3608 14.5 47 14.5C48.3807 14.5 49.5 15.6193 49.5 17C49.5 17.6392 49.2601 18.2223 48.8655 18.6643C51.7674 22.3293 53.5 26.9623 53.5 32ZM38.7703 2.76719L37.5145 9.15104C39.9282 9.7317 42.1974 10.6849 44.257 11.9461L47.8827 6.54447C45.1152 4.81414 42.0453 3.52257 38.7703 2.76719ZM26.4855 9.15104C24.0718 9.73169 21.8026 10.6848 19.7431 11.946L16.1158 6.54208C18.9657 4.76044 22.0497 3.50294 25.2302 2.76958L26.4855 9.15104ZM52.0548 19.7444C53.3158 21.804 54.2688 24.0732 54.8493 26.487L61.2312 25.2315C60.4979 22.0511 59.2404 18.967 57.4587 16.1171L52.0548 19.7444ZM54.8491 37.5157C54.2685 39.9295 53.3153 42.1983 52.0538 44.2577L57.4563 47.884C59.1867 45.1166 60.4782 42.0466 61.2336 38.7716L54.8491 37.5157ZM37.5136 54.8496C39.9275 54.2692 42.1962 53.3163 44.2557 52.0551L47.8837 57.4601C45.0338 59.2417 41.9497 60.4992 38.7693 61.2326L37.5136 54.8496ZM26.4854 54.8493C24.0716 54.2689 21.8029 53.3159 19.7435 52.0546L16.1168 57.4577C18.8842 59.188 21.9542 60.4796 25.2292 61.235L26.4854 54.8493ZM9.15076 37.5151C9.73128 39.9289 10.6843 42.1976 11.9457 44.257L6.54074 47.885C4.75911 45.0351 3.5016 41.9511 2.76824 38.7706L9.15076 37.5151ZM2.76585 25.2305L9.15079 26.4866C9.73131 24.0729 10.6843 21.8038 11.9453 19.7442L6.54313 16.1181C4.8128 18.8856 3.52124 21.9555 2.76585 25.2305Z"
            />
            <path
              d="M45 38.5C45 39.8807 43.8807 41 42.5 41C41.1193 41 40 39.8807 40 38.5C40 37.1193 41.1193 36 42.5 36C43.8807 36 45 37.1193 45 38.5Z"
            />
            <path
              d="M45 38.5C45 39.8807 43.8807 41 42.5 41C41.1193 41 40 39.8807 40 38.5C40 37.1193 41.1193 36 42.5 36C43.8807 36 45 37.1193 45 38.5Z"
            />
            <path
              d="M24 38.5C24 39.8807 22.8807 41 21.5 41C20.1193 41 19 39.8807 19 38.5C19 37.1193 20.1193 36 21.5 36C22.8807 36 24 37.1193 24 38.5Z"
            />
            <path
              d="M24 38.5C24 39.8807 22.8807 41 21.5 41C20.1193 41 19 39.8807 19 38.5C19 37.1193 20.1193 36 21.5 36C22.8807 36 24 37.1193 24 38.5Z"
            />
            <path
              d="M32 38.25C30.168 38.25 30.0078 38.5953 30.0078 38.9598C30.0078 39.2486 30.4108 40.0874 31.25 40.4233V42.1895L29.2595 44.1816C28.9667 44.4746 28.9669 44.9494 29.2599 45.2422C29.5529 45.535 30.0278 45.5348 30.3205 45.2418L32.0002 43.5609L33.6814 45.242C33.9743 45.5349 34.4491 45.5349 34.742 45.242C35.0349 44.9491 35.0349 44.4743 34.742 44.1814L32.75 42.1893V40.423C33.5965 40.085 34.0137 39.2392 34.0137 38.9598C34.0137 38.6075 33.832 38.25 32 38.25Z"
            />
          </svg>
  );
}
