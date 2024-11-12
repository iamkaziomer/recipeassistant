import styled from '@emotion/styled';
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import { FaPizzaSlice, FaHamburger } from "react-icons/fa"
import { NavLink } from 'react-router-dom'; import Search from './Search';


function Categories() {
    return (
        <div className='categoryWrapper'>
            <NavLink to={'/'}>
            <h1 className='recipeLogo'>Recipe Finder</h1>
            </NavLink>
            <IconsContainer>
            <NavLink to={'/cuisine/Thai'}className="itemStyle">
                <GiNoodles className="icon" />
                <h3>Thai</h3>
            </NavLink>
            <NavLink to={'/cuisine/Japanese'}className="itemStyle">
                <GiChopsticks className="icon" />
                <h3>Japanese</h3>

            </NavLink>
            <NavLink to={'cuisine/Italian'}className="itemStyle">
                <FaPizzaSlice className="icon" />
                <h3>Italian</h3>

            </NavLink>
            <NavLink to={'/cuisine/American'} className="itemStyle">
                <FaHamburger className="icon" />
                <h3>American</h3>

            </NavLink>

            

            </IconsContainer>
            <Search/>

        </div>
    )
}

const IconsContainer = styled.div`


    display:flex;
    justify-content:center;
    padding:0.5rem;
    margin-top:2rem;
    align-items:center;
    gap:0.5rem;
    border-radius:10px;
`;

export default Categories