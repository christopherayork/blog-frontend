import React, { useState } from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';
import TagSearchStyled from "./styles";

const TagSearch = ({ history }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handleSubmit = () => {
    let fixed = encodeURIComponent(search).replace(/%20/g, '+');
    console.log(fixed);
    let routeEnd = `?tags=${fixed}`;
    // push to the new location, the query will be read and the request will be sent to the backend
    history.push('/' + routeEnd);
  };

  return (
    <TagSearchStyled>
      <Input
        icon='tags'
        iconPosition='left'
        label={{tag: true, content: 'Add Tag'}}
        labelPosition='right'
        placeHolder='Enter Tags'
        value={search}
        onChange={handleChange}
      />
      <Button icon onClick={handleSubmit}>
        <Icon name='search' />
      </Button>
    </TagSearchStyled>
  )
};

export default TagSearch;