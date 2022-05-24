import { styled } from 'src/lib/stitches.config';

export const StyledBlockquote = styled('blockquote', {
  /**
   * Make it fullbleed!
   */
  width: '100vw',
  marginLeft: 'calc(50% - 50vw)',
  marginBottom: '2.25rem',

  paddingTop: '40px',
  paddingBottom: '40px',
  background: 'var(--maximeheckel-colors-emphasis)',
  backdropFilter: 'blur(6px)',

  p: {
    marginBottom: 0,
    fontSize: 'var(--font-size-6) !important',
    lineHeight: '1.6818 !important',
    fontWeight: 'var(--font-weight-2) !important',
    fontStyle: 'italic',
  },

  div: {
    maxWidth: '880px !important',
    padding: '0 20px',
    width: '100%',
    margin: '0 auto',
    color: 'var(--maximeheckel-colors-typeface-primary)',
  },
});
