import Label from '../Label';
import { StyledCheckbox } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';
import Flex from '../Flex';

const Checkbox = (props: CheckboxProps) => {
  const { checked, disabled, id, label, ...rest } = props;
  return (
    <Flex gap={2}>
      <StyledCheckbox
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-checked={checked}
        role="checkbox"
        {...rest}
      />
      {label ? <Label htmlFor={id}>{label}</Label> : null}
    </Flex>
  );
};

export default Checkbox;
