import { interpolate, spring, useCurrentFrame, useVideoConfig, Text, AbsoluteFill, LinearGradient } from 'remotion';

export const IdanLogo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scale animation
  const scale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 100 }
  });

  // Opacity for fade in
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  // Letter by letter animation
  const letters = "Idan".split("");
  const letterDelay = 15;

  return (
    <AbsoluteFill style={{ backgroundColor: '#0D0D0D' }}>
      {/* Background gradient */}
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        angle={45}
        style={{ position: 'absolute', inset: 0 }}
      />
      
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(143, 103, 245, 0.3) 0%, transparent 70%)',
      }} />

      {/* Letters */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
translate(-50%, -50%) scale(${scale})`,
        transform: `        display: 'flex',
        gap: 8,
        opacity,
      }}>
        {letters.map((letter, i) => (
          <Letter key={i} letter={letter} delay={i * letterDelay} />
        ))}
      </div>

      {/* Tagline */}
      <Text
        style={{
          position: 'absolute',
          bottom: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255,255,255,0.5)',
          fontSize: 24,
          fontFamily: 'Arial, sans-serif',
          letterSpacing: 8,
          opacity: interpolate(frame, [60, 90], [0, 1]),
        }}
        text="MOTION DESIGN"
      />
    </AbsoluteFill>
  );
};

const Letter = ({ letter, delay }: { letter: string; delay: number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const y = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 150 }
  });

  const letterOpacity = interpolate(
    frame,
    [delay, delay + 15],
    [0, 1]
  );

  return (
    <div style={{
      transform: `translateY(${ interpolate(y, [0, 1], [100, 0]) }px)`,
      opacity: letterOpacity,
    }}>
      <Text
        style={{
          fontSize: 180,
          fontWeight: 'bold',
          fontFamily: 'Arial Black, sans-serif',
          background: 'linear-gradient(135deg, #8F67F5 0%, #D0C4F2 50%, #8F67F5 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textShadow: '0 0 60px rgba(143, 103, 245, 0.8)',
        }}
        text={letter}
      />
    </div>
  );
};

export default IdanLogo;
