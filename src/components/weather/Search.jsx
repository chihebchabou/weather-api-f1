import { useState } from 'react';

const Search = ({ searchWeather }) => {
  const [text, setText] = useState('');

  const onFormSubmitted = e => {
    e.preventDefault();
    if (!text) {
      alert('Please enter your location');
    } else {
      searchWeather(text);
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
