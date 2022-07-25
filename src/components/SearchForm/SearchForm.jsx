import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormWrapper, Form, Input, Submit } from './SearchForm.styeld';

export const SearchForm = ({ onSearch }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ query }) => {
    const queryNormalized = query.trim();

    if (!queryNormalized) {
      return toast('Please, enter the text');
    }

    onSearch(queryNormalized);
    reset();
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('query')}
          type="text"
          placeholder="Movie Search"
          autoComplete="off"
          autoFocus
        />
        <Submit type="submit">Search</Submit>
      </Form>
    </FormWrapper>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
