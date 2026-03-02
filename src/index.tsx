import { AbsoluteFill, Text } from 'remotion';

export const IdanLogo = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#1a1a2e' }}>
      <Text
        style={{
          fontSize: 120,
          color: '#8F67F5',
          fontFamily: 'Arial',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
        text="Idan"
      />
    </AbsoluteFill>
  );
};

export default IdanLogo;
