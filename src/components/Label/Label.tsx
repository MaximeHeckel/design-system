import Text from '../Typography';

const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  const { children, ...rest } = props;
  return (
    <Text
      {...rest}
      as="label"
      css={{
        display: 'inline-block',
        cursor: 'pointer',
        userSelect: 'none',
        marginRight: '8px',
        letterSpacing: '0px',
        verticalAlign: 'top',
      }}
      variant="secondary"
      size="1"
      weight="3"
    >
      {children}
    </Text>
  );
};

export default Label;
