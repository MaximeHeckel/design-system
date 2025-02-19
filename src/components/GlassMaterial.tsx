import { styled } from 'src/lib/stitches.config';

const GlassMaterial = styled('div', {
  borderRadius: 'inherit',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'oklch(from var(--gray-900) l c h / var(--opacity, 0.3))',
  zIndex: -10,
  backdropFilter: 'blur(var(--blur, 12px)) saturate(var(--saturate, 1.15))',
  pointerEvents: 'none',

  variants: {
    border: {
      true: {
        border:
          'var(--thickness, 1px) solid oklch(from var(--gray-1100) l c h / 20%)',
      },
      false: {
        border: 'none',
      },
    },
  },

  defaultVariants: {
    border: true,
  },
});

export { GlassMaterial };
