import React from 'react';
import Title from './TitleComponent';
import ProductList from './ProductListComponent';

export default function Search(props) {

    var searchResult = []
    if(props.searchValue != ''){
        const reg = new RegExp(`${props.searchValue}`, 'i');
        searchResult = props.products.filter(p => reg.test(p.title))
    }
   
    return (
        <div className="container searchContainer" >
         
            <Title name="Search result for" title={props.searchValue }/>
            {
                searchResult.length === 0 ?
                <div className='d-flex justify-content-center pt-4'>
                    <i className='fas fa-sad-tear fa-10x'></i>
                </div>
                :
                <ProductList products={searchResult} addToCart={props.addToCart}/>

            }
        </div>
    );

}