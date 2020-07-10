import { childVariants } from './animations'
import { Button, FormControl, PlusIcon } from './InputStyles';

const Input = ({
  id,
  hasButton,
  label,
  onButtonClick,
  onChangeHandler,
  placeholder,
  value,
}) => {
  return (
    <FormControl variants={childVariants}>
      <input
        aria-label={label}
        id={id || null}
        onChange={onChangeHandler}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      {hasButton && (
        <Button
          aria-label="Submit input"
          disabled={!value}
          onClick={onButtonClick}
        >
          <PlusIcon />
        </Button>
      )}
    </FormControl>
  )
};

export default Input;
