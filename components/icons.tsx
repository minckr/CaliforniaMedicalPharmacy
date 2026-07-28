export function IconPharmacy({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect
        x="9"
        y="4"
        width="14"
        height="24"
        rx="7"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <line x1="9" y1="16" x2="23" y2="16" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconMedicalSupply({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect
        x="4"
        y="10"
        width="24"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M11 10V8a5 5 0 0 1 10 0v2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <line x1="16" y1="14" x2="16" y2="22" stroke="currentColor" strokeWidth="1.75" />
      <line x1="12" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconDmeCrt({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="11" cy="23" r="5" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M11 23V9h4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M11 16h8l4 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="25" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconWarehouse({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect
        x="3"
        y="14"
        width="15"
        height="10"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M18 17h6l4 4v3h-10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="25" r="1.8" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="23" cy="25" r="1.8" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

export function IconFamily({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 27s-9-5.6-9-12.4C7 10.5 10 8 13 9c1.4.5 2.4 1.6 3 2.6C16.6 10.6 17.6 9.5 19 9c3-1 6 1.5 6 5.6 0 6.8-9 12.4-9 12.4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconLanguage({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M6 9h12M12 6v3M9 9c0 4 3 7 7 8M15 9c0 4-3 7-7 8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 26l4-10 4 10M19.4 22.5h5.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconShieldCheck({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 4l10 3.5v7c0 7-4.5 11.5-10 13.5-5.5-2-10-6.5-10-13.5v-7L16 4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconOneTeam({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="10" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="22" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M4 27c0-4.4 2.7-7 6-7s6 2.6 6 7M16 27c0-4.4 2.7-7 6-7s6 2.6 6 7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhotoPlaceholder({
  label,
  height = 260,
}: {
  label: string;
  height?: number;
}) {
  return (
    <div className="photo-placeholder" style={{ height }}>
      <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
        <rect
          x="3"
          y="7"
          width="26"
          height="19"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="11" cy="14" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 22l7-6 5 4 5-5 7 7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <span>{label}</span>
    </div>
  );
}
