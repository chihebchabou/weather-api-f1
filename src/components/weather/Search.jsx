import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchWeather } from '../../redux/actions/weatherActions';

const Search = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onFormSubmitted = e => {
    e.preventDefault();
    if (!text) {
      alert('Please enter your location');
    } else {
      dispatch(searchWeather(text));
      setText('');
    }
  };

  return (
    <form onSubmit={onFormSubmitted}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="city"
      />
    </form>
  );
};

export default Search;
