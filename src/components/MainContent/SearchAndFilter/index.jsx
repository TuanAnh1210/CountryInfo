import React from 'react';
import styled from 'styled-components'
import Search from './Search';
import Filter from './Filter';
function SearchAndFilter(props) {
    return (
        <SearchAndFilterPane>
            <Search />
            <Filter />
        </SearchAndFilterPane>
    );
}

export default SearchAndFilter;

const SearchAndFilterPane = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 10px;
`