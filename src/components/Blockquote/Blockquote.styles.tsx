import { styled } from 'src/lib/stitches.config';
import Box from '../Box';

export const BlockquoteWrapper = styled('blockquote', {
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
});

export const BlockquoteContent = styled(Box, {
  maxWidth: '1020px',
  padding: '0 var(--space-2)',
  textAlign: 'center',
  width: '100%',
  margin: '0 auto',
  color: 'var(--maximeheckel-colors-typeface-primary)',

  p: {
    marginBottom: 0,
    fontSize: 'var(--font-size-6) !important',
    lineHeight: '1.6818 !important',
    fontWeight: 'var(--font-weight-2) !important',
    fontStyle: 'italic',
  },
});
