import Link from "next/link";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import styles from "./not-found.module.css";

// ---------------------------------------------------------------------------
// Fonts
// If your project already loads these (or equivalents) globally via a root
// layout, DELETE this block and swap the className references below for your
// existing font variable classes — you don't want to load the same family twice.
// ---------------------------------------------------------------------------
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata = {
  title: "404 — Route Not Found",
  description: "The page you're looking for doesn't exist or may have been moved.",
};

export default function NotFound() {
  return (
    <main
      className={`${styles.page} ${display.variable} ${mono.variable} ${body.variable}`}
    >
      {/* ---------------------------------------------------------------- */}
      {/* Ambient / decorative layers — purely visual, hidden from AT      */}
      {/* ---------------------------------------------------------------- */}
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glowPink}`} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glowPurple}`} aria-hidden="true" />

      <div className={styles.radar} aria-hidden="true">
        <span className={styles.radarRing} style={{ ["--i" as string]: 0 }} />
        <span className={styles.radarRing} style={{ ["--i" as string]: 1 }} />
        <span className={styles.radarRing} style={{ ["--i" as string]: 2 }} />
        <span className={styles.radarCross} />
      </div>

      <span className={`${styles.coordLabel} ${styles.coordTl}`} aria-hidden="true">
        SYS_ID // 0x1F.404
      </span>
      <span className={`${styles.coordLabel} ${styles.coordBr}`} aria-hidden="true">
        NODE::UNREACHABLE
      </span>

      {/* ---------------------------------------------------------------- */}
      {/* Content                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className={styles.content}>
        <div className={styles.statusBadge}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.statusText}>ERROR // ROUTE NOT FOUND</span>
        </div>

        <div className={styles.hero404Wrap}>
          <p className={styles.hero404} data-text="404" aria-hidden="true">
            404
          </p>
        </div>

        <h1 className={styles.heading}>PAGE NOT FOUND</h1>
        <p className={styles.subtext}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have been moved.
        </p>

        <div className={styles.ctaGroup}>
          <Link href="/" className={`${styles.btn} ${styles.btnPrimary}`}>
            BACK TO HOME
          </Link>
        
        </div>

        <div className={styles.terminalPanel} aria-hidden="true">
          <div className={styles.terminalHeader}>
            <span className={styles.terminalDot} />
            <span className={styles.terminalDot} />
            <span className={styles.terminalDot} />
            <span className={styles.terminalTitle}>system.log</span>
          </div>
          <pre className={styles.terminalBody}>
            <span className={styles.terminalLine}>
              <span className={styles.terminalMuted}>$</span> route.resolve()
            </span>
            <span className={styles.terminalLine}>
              <span className={styles.terminalError}>✕</span> lookup failed — 404
            </span>
            <span className={styles.terminalLine}>
              <span className={styles.terminalMuted}>→</span> path not found in registry
            </span>
            <span className={styles.terminalLine}>
              <span className={styles.terminalMuted}>→</span> suggest: return to root
            </span>
          </pre>
        </div>
      </section>
    </main>
  );
}