import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';


function Veggies() {
    const [Veggies, setVeggies] = useState([])


    useEffect(() => {
        getVeggies();
    }, []);
    
    const getVeggies = async () => {
        const checkLocalStorage = localStorage.getItem('Veggiesdata');
        if (checkLocalStorage) {
            setVeggies(JSON.parse(checkLocalStorage))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`);
            const data = await api.json();
            // console.log(data); // Log the data to check its structure
            setVeggies(data.recipes); // Ensure this is defined
            localStorage.setItem('Veggiesdata',JSON.stringify(data.recipes))
        }



    }

    return (
        <div>

            <Wrapper>
                <h3>Veggies Dishes</h3>
                <Splide options={{ perPage: 3, arrows: true, pagination: false, drag: 'free', gap: '1rem' }}>

                    {Veggies.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <div >

                                    <Card>
                                    <Link>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient />
                                        <p>{recipe.title}</p>
                                    </Link>
                                    </Card>

                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>

        </div>
    );
}
const Wrapper = styled.div`
    
    display:row;
    justify-content:center;
    padding:1rem;
`
const Card = styled.div`
    border-radius:2rem;
    min-height:17rem;
    overflow:hidden;
    position:relative;
    
    

    img{
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;

    }
        p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0;
        transform:translate(-50%,0%);
        color: white;
        width:100%;
        font-size:0.8rem;
        display: flex;
        justify-content: center;
        align-items:center;
        font-weight:600;
        margin-bottom:0.5em;

        }

`;
const Gradient = styled.div`
    z-index: 5;
    position: absolute;
    width: 100%;
    height:100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;

export default Veggies;
