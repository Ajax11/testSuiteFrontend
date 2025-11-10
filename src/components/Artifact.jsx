import { Label, Input, FormGroup } from 'reactstrap';
import PropTypes from 'prop-types';

function InputToFill({ textLabelInput, textInputType, textInputValue }) {
    return (
        <form>
            <FormGroup>
                <Label>{textLabelInput}:</Label>
                <Input type={textInputType} value={textInputValue} readOnly />
            </FormGroup>
        </form>
    );
}

InputToFill.propTypes = {
    textLabelInput: PropTypes.string.isRequired,
    textInputType: PropTypes.string.isRequired,
    textInputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputToFill.defaultProps = {
    textInputValue: '',
};

export default InputToFill;
