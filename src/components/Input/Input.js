import { childVariants } from './animations'
import { Button, FormControl, PlusIcon } from './InputStyles';
import AddIcon from '@material-ui/icons/Add';

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
          aria-label="Submit"
          disabled={!value}
          onClick={onButtonClick}
        >
          <AddIcon style={{background: "transparent"}} />
        </Button>
      )}
    </FormControl>
  )
};

export default Input;
