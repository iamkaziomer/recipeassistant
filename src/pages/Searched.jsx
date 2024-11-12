import {React,useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';



function Searched() {
    const [searchedRecipes, setsearchedRecipes]=useState([]);
    let params = useParams();

    const getSearched= async(name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${name}`)
        const recipes = await data.json();
        setsearchedRecipes(recipes.results);
    }

    useEffect(() => {
        getSearched(params.search) 
    }, [params.search])
    
  return (
    <Wrapper>
        <Splide options={{ perPage: 3, arrows: true, pagination: false, drag: 'free', gap: '1rem' }}>
        {searchedRecipes.map((item)=>{
            return(
                <SplideSlide key={item.id}>

                
                <Card >
                <img src={item.image} alt={item.title} />
                <Gradient />
                <p>{item.title}</p>

                </Card>

                </SplideSlide>
            )
        })}
        </Splide>
    </Wrapper>
  )
}



//custom styling
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


export default Searched
