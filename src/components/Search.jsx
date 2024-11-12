import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [myinput, setmyinput] = useState("");
    const navigate = useNavigate(); 

    function handleSearch(placeholderText) {
        // console.log(placeholderText)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/searched/" + myinput); 
    };

    return (
        <MainSearch>
            <form onSubmit={handleSubmit}>
                <SearchContainer>
                    <FaSearch
                        onClick={() => {
                            handleSearch(myinput);
                        }}
                        className="search-icon"
                    />
                    <input
                        onChange={(e) => {
                            setmyinput(e.target.value);
                        }}
                        type="text"
                        placeholder="Search here"
                        value={myinput}
                    />
                </SearchContainer>
            </form>
        </MainSearch>
    );
}

export default Search;

const MainSearch = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 5px 10px;
  max-width: 400px;
  width: 100%;
  border: solid 0.5px #252525;

  .search-icon {
    color: gray;
    margin-right: 10px;
    font-size: 18px;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 16px;
    color: black;
  }
`;
