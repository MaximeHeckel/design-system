import { styled } from 'src/lib/stitches.config';
import Box from '../Box';

export const BlockquoteWrapper = styled('blockquote', {
  /**
   * Make it fullbleed!
   */
  margin: '0 -50vw 0 -50vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  width: 'calc(var(--vw, 1vw) * 100)',

  paddingTop: '40px',
  paddingBottom: '40px',
  background: 'var(--emphasis)',
  backdropFilter: 'blur(6px)',
});

export const BlockquoteContent = styled(Box, {
  maxWidth: '1020px',
  padding: '0 var(--space-2)',
  textAlign: 'center',
  width: '100%',
  margin: '0 auto',
  color: 'var(--text-primary)',

  p: {
    marginBottom: 0,
    fontSize: 'var(--font-size-6) !important',
    lineHeight: '1.6818 !important',
    fontWeight: 'var(--font-weight-400) !important',
    fontStyle: 'italic',
  },
});
