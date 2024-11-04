import styled from '@emotion/styled';
import { GiNoodles, GiChopsticks } from "react-icons/gi"
import { FaPizzaSlice, FaHamburger } from "react-icons/fa"


function Categories() {
    return (
        <div>
            <IconsContainer>
            <IconEach>
                <GiNoodles />
                <h3>Noodles</h3>
            </IconEach>
            <IconEach>
                <GiChopsticks />
                <h3>Chaumin</h3>

            </IconEach>
            <IconEach>
                <FaPizzaSlice />
                <h3>Pizza</h3>

            </IconEach>
            <IconEach>
                <FaHamburger />
                <h3>Burger</h3>

            </IconEach>

            </IconsContainer>

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
    background-color:#252525;
    border-radius:10px;
`;

const IconEach = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    border:solid 2px;
    border-radius:8px;
    padding:0.5rem;

    &:hover{
        cursor:pointer;
        background-color:#121212;

    }

`

export default Categories