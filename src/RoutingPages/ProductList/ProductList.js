import React from "react"
import style from "./ProductList.module.css"
import ProductListItem from "./ProductListItem/ProductListItem";

const ProductList = (props) => {

    let ProductListElement = props.ProductData.map ((product)=> (
        <ProductListItem
            ProductName={product.ProductName}
            Image={product.Image}
            Price={product.Price}
        />
    ))

    return (
        <div className={style.ProductList}>
            <div className={style.FilterList}>
                <span className={style.FilterListTitle}> Sort by: </span>
                <div className={style.FilterListElements}>
                <span className={style.FilterListElement}> Sort element №1</span>
                <span className={style.FilterListElement}> Sort element №2</span>
                <span className={style.FilterListElement}> Sort element №3</span>
                <span className={style.FilterListElement}> Sort element №4</span>
                <span className={style.FilterListElement}> Sort element №5</span>
                </div>
            </div>
            <div className={style.GoodsList}>
                {ProductListElement}
            </div>
        </div>
    )
}

export default ProductList