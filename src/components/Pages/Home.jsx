import { useLoaderData } from "react-router-dom";
import Banner from "../Banner";
import Heading from "../Heading";
import Categories from "../Categories";


const Home = () => {
    const categories =useLoaderData()
    return (
        <div>
        <Banner></Banner>
        <Heading title={'Browse Coffees By Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit your taste  '}></Heading>


       
       
            <Categories categories={categories}></Categories>
        </div>
        
        

    );
};

export default Home;